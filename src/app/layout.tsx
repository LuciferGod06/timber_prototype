import type { Metadata } from "next";
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
  title: "TimberCraft - Premium Quality Timber & Wood Suppliers",
  description:
    "Your trusted partner for premium quality timber and plywood. Teak Wood, Marine Plywood, Hardwood, and more. Fast delivery, competitive prices. Get quote on WhatsApp.",
  keywords: [
    "timber",
    "wood",
    "plywood",
    "teak wood",
    "hardwood",
    "lumber",
    "construction materials",
    "wood suppliers",
  ],
  openGraph: {
    title: "TimberCraft - Premium Quality Timber & Wood Suppliers",
    description:
      "Your trusted partner for premium quality timber and plywood. Fast delivery, competitive prices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
