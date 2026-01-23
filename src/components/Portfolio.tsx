"use client";
import data from "@/data/portfolio-data.json";
import { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioCategories from "./PortfolioCategories";
import Pagination from "./Pagination";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const portfolioDatas: PortfolioData[] = data.toReversed();

  const categoryArr = Array.from(new Set(data.map((item) => item.category)));
  const categories = ["All", ...categoryArr];

  let filteredProjects: PortfolioData[] = [];
  filteredProjects =
    activeFilter === "All"
      ? portfolioDatas
      : portfolioDatas.filter((item) => item.category === activeFilter);

  const itemPerPage = 2;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const totalPages =
    filteredProjects.length != null
      ? Math.ceil(filteredProjects.length / itemPerPage)
      : 1;

  const displayedProjects = filteredProjects.slice(startIndex, endIndex);

  function handleFilterClick(filter: string) {
    setCurrentPage(1);
    setActiveFilter(filter);
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <section
      id="portfolio"
      className="py-20 bg-background transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl text-center font-bodoni-moda mb-10 italic underline decoration-2 underline-offset-8 decoration-purple-600 dark:text-white">
          Portfolio
        </h2>

        <PortfolioCategories
          categories={categories}
          setActiveFilter={handleFilterClick}
          activeFilter={activeFilter}
        />

        <PortfolioItem data={displayedProjects} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      </div>
    </section>
  );
}
