import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import TechStack from "@/components/sections/TechStack";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <Header />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Education />
      <Contact />
    </main>
  );
}
