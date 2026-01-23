interface PortfolioCategoriesProps {
  categories: string[];
  setActiveFilter: (category: string) => void;
  activeFilter: string;
}

export default function PortfolioCategories({
  categories,
  setActiveFilter,
  activeFilter,
}: PortfolioCategoriesProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            activeFilter === category
              ? "bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105"
              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
