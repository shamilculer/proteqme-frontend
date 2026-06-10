"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { heroLeadFormSchema } from "@/lib/schema/formSchema";
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

const serviceOptions = [
  { value: "advisory", label: "Consultancy & Advisory" },
  { value: "learning", label: "Learning & Training" },
  { value: "systems", label: "RegTech Systems" },
  { value: "general", label: "General Enquiry" },
];

export default function HeroLeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(heroLeadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    console.log("Hero lead capture:", { ...data, source: "Homepage Hero" });
    setSubmitted(true);
    form.reset();
  });

  if (submitted) {
    return (
      <div className="hero-lead-panel rounded-2xl p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <Check className="size-6 text-white" />
        </div>
        <h3 className="font-heading mb-2 text-lg font-semibold text-white">
          Thank you — we&apos;ll be in touch
        </h3>
        <p className="text-sm text-white/75">
          A member of our team will contact you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-xs font-medium text-white/60 underline-offset-2 hover:text-white hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="hero-lead-panel rounded-2xl p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-7"
    >
      <div className="mb-5">
        <p className="font-heading text-2xl font-semibold text-white">
          Book a Free Consultation
        </p>
        <p className="text-xs text-white/70">
          Tell us what you need — we&apos;ll respond within one business day.
        </p>
      </div>

      <FieldGroup className="gap-4">
        <Field>
          <FieldLabel className="text-white/90">Full name</FieldLabel>
          <Input
            {...form.register("name")}
            placeholder="Your name"
            className="h-11 border-white/20 bg-white/95 text-foreground placeholder:text-zinc-400"
          />
          {form.formState.errors.name && (
            <FieldError className="mt-1 text-xs text-red-300" errors={[form.formState.errors.name]} />
          )}
        </Field>

        <Field>
          <FieldLabel className="text-white/90">Work email</FieldLabel>
          <Input
            {...form.register("email")}
            type="email"
            placeholder="you@company.com"
            className="h-11 border-white/20 bg-white/95 text-foreground placeholder:text-zinc-400"
          />
          {form.formState.errors.email && (
            <FieldError className="mt-1 text-xs text-red-300" errors={[form.formState.errors.email]} />
          )}
        </Field>

        <Field>
          <FieldLabel className="text-white/90">
            Company <span className="text-white/50">(optional)</span>
          </FieldLabel>
          <Input
            {...form.register("company")}
            placeholder="Organisation name"
            className="h-11 border-white/20 bg-white/95 text-foreground placeholder:text-zinc-400"
          />
        </Field>

        <Field>
          <FieldLabel className="text-white/90">I&apos;m interested in</FieldLabel>
          <Select
            value={form.watch("service")}
            onValueChange={(value) =>
              form.setValue("service", value, { shouldValidate: true })
            }
          >
            <SelectTrigger className="h-11 w-full border-white/20 bg-white/95 text-foreground">
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
            <FieldError className="mt-1 text-xs text-red-300" errors={[form.formState.errors.service]} />
          )}
        </Field>

        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="mt-1 flex h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(232,24,90,0.4)] disabled:opacity-60"
        >
          {form.formState.isSubmitting ? "Sending…" : "Get Started"}
        </button>

        <p className="text-center text-[11px] leading-relaxed text-white/50">
          No spam. Your details are kept confidential.
        </p>
      </FieldGroup>
    </form>
  );
}
