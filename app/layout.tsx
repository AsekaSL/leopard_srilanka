import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { tw } from "@/lib/theme";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leopard Sri Lanka - Premium Safari Experience",
  description: "Luxury Leopard Safaris in Sri Lanka. Guided, ethical, and unforgettable encounters in the heart of the jungle. Expert wildlife tours in Yala, Wilpattu, and beyond.",
  keywords: ["leopard safari", "Sri Lanka wildlife", "Yala National Park", "luxury safari tours", "ethical wildlife tourism"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakarta.variable} ${tw.bgDark} font-display text-white antialiased overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
