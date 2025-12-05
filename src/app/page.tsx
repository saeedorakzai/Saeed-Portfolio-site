import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import MediaGallery from "@/components/ui/MediaGallery";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-text">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <MediaGallery />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
