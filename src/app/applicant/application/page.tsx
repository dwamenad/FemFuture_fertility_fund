"use client";

import { useEffect, useMemo, useState } from "react";

type StepData = Record<string, unknown>;

type ApplicationResponse = {
  application: {
    id: string;
    status: string;
    steps: Array<{ step: number; data: StepData; isComplete: boolean }>;
  };
};

const totalSteps = 6;

function defaultStepData(step: number): StepData {
  if (step === 1) return { legalFirstName: "", legalLastName: "", phone: "", city: "", state: "", pronouns: "" };
  if (step === 2) return { institutionName: "", academicStage: "MEDICAL_SCHOOL", expectedCompletionAt: "" };
  if (step === 3) return { requestType: "EGG_FREEZING", targetProcedureDate: "", timelineNotes: "" };
  if (step === 4)
    return {
      householdIncomeBand: "UNDER_50K",
      availableSavingsBand: "UNDER_5K",
      dependentsCount: 0,
      receivesInstitutionalSupport: false,
      requestedAmountCents: 100000
    };
  if (step === 5) return { enrollmentVerificationUploaded: false, clinicEstimateUploaded: false };
  return { optionalStatement: "" };
}

export default function ApplicantApplicationPage() {
  const [applicationId, setApplicationId] = useState<string>("");
  const [status, setStatus] = useState<string>("DRAFT");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [stepStore, setStepStore] = useState<Record<number, StepData>>({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    void (async () => {
      const res = await fetch("/api/applicant/application", { cache: "no-store" });
      const json = (await res.json()) as ApplicationResponse | { error: string };

      if (!res.ok || !("application" in json)) {
        setMessage("Sign in as an applicant to continue.");
        setLoading(false);
        return;
      }

      setApplicationId(json.application.id);
      setStatus(json.application.status);

      const next: Record<number, StepData> = {};
      for (let step = 1; step <= totalSteps; step += 1) {
        const fromDb = json.application.steps.find((entry) => entry.step === step)?.data;
        next[step] = fromDb ?? defaultStepData(step);
      }

      setStepStore(next);
      setLoading(false);
    })();
  }, []);

  const activeData = useMemo(() => stepStore[currentStep] ?? defaultStepData(currentStep), [currentStep, stepStore]);

  function updateField(key: string, value: unknown) {
    setStepStore((prev) => ({
      ...prev,
      [currentStep]: {
        ...(prev[currentStep] ?? defaultStepData(currentStep)),
        [key]: value
      }
    }));
  }

  async function saveCurrentStep() {
    if (!applicationId) return;

    const payload = {
      applicationId,
      step: currentStep,
      data: stepStore[currentStep],
      isComplete: true
    };

    const res = await fetch("/api/applicant/application/step", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const json = (await res.json()) as { error?: string };
    if (!res.ok) {
      setMessage(json.error ?? "Could not save step.");
      return;
    }

    setMessage(`Step ${currentStep} saved.`);
  }

  async function submitApplication() {
    if (!applicationId) return;

    const res = await fetch("/api/applicant/application/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ applicationId })
    });

    const json = (await res.json()) as { error?: string; application?: { status: string } };
    if (!res.ok) {
      setMessage(json.error ?? "Submission failed.");
      return;
    }

    setStatus(json.application?.status ?? "SUBMITTED");
    setMessage("Application submitted.");
  }

  if (loading) return <p className="text-slate-700">Loading application...</p>;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Application workflow</h1>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">Status: {status}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <button
            key={step}
            type="button"
            onClick={() => setCurrentStep(step)}
            className={`rounded-md px-3 py-1.5 text-sm ${step === currentStep ? "bg-teal-700 text-white" : "bg-slate-100 text-slate-700"}`}
          >
            Step {step}
          </button>
        ))}
      </div>

      <div className="space-y-3 rounded-xl border border-slate-200 p-4">
        {currentStep === 1 && (
          <>
            <input className="w-full rounded-md border px-3 py-2" placeholder="First name" value={String(activeData.legalFirstName ?? "")} onChange={(e) => updateField("legalFirstName", e.target.value)} />
            <input className="w-full rounded-md border px-3 py-2" placeholder="Last name" value={String(activeData.legalLastName ?? "")} onChange={(e) => updateField("legalLastName", e.target.value)} />
            <input className="w-full rounded-md border px-3 py-2" placeholder="Phone" value={String(activeData.phone ?? "")} onChange={(e) => updateField("phone", e.target.value)} />
            <input className="w-full rounded-md border px-3 py-2" placeholder="City" value={String(activeData.city ?? "")} onChange={(e) => updateField("city", e.target.value)} />
            <input className="w-full rounded-md border px-3 py-2" placeholder="State" value={String(activeData.state ?? "")} onChange={(e) => updateField("state", e.target.value)} />
          </>
        )}

        {currentStep === 2 && (
          <>
            <input className="w-full rounded-md border px-3 py-2" placeholder="Institution name" value={String(activeData.institutionName ?? "")} onChange={(e) => updateField("institutionName", e.target.value)} />
            <select className="w-full rounded-md border px-3 py-2" value={String(activeData.academicStage ?? "MEDICAL_SCHOOL")} onChange={(e) => updateField("academicStage", e.target.value)}>
              <option value="MEDICAL_SCHOOL">Medical School</option>
              <option value="RESIDENCY">Residency</option>
              <option value="PHD">PhD</option>
              <option value="POSTDOC">Postdoc</option>
              <option value="OTHER">Other</option>
            </select>
            <input className="w-full rounded-md border px-3 py-2" type="date" value={String(activeData.expectedCompletionAt ?? "")} onChange={(e) => updateField("expectedCompletionAt", e.target.value)} />
          </>
        )}

        {currentStep === 3 && (
          <>
            <select className="w-full rounded-md border px-3 py-2" value={String(activeData.requestType ?? "EGG_FREEZING")} onChange={(e) => updateField("requestType", e.target.value)}>
              <option value="EGG_FREEZING">Egg Freezing</option>
              <option value="IVF">IVF</option>
            </select>
            <input className="w-full rounded-md border px-3 py-2" type="date" value={String(activeData.targetProcedureDate ?? "")} onChange={(e) => updateField("targetProcedureDate", e.target.value)} />
            <textarea className="w-full rounded-md border px-3 py-2" rows={4} placeholder="Timeline notes" value={String(activeData.timelineNotes ?? "")} onChange={(e) => updateField("timelineNotes", e.target.value)} />
          </>
        )}

        {currentStep === 4 && (
          <>
            <select className="w-full rounded-md border px-3 py-2" value={String(activeData.householdIncomeBand ?? "UNDER_50K")} onChange={(e) => updateField("householdIncomeBand", e.target.value)}>
              <option value="UNDER_50K">Under $50k</option>
              <option value="50K_100K">$50k - $100k</option>
              <option value="100K_150K">$100k - $150k</option>
              <option value="ABOVE_150K">Above $150k</option>
            </select>
            <select className="w-full rounded-md border px-3 py-2" value={String(activeData.availableSavingsBand ?? "UNDER_5K")} onChange={(e) => updateField("availableSavingsBand", e.target.value)}>
              <option value="UNDER_5K">Savings under $5k</option>
              <option value="5K_20K">Savings $5k - $20k</option>
              <option value="ABOVE_20K">Savings above $20k</option>
            </select>
            <input className="w-full rounded-md border px-3 py-2" type="number" min={0} max={20} value={Number(activeData.dependentsCount ?? 0)} onChange={(e) => updateField("dependentsCount", Number(e.target.value))} />
            <input className="w-full rounded-md border px-3 py-2" type="number" min={10000} value={Number(activeData.requestedAmountCents ?? 100000)} onChange={(e) => updateField("requestedAmountCents", Number(e.target.value))} />
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" checked={Boolean(activeData.receivesInstitutionalSupport)} onChange={(e) => updateField("receivesInstitutionalSupport", e.target.checked)} />
              I currently receive institutional fertility support
            </label>
          </>
        )}

        {currentStep === 5 && (
          <>
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" checked={Boolean(activeData.enrollmentVerificationUploaded)} onChange={(e) => updateField("enrollmentVerificationUploaded", e.target.checked)} />
              Enrollment verification uploaded
            </label>
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" checked={Boolean(activeData.clinicEstimateUploaded)} onChange={(e) => updateField("clinicEstimateUploaded", e.target.checked)} />
              Clinic estimate uploaded
            </label>
          </>
        )}

        {currentStep === 6 && (
          <textarea className="w-full rounded-md border px-3 py-2" rows={6} placeholder="Optional statement" value={String(activeData.optionalStatement ?? "")} onChange={(e) => updateField("optionalStatement", e.target.value)} />
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={saveCurrentStep} className="rounded-md bg-teal-700 px-4 py-2 text-white hover:bg-teal-800">
          Save step
        </button>
        <button type="button" onClick={submitApplication} className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-50">
          Submit application
        </button>
      </div>

      {message && <p className="text-sm text-slate-700">{message}</p>}
    </section>
  );
}
