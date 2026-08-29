import { getServerSideURL } from "@/utilities/getURL";
import { resolveCalLink } from "@/lib/calcom";

/** Shared across HeroLeadForm and ContactForm — keep in one place. */
export const SERVICE_OPTIONS = [
  { value: "advisory", label: "Consultancy & Advisory" },
  { value: "learning", label: "Proteq Learning" },
  { value: "systems", label: "RegTech Systems" },
  { value: "ai-investments", label: "AI Investments" },
  { value: "general", label: "General Enquiry" },
];

/** Real service page routes, used for the enquiry auto-responder's links. */
const SERVICE_PAGE_PATHS = {
  advisory: "/consultancy-advisory",
  learning: "/learning",
  systems: "/systems",
  "ai-investments": "/ai-investments",
  general: "/",
};

const DEFAULT_RESPONSE_SLA_HOURS = "24";

function absoluteUrl(path) {
  const base = getServerSideURL().replace(/\/$/, "");
  return `${base}${path}`;
}

/**
 * link1 = the matching service overview page.
 * link2 = homepage — there's no dedicated case-studies/work page yet, so this
 * is a placeholder until one exists.
 */
export function getServicePageLinks(serviceValue) {
  const path = SERVICE_PAGE_PATHS[serviceValue] || SERVICE_PAGE_PATHS.general;
  return {
    SERVICE_PAGE_LINK_1: absoluteUrl(path),
    SERVICE_PAGE_LINK_2: absoluteUrl("/"),
  };
}

export function getResponseSlaHours() {
  return process.env.RESPONSE_SLA_HOURS?.trim() || DEFAULT_RESPONSE_SLA_HOURS;
}

export function getQuoteRequestLink() {
  return absoluteUrl("/contact");
}

/**
 * The site has one Cal.com event type — reused for both "book a follow-up
 * call" and "schedule a consultation" merge tags. Returns "" if
 * NEXT_PUBLIC_CALCOM_LINK isn't configured.
 */
export function getCalBookingLink() {
  const link = resolveCalLink();
  return link ? `https://cal.com/${link}` : "";
}

/** Cal.com's own reschedule URL convention: <event link>?rescheduleUid=<uid>. */
export function getRescheduleLink(bookingUid) {
  const base = getCalBookingLink();
  return base && bookingUid ? `${base}?rescheduleUid=${bookingUid}` : "";
}

export function resolveCrmLifecycleStage({ funnelType, hasBooking }) {
  if (funnelType === "demo") return hasBooking ? "Demo Booked" : "Demo Requested";
  if (funnelType === "contact") return "Enquiry Received";
  if (funnelType === "partner") return "Partner Application";
  if (funnelType === "newsletter") return "Newsletter Subscriber";
  return "New Lead";
}
