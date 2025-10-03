import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AnalyticsCards from "../components/AnalyticsCards";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProjectTable from "../components/ProjectTable";

const StudentStaffDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-backgroundGrey font-primary">
      <Navbar title="Student & Staff" />
      <div className="px-6 py-4">
        <AnalyticsCards />
        <SearchBar onSearch={handleSearch} />
        <Filters onFilterChange={handleFilterChange} showBestProjects={false} />
        <ProjectTable 
          showUpload={false} 
          showEdit={false} 
          showBestTag={false}
          searchTerm={searchTerm}
          filters={filters}
        />
      </div>
    </div>
  );
};

export default StudentStaffDashboard;
