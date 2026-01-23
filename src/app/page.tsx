"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skill from "@/components/Skill";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        <Hero />
        <Portfolio />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
