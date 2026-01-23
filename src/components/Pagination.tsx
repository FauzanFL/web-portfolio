import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onNextPage: () => void;
  onPreviousPage: () => void;
}
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onNextPage,
  onPreviousPage,
}: PaginationProps) {
  const nearbyPages = 2;
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  const startPage = Math.max(currentPage - nearbyPages, 1);
  const endPage = Math.min(currentPage + nearbyPages, totalPages);

  const pageToShow = pageNumbers.slice(startPage - 1, endPage);

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={onPreviousPage}
        className={
          "w-10 h-10 flex items-center justify-center rounded-full  dark:text-white transition-all duration-300 hover:scale-110 " +
          (currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100 dark:hover:bg-gray-700")
        }
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {pageToShow.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={
            "w-10 h-10 flex items-center justify-center rounded-full " +
            (page === currentPage
              ? "bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg"
              : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition-all duration-300 hover:scale-110")
          }
        >
          {page}
        </button>
      ))}
      <button
        onClick={onNextPage}
        className={
          "w-10 h-10 flex items-center justify-center rounded-full  dark:text-white transition-all duration-300 hover:scale-110 " +
          (currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100 dark:hover:bg-gray-700")
        }
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
