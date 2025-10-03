import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="mb-8 mt-8">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search by keyword, project ID, or title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-16 pr-32 py-4 border-2 border-gray-200 rounded-xl focus:border-primaryPurple focus:outline-none transition-colors duration-200 bg-white shadow-sm hover:shadow-md text-lg font-primary"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primaryPurple to-accent1 text-white px-8 py-3 rounded-lg hover:from-accent1 hover:to-accent2 transition-all duration-200 font-medium text-lg shadow-md hover:shadow-lg"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
