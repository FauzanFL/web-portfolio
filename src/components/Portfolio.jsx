/* eslint-disable react/prop-types */
import { useState } from 'react';
import portfolioData from '../data/portfolio-data.json';
import { getImageURL } from '../utils/image-util';
import Pagination from './Pagination';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Portfolio = ({ theme }) => {
  const [category, setCategory] = useState('All');
  const categorySet = new Set(portfolioData.map((item) => item.category));
  const categoryArray = Array.from(categorySet);
  const categories = ['All', ...categoryArray];

  let chosenData = [];
  if (category !== 'All') {
    chosenData = portfolioData.filter((item) => item.category === category);
  } else {
    chosenData = portfolioData;
  }
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages =
    chosenData != null ? Math.ceil(chosenData.length / itemsPerPage) : 1;

  let displayedItems = chosenData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handleLast = () => {
    setCurrentPage(totalPages);
  };

  return (
    <section id="portfolio">
      <div className="py-10 px-10">
        <h2 className="text-2xl text-center font-bold mb-6">
          <span
            className={`border-b-4 ${
              theme === 'light' ? 'border-sky-500' : 'border-orange-500'
            }`}
          >
            Portfolio
          </span>
        </h2>
        <div className="flex font-poppins mt-2 mb-4">
          {categories.map((item, index) => {
            const handleClick = () => {
              setCategory(item);
              setCurrentPage(1);
            };
            return (
              <button
                key={index}
                className={`border rounded-xl px-4 py-2 mx-1 duration-300 ${
                  theme === 'light'
                    ? category === item
                      ? 'bg-sky-300'
                      : 'hover:bg-sky-300'
                    : category === item
                    ? 'bg-orange-500 text-white'
                    : 'hover:bg-orange-600 hover:text-white'
                }`}
                onClick={handleClick}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className={`shadow-md rounded-lg relative p-8 ${
                theme === 'light' ? 'bg-white' : 'bg-slate-800'
              }`}
            >
              {item.publication !== '' && (
                <a
                  href={item.publication}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 right-2"
                >
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 hover:text-blue-500" />
                </a>
              )}
              <img
                src={getImageURL(item.image)}
                alt="preview"
                className="border"
              />
              <div className="mt-4">
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p
                  className={`${theme === 'light' ? 'text-gray-600' : ''} mb-4`}
                >
                  {item.description}
                </p>
                <div className="mb-4">
                  <h4
                    className={`${
                      theme === 'light' ? 'text-gray-600' : ''
                    } font-bold mb-2`}
                  >
                    Technology:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {item['technologies'].map((tech, index) => (
                      <div
                        key={index}
                        className={`${
                          theme === 'light'
                            ? 'bg-gray-200 text-gray-600'
                            : 'bg-gray-700 text-white'
                        } px-2 py-1 rounded-lg`}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb">
                  <h4
                    className={`${
                      theme === 'light' ? 'text-gray-600' : ''
                    } font-bold mb-2`}
                  >
                    See code here:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item['github-repo'].map((repo, index) => (
                      <a
                        key={index}
                        target="_blank"
                        rel="noreferrer"
                        href={repo.url}
                        className="btn btn-outline text-blue-500 font-bold"
                      >
                        {repo.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onPrev={handlePrev}
            onNext={handleNext}
            onFirst={handleFirst}
            onLast={handleLast}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
