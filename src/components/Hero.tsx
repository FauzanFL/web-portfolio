"use client";

import Image from "next/image";

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  return (
    <section id="about" className="min-h-screen flex pt-16 px-6 lg:px-8">
      <div className="flex items-center justify-center max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-8">
          {/* Left Content */}
          <div className="space-y-6 fade-in">
            <div className="space-y-2">
              <p className="font-montserrat text-xl font-semibold">
                I am Fauzan Fashihul Lisan
              </p>
              <h1
                className={`${
                  isDark ? "text-gradient-dark" : "text-gradient-light"
                } text-4xl font-bold font-playfair-display`}
              >
                Software Engineer & Web Developer
              </h1>
              <p className="font-open-sans">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                vel distinctio accusantium corrupti deserunt cupiditate. Eveniet
                eligendi doloremque nulla, obcaecati nesciunt eaque laborum
                animi sit perspiciatis alias, asperiores quia! Molestiae!
              </p>
            </div>

            <div className="flex items-center justify-center">
              <button className="px-4 py-2 bg-background-second/90 rounded-full smooth-transition hover:scale-110 shadow-custom">
                Contact Me →
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Liquid background effect */}
              <div className="absolute inset-0 bg-linear-to-br from-primary to-accent/20 liquid-morph blur-2xl"></div>

              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rotate-[0.12rad] rounded-[3rem] overflow-hidden smooth-transition hover:scale-105">
                <div className="absolute inset-0 bg-linear-to-br from-primary to-accent/30"></div>
                <Image
                  src="/my-photo.png"
                  alt="Profile"
                  className="w-full h-full object-cover rotate-[-0.12rad] -translate-x-3 translate-y-4"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
