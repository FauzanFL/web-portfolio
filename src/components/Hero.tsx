export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 pt-24 pb-12 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="relative group mx-5">
            <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:duration-200 animate-pulse"></div>
            <div className="relative">
              <img
                src="/my-photo.png"
                alt="FauzanFL"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </div>

          <div className="text-center md:text-left flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair-display mb-6 italic font-normal bg-linear-to-r from-gray-900 via-purple-900 to-blue-900 dark:from-white dark:via-purple-200 dark:to-blue-200 bg-clip-text text-transparent animate-[fadeIn_1s_ease-in]">
              Hi, I&apos;m Fauzan Fashihul Lisan
            </h1>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-5 font-montserrat">
              <p>
                I am a{" "}
                <span className="font-bold text-xl bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Software Engineer
                </span>{" "}
                focused on designing, developing, and maintaining applications.
                I have experience working with multiple technologies and
                frameworks, adapt quickly to new tools, and enjoy solving
                complex technical problems. Driven by the rapid evolution of
                technology, I am committed to continuous learning and leveraging
                software to build efficient and impactful solutions. I hold a
                degree in Software Engineering from Telkom Institute of
                Technology Purwokerto and have strengthened my skills through
                programs for{" "}
                <span className="font-bold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Backend Development
                </span>{" "}
                and{" "}
                <span className="font-bold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Cloud Computing
                </span>{" "}
                with Google Cloud
              </p>
              <a
                href="#contact"
                className="inline-block px-10 py-3.5 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 font-medium shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
