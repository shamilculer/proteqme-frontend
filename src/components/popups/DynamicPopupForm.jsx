"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Calendar, Check, ChevronLeft } from "lucide-react";
import { isValidPhoneNumber } from "react-phone-number-input";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneInputField from "@/components/ui/PhoneInputField";
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
import PopupCalEmbed from "@/components/popups/PopupCalEmbed";
import { buildLeadPayload, submitLead } from "@/lib/leads/buildLeadPayload";
import { cn } from "@/lib/utils";

function StepIndicator({ step, total }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      {Array.from({ length: total }, (_, index) => index + 1).map((value) => (
        <span
          key={value}
          className={cn(
            "flex size-8 items-center justify-center rounded-full text-xs font-semibold tabular-nums transition-colors",
            step >= value
              ? "bg-primary text-primary-foreground"
              : "border border-zinc-200 bg-zinc-50 text-zinc-500"
          )}
        >
          {value}
        </span>
      ))}
      <div className="ml-auto text-xs text-zinc-400">
        Step {step} of {total}
      </div>
    </div>
  );
}

function renderFieldInput(field, form) {
  const error = form.formState.errors[field.name];

  if (field.fieldType === "textarea") {
    return (
      <Field key={field.name}>
        <FieldLabel className="text-zinc-700">{field.label}</FieldLabel>
        <textarea
          {...form.register(field.name, { required: field.required })}
          placeholder={field.placeholder}
          rows={4}
          className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-foreground placeholder:text-zinc-400"
        />
        {error ? (
          <FieldError className="mt-1 text-xs text-red-500" errors={[error]} />
        ) : null}
      </Field>
    );
  }

  if (field.fieldType === "select") {
    return (
      <Field key={field.name}>
        <FieldLabel className="text-zinc-700">{field.label}</FieldLabel>
        <Select
          value={form.watch(field.name)}
          onValueChange={(value) =>
            form.setValue(field.name, value, { shouldValidate: true })
          }
        >
          <SelectTrigger className="h-11 w-full border-zinc-200 bg-white text-foreground">
            <SelectValue placeholder={field.placeholder || "Select an option"} />
          </SelectTrigger>
          <SelectContent>
            {field.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error ? (
          <FieldError className="mt-1 text-xs text-red-500" errors={[error]} />
        ) : null}
      </Field>
    );
  }

  if (field.fieldType === "tel") {
    return (
      <Field key={field.name}>
        <FieldLabel className="text-zinc-700">{field.label}</FieldLabel>
        <Controller
          name={field.name}
          control={form.control}
          rules={{
            required: field.required ? `${field.label} is required` : false,
            validate: (value) => {
              if (!value) return true;
              return isValidPhoneNumber(value) || "Please enter a valid phone number";
            },
          }}
          render={({ field: phoneField, fieldState }) => (
            <PhoneInputField
              id={field.name}
              name={phoneField.name}
              value={phoneField.value}
              onChange={(next) => phoneField.onChange(next || "")}
              onBlur={phoneField.onBlur}
              placeholder={field.placeholder || "Enter phone number"}
              aria-invalid={fieldState.invalid}
              className="border-zinc-200"
            />
          )}
        />
        {error ? (
          <FieldError className="mt-1 text-xs text-red-500" errors={[error]} />
        ) : null}
      </Field>
    );
  }

  const inputType = field.fieldType === "tel" ? "tel" : field.fieldType;

  return (
    <Field key={field.name}>
      <FieldLabel className="text-zinc-700">{field.label}</FieldLabel>
      <Input
        {...form.register(field.name, {
          required: field.required ? `${field.label} is required` : false,
          ...(field.fieldType === "email"
            ? {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              }
            : {}),
        })}
        type={inputType}
        placeholder={field.placeholder}
        className="h-11 border-zinc-200 bg-white text-foreground placeholder:text-zinc-400"
      />
      {error ? (
        <FieldError className="mt-1 text-xs text-red-500" errors={[error]} />
      ) : null}
    </Field>
  );
}

async function submitPopupLead(payload) {
  await submitLead(payload);
}

function PopupSuccessScreen({ popup, context, embedded }) {
  const { booking, calendarSkipped, email, name, phone, company } =
    context || {};
  const hasBooking = Boolean(booking?.formatted?.BOOKING_DATE);
  const hasDetails =
    hasBooking || calendarSkipped || email || name || company || phone;

  return (
    <div
      className={cn(
        "text-center",
        embedded ? "px-6 py-10 sm:px-8" : "px-8 py-10",
      )}
    >
      <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
        <Check className="size-6 text-primary" strokeWidth={2.25} />
      </div>

      <DialogTitle className="text-balance text-lg font-semibold tracking-tight text-foreground sm:text-xl">
        {popup.successTitle}
      </DialogTitle>

      <DialogDescription className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-600">
        {popup.successDescription}
      </DialogDescription>

      {hasDetails ? (
        <div className="mx-auto mt-5 max-w-md rounded-xl border border-zinc-200 bg-white px-4 py-4 text-left shadow-sm">
          {hasBooking ? (
            <div className="flex gap-3">
              <Calendar className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-zinc-900">
                  Your meeting is confirmed
                </p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                  {booking.formatted.BOOKING_DATE}
                </p>
                {booking.formatted.BOOKING_TIME ? (
                  <p className="mt-0.5 text-sm text-zinc-500">
                    {booking.formatted.BOOKING_TIME}
                    {booking.formatted.BOOKING_TIMEZONE
                      ? ` (${booking.formatted.BOOKING_TIMEZONE})`
                      : ""}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}

          <div
            className={cn(
              "space-y-1.5 text-sm text-zinc-600",
              hasBooking ? "mt-3 border-t border-zinc-200 pt-3" : "",
            )}
          >
            {name ? (
              <p>
                <span className="text-zinc-500">Name:</span>{" "}
                <span className="font-medium text-zinc-800">{name}</span>
              </p>
            ) : null}
            {company ? (
              <p>
                <span className="text-zinc-500">Company:</span>{" "}
                <span className="font-medium text-zinc-800">{company}</span>
              </p>
            ) : null}
            {phone ? (
              <p>
                <span className="text-zinc-500">Phone:</span>{" "}
                <span className="font-medium text-zinc-800">{phone}</span>
              </p>
            ) : null}
            {email ? (
              <p>
                <span className="text-zinc-500">Email:</span>{" "}
                <span className="font-medium text-zinc-800">{email}</span>
              </p>
            ) : null}
            {calendarSkipped && !hasBooking ? (
              <p className="text-zinc-500">Calendar step skipped</p>
            ) : null}
          </div>
        </div>
      ) : null}

      {popup.privacyNote ? (
        <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-zinc-400">
          {popup.privacyNote}
        </p>
      ) : null}
    </div>
  );
}

export default function DynamicPopupForm({
  popup,
  embedded = false,
  open = true,
  onSubmitted,
  onStepChange,
}) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formReadyForCalendar, setFormReadyForCalendar] = useState(false);
  const [calendarFormData, setCalendarFormData] = useState(null);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [submissionContext, setSubmissionContext] = useState(null);

  const formSteps = popup?.steps || [];
  const calendarStep = popup?.calendarStep;
  const hasCalendar = Boolean(calendarStep?.enabled);
  const formStepCount = formSteps.length;
  const totalSteps = formStepCount + (hasCalendar ? 1 : 0);
  const isCalendarStep = hasCalendar && step === totalSteps;
  const isLastFormStep = step === formStepCount;
  const currentStep = isCalendarStep ? null : formSteps[step - 1];
  const isMultiStep = totalSteps > 1;

  const defaultValues = useMemo(() => {
    const values = {};
    formSteps.forEach((stepConfig) => {
      stepConfig.fields.forEach((field) => {
        values[field.name] = "";
      });
    });
    return values;
  }, [formSteps]);

  const form = useForm({
    defaultValues,
    mode: "onTouched",
  });

  useEffect(() => {
    if (!open) {
      setStep(1);
      setSubmitted(false);
      setFormReadyForCalendar(false);
      setCalendarFormData(null);
      setSubmissionContext(null);
      setIsSubmittingLead(false);
      form.reset(defaultValues);
    }
  }, [open, form, defaultValues]);

  useEffect(() => {
    onStepChange?.({
      step,
      totalSteps,
      isCalendarStep,
      isSuccessStep: submitted,
    });
  }, [step, totalSteps, isCalendarStep, submitted, onStepChange]);

  const validateCurrentStep = async () => {
    const fieldNames = currentStep?.fields?.map((field) => field.name) || [];
    return form.trigger(fieldNames);
  };

  const completeSubmission = useCallback(() => {
    setSubmitted(true);
    onSubmitted?.();
  }, [onSubmitted]);

  const persistLead = async (payload) => {
    setIsSubmittingLead(true);
    try {
      await submitPopupLead(payload);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const finalizeSubmission = useCallback(
    async (
      data,
      { booking = null, calendarSkipped = false, showSuccessFirst = false } = {},
    ) => {
      const payload = buildLeadPayload({
        popup,
        data,
        booking,
        calendarSkipped,
      });

      setSubmissionContext({
        email: payload.brevo.email,
        name:
          data.name ||
          data.fullName ||
          data["full-name"] ||
          payload.brevo.attributes?.FIRSTNAME ||
          "",
        phone: data.phone || payload.brevo.attributes?.SMS || "",
        company:
          data.company ||
          data.companyName ||
          payload.brevo.attributes?.COMPANY ||
          "",
        booking: payload.booking,
        calendarSkipped,
      });

      if (showSuccessFirst) {
        completeSubmission();
      }

      const saved = await persistLead(payload);
      if (!saved) return false;

      if (!showSuccessFirst) {
        completeSubmission();
      }

      return true;
    },
    [completeSubmission, popup],
  );

  const onContinue = async () => {
    const valid = await validateCurrentStep();
    if (!valid) return;
    setStep((value) => Math.min(value + 1, totalSteps));
  };

  const onProceedToCalendar = form.handleSubmit(async (data) => {
    setCalendarFormData(data);

    if (formReadyForCalendar) {
      setStep(totalSteps);
      return;
    }

    setFormReadyForCalendar(true);
    setStep(totalSteps);
  });

  const onSubmitWithoutCalendar = form.handleSubmit(async (data) => {
    await finalizeSubmission(data);
  });

  const onBookingComplete = useCallback(
    async (booking) => {
      const data = calendarFormData || form.getValues();
      await finalizeSubmission(data, {
        booking,
        showSuccessFirst: true,
      });
    },
    [calendarFormData, form, finalizeSubmission],
  );

  const onSkipCalendar = async () => {
    await finalizeSubmission(form.getValues(), { calendarSkipped: true });
  };

  const wrapperClass = embedded ? "px-6 py-6 sm:px-8" : "p-6 sm:p-8";

  if (submitted) {
    return (
      <PopupSuccessScreen
        popup={popup}
        context={submissionContext}
        embedded={embedded}
      />
    );
  }

  if (isCalendarStep) {
    if (!calendarFormData) {
      return (
        <div className={cn(wrapperClass, "pb-4")}>
          {isMultiStep ? <StepIndicator step={step} total={totalSteps} /> : null}
          <div className="flex min-h-[280px] items-center justify-center text-sm text-zinc-500">
            Preparing calendar…
          </div>
        </div>
      );
    }

    return (
      <div className={cn(wrapperClass, "pb-4")}>
        {isMultiStep ? <StepIndicator step={step} total={totalSteps} /> : null}

        <div className="mb-4">
          <DialogTitle className="text-xl! sm:text-2xl!">
            {calendarStep.title}
          </DialogTitle>
          {calendarStep.description ? (
            <DialogDescription className="mt-1">
              {calendarStep.description}
            </DialogDescription>
          ) : null}
        </div>

        <PopupCalEmbed
          calLink={calendarStep.calLink}
          formValues={calendarFormData}
          popupSlug={popup.slug}
          onBookingSuccessful={onBookingComplete}
        />

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="button"
            variant="white"
            onClick={() => setStep(formStepCount)}
            className="h-11 border border-zinc-300"
            icon={ChevronLeft}
            iconPosition="left"
          >
            Back
          </Button>

          {calendarStep.skipLabel ? (
            <button
              type="button"
              onClick={onSkipCalendar}
              disabled={isSubmittingLead}
              className="text-center text-xs text-zinc-500 underline-offset-2 hover:text-zinc-700 hover:underline disabled:opacity-50"
            >
              {calendarStep.skipLabel}
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      {isMultiStep ? <StepIndicator step={step} total={totalSteps} /> : null}

      <div key={`step-${step}`}>
          {(currentStep?.title || currentStep?.description) && (
            <div className="mb-5">
              {currentStep.title ? (
                <DialogTitle className="text-xl! sm:text-2xl!">
                  {currentStep.title}
                </DialogTitle>
              ) : null}
              {currentStep.description ? (
                <DialogDescription className="mt-1">
                  {currentStep.description}
                </DialogDescription>
              ) : null}
            </div>
          )}

          <FieldGroup className="gap-4">
            {currentStep?.fields?.map((field) => renderFieldInput(field, form))}

            <div className={cn("mt-1 flex flex-col gap-3", isMultiStep && "sm:flex-row")}>
              {isMultiStep && step > 1 ? (
                <Button
                  type="button"
                  variant="white"
                  onClick={() => setStep((value) => Math.max(value - 1, 1))}
                  className="h-12 w-full border border-zinc-300 sm:w-auto"
                  icon={ChevronLeft}
                  iconPosition="left"
                >
                  {currentStep.backLabel || "Back"}
                </Button>
              ) : null}

              {isLastFormStep && hasCalendar ? (
                <Button
                  type="button"
                  onClick={onProceedToCalendar}
                  disabled={isSubmittingLead}
                  className="h-12 flex-1"
                  showArrow
                >
                  {isSubmittingLead
                    ? "Saving…"
                    : calendarStep.continueLabel || "Continue to calendar"}
                </Button>
              ) : isLastFormStep ? (
                <Button
                  type="button"
                  onClick={onSubmitWithoutCalendar}
                  disabled={isSubmittingLead}
                  className="h-12 flex-1"
                  showArrow
                >
                  {isSubmittingLead ? "Sending…" : popup.submitLabel}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={onContinue}
                  className="h-12 w-full"
                  showArrow
                >
                  {currentStep.continueLabel || "Continue"}
                </Button>
              )}
            </div>

            {popup.privacyNote ? (
              <p className="text-center text-[11px] leading-relaxed text-zinc-400">
                {popup.privacyNote}
              </p>
            ) : null}
          </FieldGroup>
      </div>
    </div>
  );
}
