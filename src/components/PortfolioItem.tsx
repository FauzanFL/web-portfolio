import { ExternalLink, Github } from "lucide-react";

export default function PortfolioItem({ data }: { data: PortfolioData[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12 min-h-[550px]">
      {data.map((item: PortfolioData) => (
        <div
          key={item.id}
          className="flex flex-col bg-white dark:bg-gray-700 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] group"
        >
          <div className="aspect-video bg-gray-200 dark:bg-gray-600 overflow-hidden">
            <img
              src={"/img/" + item.image}
              alt={item.title}
              className="w-full h-full object-fill"
            />
          </div>

          <div className="flex flex-col justify-between p-6 flex-1">
            <h3 className="text-xl font-montserrat font-bold mb-3 dark:text-white">
              {item.title}
            </h3>
            <p className="font-open-sans text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
              {item.description}
            </p>

            <div className="mb-4">
              <p className="text-sm font-semibold font-montserrat mb-2 dark:text-gray-200">
                Technology:
              </p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 font-open-sans bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-2 md:gap-4 font-montserrat">
              {item.publication && (
                <a
                  href={item.publication}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
                >
                  See publication here <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {item.githubRepo &&
                item.githubRepo.map((repo, index) => (
                  <a
                    key={index}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {repo.name}
                  </a>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
