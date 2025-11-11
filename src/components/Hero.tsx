"use client";

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
        </div>
      </div>
    </section>
  );
}
