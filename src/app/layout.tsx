import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
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
  title: "Delgoo — Send anything. Through anyone.",
  description: "Peer-to-peer city delivery. Someone's already going your way.",
  keywords: ["delivery", "local delivery", "peer-to-peer", "city delivery", "Milan", "consegne"],
  authors: [{ name: "Delgoo Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Delgoo — Send anything. Through anyone.",
    description: "Peer-to-peer city delivery. Someone's already going your way.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delgoo — Send anything. Through anyone.",
    description: "Peer-to-peer city delivery. Someone's already going your way.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
