"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 font-montserrat bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-end-safe space-x-2 hover:cursor-pointer group">
          <Image
            src={isDark ? "/ffl-dark.png" : "/ffl-light.png"}
            alt="Logo"
            width={30}
            height={20}
          />
          <span className="hidden md:inline text-xl font-bold bg-linear-to-r bg-clip-text group-hover:text-transparent group-hover:from-purple-700 group-hover:to-blue-700 transition-colors">
            FauzanFL
          </span>
        </div>

        <nav className="hidden md:flex space-x-5 font-semibold text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="text-yellow-500 w-5 h-5" />
            ) : (
              <Moon className="text-gray-700 w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-foreground w-6 h-6" />
            ) : (
              <Menu className="text-foreground w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 font-medium"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
