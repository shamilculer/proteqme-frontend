import { NextResponse } from "next/server";

import { isBrevoConfigured } from "@/lib/brevo";
import { processLeadSubmission } from "@/lib/leads/processLead";
import { leadSubmissionSchema } from "@/lib/leads/schemas";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = leadSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid submission",
          issues: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const lead = await processLeadSubmission(parsed.data);

    return NextResponse.json({
      success: true,
      brevoConfigured: isBrevoConfigured(),
      brevoSynced: Boolean(lead.brevoSync?.success),
      leadId: lead.leadId || null,
      email: lead.brevo?.email,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to save lead";

    console.error("[POST /api/leads]", error);

    return NextResponse.json({ message }, { status: 500 });
  }
}
