"use client";

import { contactFormSchema } from "@/lib/schema/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const { formState: { isSubmitting, isSubmitSuccessful } } = form;

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      console.log(data);
      form.reset();
    } catch (error) {
      // TODO: handle error
    }
  });

  if (isSubmitSuccessful) {
    return (
      <div className="p-2 sm:p-5 md:p-8 w-full rounded-md gap-2 border">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, stiffness: 300, damping: 25 }}
          className="h-full py-6 px-3"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 500, damping: 15 }}
            className="mb-4 flex justify-center border rounded-full w-fit mx-auto p-2"
          >
            <Check className="size-8" />
          </motion.div>
          <h2 className="text-center text-2xl text-pretty font-bold mb-2">Thank you</h2>
          <p className="text-center text-lg text-pretty text-muted-foreground">
            Form submitted successfully, we will get back to you soon
          </p>
        </motion.div>
      </div>
    );
  }

  const enquiryOptions = [
    { value: "General Enquiry", label: "General Enquiry" },
    { value: "request a quote", label: "Request a Quote" },
    { value: "schedule a call", label: "Schedule a Call" },
    { value: "consultancy", label: "Consultancy" },
    { value: "learning", label: "Learning" },
    { value: "systems", label: "Systems" },
    { value: "partnership", label: "Partnership" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 w-full rounded-3xl bg-primary/1 border border-zinc-200 border-t-4 border-t-[#E25C8F]"
    >
      <FieldGroup className="grid md:grid-cols-6 gap-x-8 gap-y-6 mb-6">
        <Controller
          name="full-name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1 md:col-span-3">
              <FieldLabel className="text-zinc-700 mb-1" htmlFor="full-name">Full Name *</FieldLabel>
              <Input
                {...field}
                id="full-name"
                type="text"
                onChange={(e) => field.onChange(e.target.value)}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your full name"
                className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-zinc-900 placeholder:text-zinc-400 outline-none text-sm w-full"
              />
              {fieldState.invalid && <FieldError className="text-xs text-[#E25C8F] font-semibold mt-1" errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1 md:col-span-3">
              <FieldLabel className="text-zinc-700 mb-1" htmlFor="email">Email Address *</FieldLabel>
              <Input
                {...field}
                id="email"
                type="text"
                onChange={(e) => field.onChange(e.target.value)}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email address"
                className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-zinc-900 placeholder:text-zinc-400text-sm w-full"
              />
              {fieldState.invalid && <FieldError className="text-xs text-[#E25C8F] font-semibold mt-1" errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1 md:col-span-3">
              <FieldLabel className="text-zinc-700 mb-1" htmlFor="phone">Phone Number</FieldLabel>
              <Input
                {...field}
                id="phone"
                type="text"
                onChange={(e) => field.onChange(e.target.value)}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your phone number"
                className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-zinc-900 placeholder:text-zinc-400text-sm w-full"
              />
              {fieldState.invalid && <FieldError className="text-xs text-[#E25C8F] font-semibold mt-1" errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="company-name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1 md:col-span-3">
              <FieldLabel className="text-zinc-700 mb-1" htmlFor="company-name">Company Name</FieldLabel>
              <Input
                {...field}
                id="company-name"
                type="text"
                onChange={(e) => field.onChange(e.target.value)}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your company name"
                className="h-12 rounded-xl border border-zinc-200 bg-white px-4 text-zinc-900 placeholder:text-zinc-400text-sm w-full"
              />
              {fieldState.invalid && <FieldError className="text-xs text-[#E25C8F] font-semibold mt-1" errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="enquiry-type"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1 col-span-full">
              <FieldLabel className="text-zinc-700 mb-1" htmlFor="enquiry-type">Enquiry Type *</FieldLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="h-12! w-full rounded-xl border border-zinc-200 bg-white px-4 text-zinc-900shadow-xs text-sm">
                  <SelectValue placeholder="Select the nature of your enquiry" />
                </SelectTrigger>
                <SelectContent>
                  {enquiryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError className="text-xs text-[#E25C8F] font-semibold mt-1" errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-1 col-span-full">
              <FieldLabel className="text-zinc-700 mb-1" htmlFor="message">Message</FieldLabel>
              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                id="message"
                placeholder="Tell us about your compliance requirements, training needs, or any questions you have...."
                className="min-h-[140px] rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400shadow-xs text-sm resize-none w-full"
              />
              {fieldState.invalid && <FieldError className="text-xs text-[#E25C8F] font-semibold mt-1" errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="flex justify-end items-center w-full mt-4">
        <Button 
          type="submit"
          disabled={isSubmitting}
          showArrow={!isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;