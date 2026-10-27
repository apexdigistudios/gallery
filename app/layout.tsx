import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Christy Black Art Gallery",
  description: "Exquisite contemporary art, exhibitions, and private viewings curated in Katamanso, Tema.",
  icons: {
    icon: "/art-logo.png",
    shortcut: "/art-logo.png",
    apple: "/art-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative text-slate-900 bg-[#fafafc] font-sans">
        {children}
      </body>
    </html>
  );
}