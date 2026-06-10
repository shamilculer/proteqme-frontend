import { DM_Sans, Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import SkipToContent from "@/components/global/SkipToContent";
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
        <ParticlesRoot>
          <SkipToContent />
          <Header />
          <main
            id="main-content"
            tabIndex={-1}
            className="site-interactions relative isolate flex flex-1 flex-col outline-none"
          >
            {children}
          </main>
          <Footer />
        </ParticlesRoot>
      </body>
    </html>
  );
}
