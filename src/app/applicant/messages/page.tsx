"use client";

import { FormEvent, useEffect, useState } from "react";

type MessageItem = {
  id: string;
  body: string;
  createdAt: string;
  sender: {
    name: string | null;
    role: string;
  };
};

export default function ApplicantMessagesPage() {
  const [applicationId, setApplicationId] = useState<string>("");
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    void (async () => {
      const appRes = await fetch("/api/applicant/application", { cache: "no-store" });
      const appJson = (await appRes.json()) as { application?: { id: string } };
      if (!appRes.ok || !appJson.application?.id) {
        setStatus("Sign in as an applicant to load messages.");
        return;
      }

      setApplicationId(appJson.application.id);
      const res = await fetch(`/api/applicant/messages?applicationId=${appJson.application.id}`, { cache: "no-store" });
      const json = (await res.json()) as { thread?: { messages: MessageItem[] } };
      if (res.ok) {
        setMessages(json.thread?.messages ?? []);
      }
    })();
  }, []);

  async function submitMessage(event: FormEvent) {
    event.preventDefault();
    if (!applicationId || !body.trim()) return;

    const res = await fetch("/api/applicant/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ applicationId, body })
    });

    if (!res.ok) {
      setStatus("Message could not be sent.");
      return;
    }

    setBody("");
    const refresh = await fetch(`/api/applicant/messages?applicationId=${applicationId}`, { cache: "no-store" });
    const refreshJson = (await refresh.json()) as { thread?: { messages: MessageItem[] } };
    setMessages(refreshJson.thread?.messages ?? []);
    setStatus("Message sent.");
  }

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Secure messages</h1>

      <div className="space-y-3 rounded-xl border border-slate-200 p-4">
        {messages.length === 0 ? <p className="text-sm text-slate-600">No messages yet.</p> : null}
        {messages.map((message) => (
          <article key={message.id} className="rounded-md border border-slate-200 bg-slate-50 p-3">
            <p className="text-sm font-medium text-slate-700">{message.sender.name ?? message.sender.role}</p>
            <p className="mt-1 text-slate-800">{message.body}</p>
          </article>
        ))}
      </div>

      <form onSubmit={submitMessage} className="space-y-2">
        <textarea
          className="w-full rounded-md border border-slate-300 px-3 py-2"
          rows={4}
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Write a message to staff"
        />
        <button type="submit" className="rounded-md bg-teal-700 px-4 py-2 text-white hover:bg-teal-800">
          Send
        </button>
      </form>

      {status ? <p className="text-sm text-slate-700">{status}</p> : null}
    </section>
  );
}
