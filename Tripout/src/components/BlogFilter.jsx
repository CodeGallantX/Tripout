import React from "react";

const BlogFilter = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-6">
      <form action="" method="get" className="flex flex-col gap-4">
        {/* Search Input */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">
            Search Blogs
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search by title..."
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Filter by Category
          </label>
          <select
            id="category"
            name="category"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Categories</option>
            <option value="tech">Tech</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="travel">Travel</option>
            <option value="health">Health</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogFilter;
