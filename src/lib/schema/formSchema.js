import * as z from "zod";

export const contactFormSchema = z.object({
  "full-name": z.string({ error: "This field is required" }),
  email: z.email({ error: "Please enter a valid email" }),
  phone: z.coerce
    .number({ error: "Please enter a valid phone number" })
    .optional(),
  "company-name": z.string({ error: "This field is required" }).optional(),
  "enquiry-type": z.string().min(1, "Please select an item"),
  message: z.string({ error: "This field is required" }).optional(),
});

// ─── Partner Application Form ────────────────────────────────────────────────

export const partnerStep1Schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  companyName: z.string().min(1, "Company / Organisation name is required"),
  websiteUrl: z.string().url("Please enter a valid URL").or(z.literal("")).optional(),
  partnershipCategory: z.enum(["partner", "trainer", "system-provider"], {
    error: "Please select a partnership category",
  }),
});

export const partnerStep2PartnerSchema = z.object({
  areasOfExpertise: z.array(z.string()).min(1, "Please select at least one area"),
  geographicFocus: z.string().min(1, "Geographic focus is required"),
  clientBaseSize: z.enum(["1-10", "11-50", "50+"], { error: "Please select a client base size" }),
  partnershipDescription: z.string().min(20, "Please provide at least 20 characters"),
});

export const partnerStep2TrainerSchema = z.object({
  subjectMatterAreas: z.array(z.string()).min(1, "Please select at least one subject area"),
  yearsOfExperience: z.enum(["0-2", "3-5", "6-10", "10+"], { error: "Please select your experience" }),
  hasContentCatalogue: z.enum(["yes", "no"], { error: "Please select an option" }),
  preferredFormat: z.enum(["pre-recorded", "live-session", "written-course"], { error: "Please select a format" }),
  bioOrLinkedin: z.string().min(1, "Bio or LinkedIn profile is required"),
});

export const partnerStep2SystemSchema = z.object({
  systemName: z.string().min(1, "System name is required"),
  systemCategory: z.enum(["aml-screening", "transaction-monitoring", "kyc", "case-management", "other"], {
    error: "Please select a system category",
  }),
  targetMarket: z.string().min(1, "Target market is required"),
  integrationCapabilities: z.string().min(1, "Integration capabilities are required"),
  demoAvailable: z.enum(["yes", "no"], { error: "Please select an option" }),
});