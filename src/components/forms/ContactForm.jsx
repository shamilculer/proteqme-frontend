"use client";

import { contactFormSchema } from "@/lib/schema/formSchema";
import { getLeadSource, postLead } from "@/lib/leads/postLead";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { motion } from "motion/react";
import { slideDistance, slidePanelTransition } from "@/lib/motion-presets";
import { Check } from "lucide-react";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      "full-name": "",
      email: "",
      message: "",
    },
  });

  const {
    formState: { isSubmitting, isSubmitSuccessful },
    setError,
  } = form;

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await postLead({
        type: "contact",
        source: getLeadSource(),
        form: data,
      });
      form.reset();
    } catch (error) {
      setError("root", {
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  });

  if (isSubmitSuccessful) {
    return (
      <div className="w-full gap-2 rounded-3xl border border-primary/25 bg-white p-8 shadow-[0_20px_60px_rgba(35,17,67,0.08)] sm:p-10">
        <motion.div
          initial={{ x: -slideDistance.x }}
          animate={{ x: 0 }}
          transition={slidePanelTransition()}
          className="py-4"
        >
          <motion.div
            initial={{ x: -slideDistance.x * 0.55 }}
            animate={{ x: 0 }}
            transition={slidePanelTransition(0.12)}
            className="mx-auto mb-4 flex w-fit justify-center rounded-full border border-primary/20 bg-primary/10 p-2"
          >
            <Check className="size-8 text-primary" />
          </motion.div>
          <h2 className="mb-2 text-center text-2xl font-bold text-pretty">
            Thank you
          </h2>
          <p className="text-center text-lg text-pretty text-muted-foreground">
            We&apos;ve received your enquiry and will be in touch soon.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-3xl border-2 border-primary/20 bg-zinc-50 p-6 shadow-[0_24px_70px_rgba(35,17,67,0.1)] sm:p-10"
    >
      <p className="mb-6 text-sm leading-relaxed text-zinc-600 sm:text-base">
        Tell us what you need — advisory, training, systems, or AI investments — and we&apos;ll get back to you soon.
      </p>

      <FieldGroup className="mb-6 grid gap-6">
        <Controller
          name="full-name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1">
              <FieldLabel className="mb-1 text-zinc-700" htmlFor="full-name">
                Name *
              </FieldLabel>
              <Input
                {...field}
                id="full-name"
                type="text"
                onChange={(e) => field.onChange(e.target.value)}
                aria-invalid={fieldState.invalid}
                placeholder="Your name"
                className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-zinc-900 shadow-xs outline-none placeholder:text-zinc-400 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
              {fieldState.invalid && (
                <FieldError
                  className="mt-1 text-xs font-semibold text-primary"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1">
              <FieldLabel className="mb-1 text-zinc-700" htmlFor="email">
                Email *
              </FieldLabel>
              <Input
                {...field}
                id="email"
                type="email"
                onChange={(e) => field.onChange(e.target.value)}
                aria-invalid={fieldState.invalid}
                placeholder="you@company.com"
                className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-zinc-900 shadow-xs outline-none placeholder:text-zinc-400 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
              {fieldState.invalid && (
                <FieldError
                  className="mt-1 text-xs font-semibold text-primary"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1">
              <FieldLabel className="mb-1 text-zinc-700" htmlFor="message">
                Message *
              </FieldLabel>
              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                id="message"
                placeholder="How can we help?"
                className="min-h-[120px] w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-xs placeholder:text-zinc-400 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
              />
              {fieldState.invalid && (
                <FieldError
                  className="mt-1 text-xs font-semibold text-primary"
                  errors={[fieldState.error]}
                />
              )}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="flex w-full flex-col items-end gap-2">
        {form.formState.errors.root ? (
          <p className="w-full text-sm text-primary">
            {form.formState.errors.root.message}
          </p>
        ) : null}
        <Button
          type="submit"
          disabled={isSubmitting}
          showArrow={!isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
