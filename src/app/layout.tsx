import type { Metadata } from "next";
import { Syne, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScroll";
import Cursor from "@/components/motion/Cursor";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ashpeak.me"),
  title: {
    default: "Ashish Singh — Full-Stack Developer",
    template: "%s | Ashish Singh",
  },
  description: "Portfolio of Ashish Singh, Full-Stack Developer & Builder.",
  openGraph: {
    title: "Ashish Singh — Full-Stack Developer",
    description: "Portfolio of Ashish Singh, Full-Stack Developer & Builder.",
    url: "https://www.ashpeak.me",
    siteName: "Ashish Singh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Singh — Full-Stack Developer",
    description: "Portfolio of Ashish Singh, Full-Stack Developer & Builder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${figtree.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden`}
      >
        <SmoothScrollProvider>
          <Cursor />
          <Nav />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <GoogleAnalytics gaId="G-YX1FYX8FGP" />
      </body>
    </html>
  );
}
