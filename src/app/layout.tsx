import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-satoshi",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-geist",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "we_lancer | Your Digital Partner for Build, Launch, Scale",
  description: "Premium freelancer agency specializing in Web Development, Mobile Apps, and AI Solutions. We help you scale your business with modern technology.",
  keywords: ["freelancer agency", "web development", "app development", "AI solutions", "UI/UX design", "we_lancer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${outfit.variable} ${plusJakarta.variable} ${spaceMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
