"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  User,
  Building2,
  Mail,
  Phone,
  Globe,
  Handshake,
  GraduationCap,
  Cpu,
} from "lucide-react";
import {
  partnerStep1Schema,
  partnerStep2PartnerSchema,
  partnerStep2TrainerSchema,
  partnerStep2SystemSchema,
} from "@/lib/schema/formSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// ─── Field helpers ─────────────────────────────────────────────────────────

const fieldClass =
  "h-12 rounded-xl border border-zinc-200 bg-white px-4 text-zinc-900 placeholder:text-zinc-400 text-sm w-full focus:outline-none focus:border-[#E25C8F] focus:ring-2 focus:ring-[#E25C8F]/15 transition-all";

const errorClass = "text-xs text-[#E25C8F] font-semibold mt-1.5 flex items-center gap-1";

const FieldWrapper = ({ label, required, error, children, className }) => (
  <div className={cn("flex flex-col gap-1", className)}>
    <label className="text-zinc-700 text-sm font-medium mb-0.5">
      {label} {required && <span className="text-[#E25C8F]">*</span>}
    </label>
    {children}
    {error && <p className={errorClass}>{error}</p>}
  </div>
);

// ─── Multi-select chip component ──────────────────────────────────────────

const MultiSelect = ({ options, value = [], onChange, error }) => (
  <div className="flex flex-col gap-2">
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const selected = value.includes(opt.value);
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => {
              onChange(
                selected
                  ? value.filter((v) => v !== opt.value)
                  : [...value, opt.value]
              );
            }}
            className={cn(
              "px-3.5 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer select-none",
              selected
                ? "bg-[#E25C8F] border-[#E25C8F] text-white shadow-sm"
                : "bg-white border-zinc-200 text-zinc-600 hover:border-[#E25C8F]/50 hover:text-zinc-900"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
    {error && <p className={errorClass}>{error}</p>}
  </div>
);

// ─── Yes/No toggle ────────────────────────────────────────────────────────

const YesNoToggle = ({ value, onChange, error }) => (
  <div className="flex flex-col gap-2">
    <div className="flex gap-3">
      {["yes", "no"].map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={cn(
            "flex-1 h-12 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-pointer capitalize",
            value === opt
              ? "bg-[#E25C8F] border-[#E25C8F] text-white shadow-sm"
              : "bg-white border-zinc-200 text-zinc-600 hover:border-[#E25C8F]/50"
          )}
        >
          {opt === "yes" ? "Yes" : "No"}
        </button>
      ))}
    </div>
    {error && <p className={errorClass}>{error}</p>}
  </div>
);

// ─── Step indicator ────────────────────────────────────────────────────────

const StepIndicator = ({ step, category }) => {
  const steps = [
    { label: "General Info", icon: User },
    {
      label:
        category === "partner"
          ? "Partnership Details"
          : category === "trainer"
          ? "Trainer Profile"
          : "System Details",
      icon:
        category === "partner"
          ? Handshake
          : category === "trainer"
          ? GraduationCap
          : Cpu,
    },
  ];

  return (
    <div className="flex items-center gap-0 mb-10">
      {steps.map((s, i) => {
        const Icon = s.icon;
        const isActive = i + 1 === step;
        const isDone = i + 1 < step;
        return (
          <div key={i} className="flex items-center flex-1 last:flex-initial">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 shrink-0",
                  isDone
                    ? "bg-[#E25C8F] border-[#E25C8F] text-white"
                    : isActive
                    ? "bg-[#231143] border-[#231143] text-white"
                    : "bg-white border-zinc-200 text-zinc-400"
                )}
              >
                {isDone ? <Check className="size-4" /> : <Icon className="size-4" />}
              </div>
              <span
                className={cn(
                  "text-xs font-semibold whitespace-nowrap",
                  isActive ? "text-[#231143]" : isDone ? "text-[#E25C8F]" : "text-zinc-400"
                )}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={cn(
                  "h-0.5 flex-1 mx-3 mb-5 rounded-full transition-all duration-500",
                  isDone ? "bg-[#E25C8F]" : "bg-zinc-200"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

// ─── Category card selector ────────────────────────────────────────────────

const CategoryCard = ({ value, current, onClick, icon: Icon, title, description }) => (
  <button
    type="button"
    onClick={() => onClick(value)}
    className={cn(
      "flex items-start gap-4 w-full p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer group",
      current === value
        ? "border-[#E25C8F] bg-[#E25C8F]/5"
        : "border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50"
    )}
  >
    <div
      className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200",
        current === value
          ? "bg-[#E25C8F] text-white"
          : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"
      )}
    >
      <Icon className="size-5" />
    </div>
    <div>
      <p className={cn("font-semibold text-sm", current === value ? "text-[#E25C8F]" : "text-zinc-900")}>
        {title}
      </p>
      <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{description}</p>
    </div>
    <div
      className={cn(
        "ml-auto shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 mt-0.5",
        current === value ? "border-[#E25C8F] bg-[#E25C8F]" : "border-zinc-300"
      )}
    >
      {current === value && <Check className="size-3 text-white" />}
    </div>
  </button>
);

// ─── STEP 2 — Partner fields ──────────────────────────────────────────────

const expertiseOptions = [
  { label: "AML", value: "aml" },
  { label: "Anti-Fraud", value: "anti-fraud" },
  { label: "Regulatory Advisory", value: "regulatory-advisory" },
  { label: "Training", value: "training" },
  { label: "Technology", value: "technology" },
];

const PartnerStep2 = ({ register, watch, setValue, formState: { errors } }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="md:col-span-2">
      <FieldWrapper label="Areas of Expertise" required error={errors.areasOfExpertise?.message}>
        <MultiSelect
          options={expertiseOptions}
          value={watch("areasOfExpertise") || []}
          onChange={(val) => setValue("areasOfExpertise", val, { shouldValidate: true })}
          error={null}
        />
      </FieldWrapper>
    </div>

    <FieldWrapper label="Geographic Focus" required error={errors.geographicFocus?.message}>
      <Input
        {...register("geographicFocus")}
        placeholder="e.g. MENA, Europe, Global"
        className={fieldClass}
      />
    </FieldWrapper>

    <FieldWrapper label="Existing Client Base Size" required error={errors.clientBaseSize?.message}>
      <Select onValueChange={(v) => setValue("clientBaseSize", v, { shouldValidate: true })}>
        <SelectTrigger className={cn(fieldClass, "flex items-center")}>
          <SelectValue placeholder="Select range" />
        </SelectTrigger>
        <SelectContent>
          {["1-10", "11-50", "50+"].map((v) => (
            <SelectItem key={v} value={v}>{v} clients</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FieldWrapper>

    <div className="md:col-span-2">
      <FieldWrapper label="Brief Description of Proposed Partnership" required error={errors.partnershipDescription?.message}>
        <Textarea
          {...register("partnershipDescription")}
          placeholder="Describe how you envision the partnership, what value you bring, and what you hope to achieve..."
          className={cn(fieldClass, "h-auto min-h-[130px] py-3 resize-none")}
        />
      </FieldWrapper>
    </div>
  </div>
);

// ─── STEP 2 — Trainer fields ──────────────────────────────────────────────

const subjectOptions = [
  { label: "AML & CFT", value: "aml-cft" },
  { label: "Anti-Fraud", value: "anti-fraud" },
  { label: "RegTech", value: "regtech" },
  { label: "Risk Advisory", value: "risk-advisory" },
  { label: "KYC/CDD", value: "kyc-cdd" },
  { label: "Sanctions", value: "sanctions" },
];

const TrainerStep2 = ({ register, watch, setValue, formState: { errors } }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="md:col-span-2">
      <FieldWrapper label="Subject Matter Areas" required error={errors.subjectMatterAreas?.message}>
        <MultiSelect
          options={subjectOptions}
          value={watch("subjectMatterAreas") || []}
          onChange={(val) => setValue("subjectMatterAreas", val, { shouldValidate: true })}
          error={null}
        />
      </FieldWrapper>
    </div>

    <FieldWrapper label="Years of Experience" required error={errors.yearsOfExperience?.message}>
      <Select onValueChange={(v) => setValue("yearsOfExperience", v, { shouldValidate: true })}>
        <SelectTrigger className={cn(fieldClass, "flex items-center")}>
          <SelectValue placeholder="Select range" />
        </SelectTrigger>
        <SelectContent>
          {[["0-2", "0–2 years"], ["3-5", "3–5 years"], ["6-10", "6–10 years"], ["10+", "10+ years"]].map(([v, l]) => (
            <SelectItem key={v} value={v}>{l}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FieldWrapper>

    <FieldWrapper label="Preferred Delivery Format" required error={errors.preferredFormat?.message}>
      <Select onValueChange={(v) => setValue("preferredFormat", v, { shouldValidate: true })}>
        <SelectTrigger className={cn(fieldClass, "flex items-center")}>
          <SelectValue placeholder="Select format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pre-recorded">Pre-Recorded Webinar</SelectItem>
          <SelectItem value="live-session">Live Session</SelectItem>
          <SelectItem value="written-course">Written Course</SelectItem>
        </SelectContent>
      </Select>
    </FieldWrapper>

    <div className="md:col-span-2">
      <FieldWrapper label="Existing Content Catalogue?" required error={errors.hasContentCatalogue?.message}>
        <YesNoToggle
          value={watch("hasContentCatalogue")}
          onChange={(v) => setValue("hasContentCatalogue", v, { shouldValidate: true })}
        />
      </FieldWrapper>
    </div>

    <div className="md:col-span-2">
      <FieldWrapper label="Bio or LinkedIn Profile URL" required error={errors.bioOrLinkedin?.message}>
        <Input
          {...register("bioOrLinkedin")}
          placeholder="https://linkedin.com/in/yourprofile  or a short bio..."
          className={fieldClass}
        />
      </FieldWrapper>
    </div>
  </div>
);

// ─── STEP 2 — System Provider fields ──────────────────────────────────────

const SystemStep2 = ({ register, watch, setValue, formState: { errors } }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <FieldWrapper label="System Name" required error={errors.systemName?.message}>
      <Input
        {...register("systemName")}
        placeholder="e.g. AMLEdge Pro"
        className={fieldClass}
      />
    </FieldWrapper>

    <FieldWrapper label="System Category" required error={errors.systemCategory?.message}>
      <Select onValueChange={(v) => setValue("systemCategory", v, { shouldValidate: true })}>
        <SelectTrigger className={cn(fieldClass, "flex items-center")}>
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="aml-screening">AML Screening</SelectItem>
          <SelectItem value="transaction-monitoring">Transaction Monitoring</SelectItem>
          <SelectItem value="kyc">KYC</SelectItem>
          <SelectItem value="case-management">Case Management</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </FieldWrapper>

    <FieldWrapper label="Target Market" required error={errors.targetMarket?.message}>
      <Input
        {...register("targetMarket")}
        placeholder="e.g. Banks, Fintechs, Insurance companies"
        className={fieldClass}
      />
    </FieldWrapper>

    <FieldWrapper label="Integration Capabilities" required error={errors.integrationCapabilities?.message}>
      <Input
        {...register("integrationCapabilities")}
        placeholder="e.g. REST API, SWIFT, ISO 20022"
        className={fieldClass}
      />
    </FieldWrapper>

    <div className="md:col-span-2">
      <FieldWrapper label="Demo Available?" required error={errors.demoAvailable?.message}>
        <YesNoToggle
          value={watch("demoAvailable")}
          onChange={(v) => setValue("demoAvailable", v, { shouldValidate: true })}
        />
      </FieldWrapper>
    </div>
  </div>
);

// ─── Main form component ───────────────────────────────────────────────────

const step2SchemaMap = {
  partner: partnerStep2PartnerSchema,
  trainer: partnerStep2TrainerSchema,
  "system-provider": partnerStep2SystemSchema,
};

export default function PartnerApplicationForm() {
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Step 1 form
  const step1Form = useForm({
    resolver: zodResolver(partnerStep1Schema),
    defaultValues: { websiteUrl: "" },
  });

  const category = step1Form.watch("partnershipCategory");

  // Step 2 form — schema switches dynamically based on category
  const step2Form = useForm({
    resolver: zodResolver(
      category ? step2SchemaMap[category] : partnerStep2PartnerSchema
    ),
  });

  // Reset step 2 when category changes
  const handleCategoryChange = (val) => {
    step1Form.setValue("partnershipCategory", val, { shouldValidate: true });
    step2Form.reset();
  };

  const onStep1Submit = step1Form.handleSubmit((data) => {
    setStep1Data(data);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const onStep2Submit = step2Form.handleSubmit(async (data) => {
    const fullPayload = { ...step1Data, ...data };
    console.log("Partner Application Submitted:", fullPayload);
    // TODO: send to CRM / API
    setIsSuccess(true);
  });

  // ── Success screen ─────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 1.02, 0.43, 1.01] }}
        className="flex flex-col items-center justify-center py-20 px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 15 }}
          className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mb-6"
        >
          <Check className="size-9 text-emerald-500 stroke-[2.5]" />
        </motion.div>
        <h3 className="text-2xl font-bold text-zinc-900 mb-2">Application Submitted!</h3>
        <p className="text-zinc-500 text-base max-w-md leading-relaxed">
          Thank you for applying to become a Proteq partner. Our team will review your application and be in touch within 3–5 business days.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/" variant="default" showArrow>
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      {/* Step indicator */}
      <StepIndicator step={step} category={category} />

      {/* ── STEP 1 ───────────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.form
            key="step1"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onSubmit={onStep1Submit}
            className="space-y-6"
          >
            {/* General fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FieldWrapper
                label="Full Name"
                required
                error={step1Form.formState.errors.fullName?.message}
              >
                <Input
                  {...step1Form.register("fullName")}
                  id="fullName"
                  placeholder="Enter your full name"
                  className={fieldClass}
                />
              </FieldWrapper>

              <FieldWrapper
                label="Email Address"
                required
                error={step1Form.formState.errors.email?.message}
              >
                <Input
                  {...step1Form.register("email")}
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className={fieldClass}
                />
              </FieldWrapper>

              <FieldWrapper
                label="Phone Number"
                required
                error={step1Form.formState.errors.phone?.message}
              >
                <Input
                  {...step1Form.register("phone")}
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className={fieldClass}
                />
              </FieldWrapper>

              <FieldWrapper
                label="Company / Organisation Name"
                required
                error={step1Form.formState.errors.companyName?.message}
              >
                <Input
                  {...step1Form.register("companyName")}
                  id="companyName"
                  placeholder="Your company or organisation name"
                  className={fieldClass}
                />
              </FieldWrapper>

              <div className="md:col-span-2">
                <FieldWrapper
                  label="Website URL"
                  error={step1Form.formState.errors.websiteUrl?.message}
                >
                  <Input
                    {...step1Form.register("websiteUrl")}
                    id="websiteUrl"
                    type="url"
                    placeholder="https://yourwebsite.com  (optional)"
                    className={fieldClass}
                  />
                </FieldWrapper>
              </div>
            </div>

            {/* Partnership category selector */}
            <div>
              <p className="text-zinc-700 text-sm font-medium mb-3">
                Partnership Category <span className="text-[#E25C8F]">*</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <CategoryCard
                  value="partner"
                  current={category}
                  onClick={handleCategoryChange}
                  icon={Handshake}
                  title="Partner"
                  description="Strategic alliances and referral partnerships."
                />
                <CategoryCard
                  value="trainer"
                  current={category}
                  onClick={handleCategoryChange}
                  icon={GraduationCap}
                  title="Trainer"
                  description="Subject matter experts delivering learning content."
                />
                <CategoryCard
                  value="system-provider"
                  current={category}
                  onClick={handleCategoryChange}
                  icon={Cpu}
                  title="System Provider"
                  description="RegTech / AML technology platforms and vendors."
                />
              </div>
              {step1Form.formState.errors.partnershipCategory && (
                <p className={cn(errorClass, "mt-2")}>
                  {step1Form.formState.errors.partnershipCategory.message}
                </p>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <Button type="submit" variant="default" showArrow>
                Continue to Step 2
              </Button>
            </div>
          </motion.form>
        )}

        {/* ── STEP 2 ─────────────────────────────────────────────────────── */}
        {step === 2 && (
          <motion.form
            key="step2"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onSubmit={onStep2Submit}
            className="space-y-6"
          >
            {/* Category-specific sub-title */}
            <div className="flex items-center gap-3 pb-2 border-b border-zinc-100">
              <div className="w-8 h-8 rounded-lg bg-[#E25C8F]/10 flex items-center justify-center">
                {category === "partner" && <Handshake className="size-4 text-[#E25C8F]" />}
                {category === "trainer" && <GraduationCap className="size-4 text-[#E25C8F]" />}
                {category === "system-provider" && <Cpu className="size-4 text-[#E25C8F]" />}
              </div>
              <div>
                <p className="text-zinc-900 font-semibold text-sm">
                  {category === "partner" && "Partnership Details"}
                  {category === "trainer" && "Trainer Profile"}
                  {category === "system-provider" && "System Details"}
                </p>
                <p className="text-zinc-400 text-xs">
                  Applying as: <span className="text-zinc-600 font-medium capitalize">{step1Data?.companyName}</span>
                </p>
              </div>
            </div>

            {/* Render the right sub-form */}
            {category === "partner" && (
              <PartnerStep2
                register={step2Form.register}
                watch={step2Form.watch}
                setValue={step2Form.setValue}
                formState={step2Form.formState}
              />
            )}
            {category === "trainer" && (
              <TrainerStep2
                register={step2Form.register}
                watch={step2Form.watch}
                setValue={step2Form.setValue}
                formState={step2Form.formState}
              />
            )}
            {category === "system-provider" && (
              <SystemStep2
                register={step2Form.register}
                watch={step2Form.watch}
                setValue={step2Form.setValue}
                formState={step2Form.formState}
              />
            )}

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
              >
                <ChevronLeft className="size-4" />
                Back to Step 1
              </button>
              <Button
                type="submit"
                variant="default"
                showArrow={!step2Form.formState.isSubmitting}
                disabled={step2Form.formState.isSubmitting}
              >
                {step2Form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
