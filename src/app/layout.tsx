import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import GoogleTag from "./GoogleTag";
import ConsentBanner from "./ConsentBanner";
import RouteChangeTracker from "./RouteChangeTracker";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunrise Café",
  description: "Cozy neighborhood café with fresh coffee and pastries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <GoogleTag />
        <ConsentBanner />
        <Suspense fallback={null}>
          <RouteChangeTracker />
        </Suspense>
        {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} /> */}
        <main className="p-16">{children}</main>
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} Sunrise Café · 123 Bean St, Brewtown
          </p>
        </footer>
      </body>
    </html>
  );
}
