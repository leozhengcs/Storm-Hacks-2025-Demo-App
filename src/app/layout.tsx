import type { Metadata } from "next";
import GoogleTag from "./components/GoogleTag";
import RouteChangeTracker from "./components/RouteChangeTracker";
import ConsentBanner from "./components/ConsentBanner";
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
  title: "Storm Hacks 2025 Demo App",
  description: "Basic information tracker",
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
        <GoogleTag />
        <RouteChangeTracker />
        <ConsentBanner />
        {children}
      </body>
    </html>
  );
}
