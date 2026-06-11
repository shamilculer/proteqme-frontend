"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronLeft, Phone } from "lucide-react";
import {
  heroLeadFormSchema,
  heroLeadStep1Schema,
} from "@/lib/schema/formSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import {
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { revealEase } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { value: "advisory", label: "Consultancy & Advisory" },
  { value: "learning", label: "Learning & Training" },
  { value: "systems", label: "RegTech Systems" },
  { value: "general", label: "General Enquiry" },
];

const panelClass =
  "rounded-2xl border border-zinc-200/80 bg-white shadow-[0_24px_70px_rgba(13,13,20,0.08)]";

function StepIndicator({ step }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      {[1, 2].map((value) => (
        <div key={value} className="flex items-center gap-2">
          <span
            className={cn(
              "flex size-8 items-center justify-center rounded-full text-xs font-semibold tabular-nums transition-colors",
              step >= value
                ? "bg-primary text-primary-foreground"
                : "border border-zinc-200 bg-zinc-50 text-zinc-500"
            )}
          >
            {value}
          </span>
          {value === 1 ? (
            <span className="hidden text-xs font-medium text-zinc-500 sm:inline">
              Phone
            </span>
          ) : null}
        </div>
      ))}
      <div className="ml-auto text-xs text-zinc-400">Step {step} of 2</div>
    </div>
  );
}

export default function HeroLeadForm({
  embedded = false,
  open = true,
  onSubmitted,
}) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(heroLeadFormSchema),
    defaultValues: {
      phone: "",
      name: "",
      email: "",
      company: "",
      service: "",
    },
    mode: "onTouched",
  });

  useEffect(() => {
    if (!open) {
      setStep(1);
      setSubmitted(false);
      form.reset();
    }
  }, [open, form]);

  const onContinue = async () => {
    const phone = form.getValues("phone");
    const result = heroLeadStep1Schema.safeParse({ phone });
    if (!result.success) {
      form.setError("phone", {
        message: result.error.issues[0]?.message ?? "Invalid phone number",
      });
      return;
    }
    form.clearErrors("phone");
    setStep(2);
  };

  const onSubmit = form.handleSubmit(async (data) => {
    console.log("Hero lead capture:", { ...data, source: "Homepage Hero" });
    setSubmitted(true);
    onSubmitted?.();
  });

  const wrapperClass = embedded ? "px-6 py-6 sm:px-6" : `${panelClass} p-6 sm:p-7`;
  const successClass = embedded
    ? "px-6 py-8 text-center sm:px-6"
    : `${panelClass} p-8 text-center`;

  if (submitted) {
    return (
      <div className={successClass}>
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
          <Check className="size-6 text-primary" />
        </div>
        <DialogTitle className="mb-2 text-lg">
          Thank you — we&apos;ll be in touch
        </DialogTitle>
        <DialogDescription>
          A member of our team will contact you within one business day.
        </DialogDescription>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <StepIndicator step={step} />

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.38, ease: revealEase }}
          >
            <div className="mb-5">
              <DialogTitle className="text-xl! sm:text-2xl!">
                Book a Free Consultation
              </DialogTitle>
              <DialogDescription className="mt-1">
                Leave your number and we&apos;ll call you back — usually within
                one business day.
              </DialogDescription>
            </div>

            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel className="text-zinc-700">Phone number</FieldLabel>
                <div className="relative">
                  <Phone className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-400" />
                  <Input
                    {...form.register("phone")}
                    type="tel"
                    autoComplete="tel"
                    placeholder="+44 20 7123 4567"
                    className="h-11 border-zinc-200 bg-white pl-10 text-foreground placeholder:text-zinc-400"
                  />
                </div>
                {form.formState.errors.phone && (
                  <FieldError
                    className="mt-1 text-xs text-red-500"
                    errors={[form.formState.errors.phone]}
                  />
                )}
              </Field>

              <Button
                type="button"
                onClick={onContinue}
                className="mt-1 h-12 w-full"
                showArrow
              >
                Continue
              </Button>

              <p className="text-center text-[11px] leading-relaxed text-zinc-400">
                No spam. Your details are kept confidential.
              </p>
            </FieldGroup>
          </motion.div>
        ) : (
          <motion.form
            key="step-2"
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.38, ease: revealEase }}
          >
            <div className="mb-5">
              <DialogTitle className="text-xl! sm:text-2xl!">Almost done</DialogTitle>
              <DialogDescription className="mt-1">
                A few more details so we can prepare for your consultation.
              </DialogDescription>
            </div>

            <FieldGroup className="gap-4">
              <Field>
                <FieldLabel className="text-zinc-700">Full name</FieldLabel>
                <Input
                  {...form.register("name")}
                  placeholder="Your name"
                  className="h-11 border-zinc-200 bg-white text-foreground placeholder:text-zinc-400"
                />
                {form.formState.errors.name && (
                  <FieldError
                    className="mt-1 text-xs text-red-500"
                    errors={[form.formState.errors.name]}
                  />
                )}
              </Field>

              <Field>
                <FieldLabel className="text-zinc-700">Work email</FieldLabel>
                <Input
                  {...form.register("email")}
                  type="email"
                  placeholder="you@company.com"
                  className="h-11 border-zinc-200 bg-white text-foreground placeholder:text-zinc-400"
                />
                {form.formState.errors.email && (
                  <FieldError
                    className="mt-1 text-xs text-red-500"
                    errors={[form.formState.errors.email]}
                  />
                )}
              </Field>

              <Field>
                <FieldLabel className="text-zinc-700">
                  Company <span className="text-zinc-400">(optional)</span>
                </FieldLabel>
                <Input
                  {...form.register("company")}
                  placeholder="Organisation name"
                  className="h-11 border-zinc-200 bg-white text-foreground placeholder:text-zinc-400"
                />
              </Field>

              <Field>
                <FieldLabel className="text-zinc-700">
                  I&apos;m interested in
                </FieldLabel>
                <Select
                  value={form.watch("service")}
                  onValueChange={(value) =>
                    form.setValue("service", value, { shouldValidate: true })
                  }
                >
                  <SelectTrigger className="h-11 w-full border-zinc-200 bg-white text-foreground">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.service && (
                  <FieldError
                    className="mt-1 text-xs text-red-500"
                    errors={[form.formState.errors.service]}
                  />
                )}
              </Field>

              <div className="mt-1 flex flex-col gap-3 sm:flex-row">
                <Button
                  type="button"
                  variant="white"
                  onClick={() => setStep(1)}
                  className="h-12 w-full border border-zinc-300 sm:w-auto"
                  icon={ChevronLeft}
                  iconPosition="left"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="h-12 flex-1"
                  showArrow
                >
                  {form.formState.isSubmitting ? "Sending…" : "Submit"}
                </Button>
              </div>
            </FieldGroup>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
