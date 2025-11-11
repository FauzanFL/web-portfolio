"use client";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div className="min-h-screen">
        <Header isDark={isDark} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <Portfolio />
        </main>
      </div>
    </>
  );
}
