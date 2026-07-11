import { z } from "zod";

export const leadTypeSchema = z.enum([
  "demo",
  "contact",
  "partner",
  "newsletter",
  "webinar-gate",
  "resource",
]);

export const leadSubmissionSchema = z.object({
  type: leadTypeSchema,
  source: z.string().optional().default(""),
  popup: z.string().optional(),
  form: z.record(z.string(), z.unknown()).optional().default({}),
  booking: z.unknown().nullable().optional(),
  calendarSkipped: z.boolean().optional().default(false),
});

export const partialLeadSchema = z.object({
  type: leadTypeSchema.optional().default("contact"),
  source: z.string().optional().default(""),
  popup: z.string().optional(),
  form: z.record(z.string(), z.unknown()),
  partial: z.literal(true).optional(),
});
