import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid';
/* eslint-disable react/prop-types */
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onPrev,
  onNext,
  onFirst,
  onLast,
}) {
  const nearbyPages = 2;
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const startPage = Math.max(1, currentPage - nearbyPages);
  const endPage = Math.min(totalPages, currentPage + nearbyPages);

  const pagesToShow = pageNumbers.slice(startPage - 1, endPage);

  return (
    <nav className="inline-flex gap-3">
      <button
        href="#"
        onClick={() => onFirst()}
        className={
          'relative inline-flex items-center rounded-2xl px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ' +
          (currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-black hover:bg-fuchsia-100')
        }
        disabled = {currentPage === 1}
      >
        <span className="sr-only">Previous</span>
        <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        href="#"
        onClick={() => onPrev()}
        className={
          'relative hidden md:inline-flex items-center rounded-2xl px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ' +
          (currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-black hover:bg-fuchsia-100')
        }
        disabled = {currentPage === 1}
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      {pagesToShow.map((number) => (
        <button
          key={number}
          href="#"
          className={
            'relative inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold' +
            (currentPage === number
              ? 'z-10 bg-gray-600 text-white focus:z-20 outline-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
              : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-fuchsia-100 hover:text-black focus:z-20 focus:outline-offset-0')
          }
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onNext()}
        className={
          'relative hidden md:inline-flex items-center rounded-2xl px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 ' +
          (currentPage === totalPages ? 'cursor-not-allowed' : 'hover:text-black hover:bg-fuchsia-100')
        }
        disabled = {currentPage === totalPages}
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        href="#"
        onClick={() => onLast()}
        className={
          'relative inline-flex items-center rounded-2xl px-2 py-2 text-gray-400 ring-1 ring-inset  ring-gray-300 focus:z-20 focus:outline-offset-0 ' +
          (currentPage === totalPages ? 'cursor-not-allowed' : 'hover:text-black hover:bg-fuchsia-100')
        }
        disabled = {currentPage === totalPages}
      >
        <span className="sr-only">Next</span>
        <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </nav>
  );
}
