import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import PageLoader from "@/components/PageLoader";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Innomedix Pharma - Precision in Healthcare",
  description:
    "Leading pharmaceutical, nutraceutical, and ayurvedic manufacturer with a 13-year legacy of delivering high-quality, affordable medications across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bone-white text-ink-charcoal selection:bg-primary-teal selection:text-bone-white overflow-x-hidden">
        {/* Entrance Loader */}
        <PageLoader />

        {/* Custom cursor (Hidden on mobile) */}
        <Cursor />

        {/* Smooth Scroll Lenis Wrapper */}
        <SmoothScroll>
          {/* Main layout container */}
          <div className="flex flex-col min-h-screen relative">
            <Header />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />

            {/* Floating WhatsApp chat widget */}
            <a
              href="https://wa.me/917827878176?text=Innomedix%20Pharma%20Private%20Limited,%20Hi%20How%20can%20I%20Help%20You?"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex fixed bottom-8 right-8 z-40 bg-[#25D366] text-bone-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group items-center gap-2"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-6 h-6 fill-bone-white text-[#25D366]" />
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-body text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                Chat with us
              </span>
            </a>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
