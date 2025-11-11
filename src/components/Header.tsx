"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 backdrop-blur-lg border-b border-border px-5 py-3 smooth-transition">
      <div className="flex items-center justify-between">
        <div className="flex items-end-safe space-x-2">
          <Image
            src={isDark ? "/ffl-dark.png" : "/ffl-light.png"}
            alt="Logo"
            width={30}
            height={20}
          />
          <span className="hidden sm:inline text-foreground font-bodoni-moda font-bold">
            FauzanFL
          </span>
        </div>

        <nav className="hidden md:flex space-x-5 font-montserrat font-semibold text-sm">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary hover:cursor-pointer smooth-transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-foreground hover:text-primary hover:cursor-pointer smooth-transition"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-foreground hover:text-primary hover:cursor-pointer smooth-transition"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-foreground hover:text-primary hover:cursor-pointer smooth-transition"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary hover:cursor-pointer smooth-transition"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={toggleTheme}
          className={`rounded-full p-2 ${
            isDark ? "hover:bg-foreground/20" : "hover:bg-primary/60"
          } hover:cursor-pointer smooth-transition`}
        >
          {isDark ? (
            <SunIcon className="text-foreground w-5" />
          ) : (
            <MoonIcon className="text-foreground w-5" />
          )}
        </button>
      </div>
    </header>
  );
}
