"use client";

import { useState } from "react";
import { BadgeFilter } from "./ui/badge";

interface PortfolioProps {
  isDark: boolean;
}

export function Portfolio({ isDark }: PortfolioProps) {
  const [category, setCategory] = useState("all");

  return (
    <section
      id="portfolio"
      className="min-h-screen pt-16 px-6 lg:px-8 bg-background-second"
    >
      <div className="flex justify-center">
        <h2
          className={`${
            isDark ? "text-gradient-dark" : "text-gradient-light"
          } block w-fit text-xl font-bold font-playfair-display`}
        >
          My Portfolio
        </h2>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <BadgeFilter className="hover:bg-background" text="All" />
        <BadgeFilter className="hover:bg-background" text="Frontend" />
        <BadgeFilter className="hover:bg-background" text="Backend" />
      </div>
      <div className=""></div>
    </section>
  );
}
