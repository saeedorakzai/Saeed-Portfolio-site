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
  metadataBase: new URL('https://saeed-portfolio-site.vercel.app'),
  title: {
    default: "Saeed Ullah | AI Solutions Developer",
    template: "%s | Saeed Ullah"
  },
  description: "3D Interactive Portfolio of Saeed Ullah, specializing in AI, Machine Learning, Computer Vision, and Full Stack Development.",
  keywords: ["AI Developer", "Machine Learning Engineer", "Computer Vision", "Full Stack Developer", "Next.js", "React", "Three.js", "Portfolio", "Saeed Ullah"],
  authors: [{ name: "Saeed Ullah" }],
  creator: "Saeed Ullah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saeed-portfolio-site.vercel.app",
    title: "Saeed Ullah | AI Solutions Developer",
    description: "Explore the 3D interactive portfolio of Saeed Ullah, showcasing projects in AI, ML, and Web Development.",
    siteName: "Saeed Ullah Portfolio",
    images: [
      {
        url: "/portfolio_website_demo_1764722380263.webp", // Using one of the demo images as OG image
        width: 1200,
        height: 630,
        alt: "Saeed Ullah Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saeed Ullah | AI Solutions Developer",
    description: "3D Interactive Portfolio of Saeed Ullah, specializing in AI, Machine Learning, and Computer Vision.",
    images: ["/portfolio_website_demo_1764722380263.webp"],
    creator: "@saeedorakzai", // Assuming handle based on github, can be updated
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
        <LoadingScreen />
        <ScrollProgress />
        <CursorTrail />
        <ParticleField />
        {children}
      </body>
    </html>
  );
}
