import { DM_Sans, Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/global/SiteHeader";
import SiteFooter from "@/components/global/SiteFooter";
import SkipToContent from "@/components/global/SkipToContent";
import SitePopups from "@/components/popups/SitePopups";
import PageShell from "@/components/providers/PageShell";
import ParticlesRoot from "@/components/providers/ParticlesRoot";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Proteq | AML Compliance Advisory & RegTech Systems",
  description:
    "AML compliance advisory, professional regulatory training, and RegTech systems for financial institutions, VASPs, and fintechs. Book a free consultation with Proteq.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip">
        <SitePopups>
          <ParticlesRoot>
          <SkipToContent />
          <SiteHeader />
          <main
            id="main-content"
            tabIndex={-1}
            className="site-interactions relative isolate flex flex-1 flex-col outline-none"
          >
            <PageShell>{children}</PageShell>
          </main>
          <SiteFooter />
          </ParticlesRoot>
        </SitePopups>
      </body>
    </html>
  );
}
