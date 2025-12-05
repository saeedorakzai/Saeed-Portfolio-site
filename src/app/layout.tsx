import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorTrail from "@/components/ui/CursorTrail";
import ParticleField from "@/components/3d/ParticleField";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saeed Ullah | AI Solutions Developer",
  description: "3D Interactive Portfolio of Saeed Ullah, specializing in AI, Machine Learning, and Computer Vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <LoadingScreen />
        <ScrollProgress />
        <CursorTrail />
        <ParticleField />
        {children}
      </body>
    </html>
  );
}
