import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientEffects from "@/components/layout/ClientEffects";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://primumstilla.com'),
  title: {
    default: "Primum Stilla | The First Drop of Innovation",
    template: "%s | Primum Stilla"
  },
  description: "AI-Powered Solutions, Mobile App Development, Full-Stack Web Development, and Creative Services. Transform your business with the first drop of innovation.",
  keywords: ["AI Solutions", "Machine Learning", "Mobile App Development", "Web Development", "SEO", "Graphic Design", "Video Editing", "React Native", "Next.js", "Primum Stilla"],
  authors: [{ name: "Primum Stilla" }],
  creator: "Primum Stilla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://primumstilla.com",
    title: "Primum Stilla | The First Drop of Innovation",
    description: "AI-Powered Solutions, Mobile App Development, Full-Stack Web Development, and Creative Services.",
    siteName: "Primum Stilla",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Primum Stilla - The First Drop of Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primum Stilla | The First Drop of Innovation",
    description: "AI-Powered Solutions, Mobile App Development, Full-Stack Web Development, and Creative Services.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}
