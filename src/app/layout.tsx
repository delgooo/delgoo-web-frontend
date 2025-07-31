import type { Metadata, Viewport } from "next";
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
  title: "Delgoo - Delivery Made Simple",
  description: "Shorten the distance in your city. Ship smart with someone who's already on the move.",
  keywords: ["delivery", "local delivery", "package delivery", "city delivery", "smart delivery"],
  authors: [{ name: "Delgoo Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Delgoo - Delivery Made Simple",
    description: "Shorten the distance in your city. Ship smart with someone who's already on the move.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delgoo - Delivery Made Simple",
    description: "Shorten the distance in your city. Ship smart with someone who's already on the move.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        {children}
      </body>
    </html>
  );
}
