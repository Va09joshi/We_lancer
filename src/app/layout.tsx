import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
