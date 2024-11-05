import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ page }) => {
  return (
    <div className="relative bg-orange-50 w-full h-[320px] flex flex-col justify-center items-center px-6 md:px-10 xl:px-44">
      <div className="absolute bg-[#e6e1d1] w-[250px] h-[100px] bottom-0 left-1/2 -translate-x-1/2"></div>
      <div className="z-10 mt-10 ">
        <h2 className="text-5xl md:text-7xl font-semibold mb-4 font-serif">{page.title}</h2>

        <nav aria-label="breadcrumb" className="text-sm text-[#F7921E] flex flex-row items-center justify-center">
          <ol className="list-reset flex space-x-2 font-semibold">
            <li>
              <Link to="/" className="text-[#F7921E] hover:underline">HOME</Link>
            </li>
            <li>/</li>
            {page.breadcrumb.map((crumb, index) => (
              <React.Fragment key={index}>
                {/* Breadcrumb link */}
                <li>
                  {crumb.path ? (
                    <Link to={crumb.path} className="text-[#F7921E] hover:underline">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-gray-500">{crumb.name}</span>
                  )}
                </li>
                {index < page.breadcrumb.length - 1 && <li>/</li>}
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Banner;