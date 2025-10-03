import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CoordinatorCards from "../components/CoordinatorCards";
import GraphSection from "../components/GraphSection";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProjectTable from "../components/ProjectTable";

const CoordinatorHODDashboard = () => {
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
      <Navbar showUpload={true} title="Coordinator and HoD" />
      <div className="px-6 py-4">
        <CoordinatorCards />
        <GraphSection />
        <SearchBar onSearch={handleSearch} />
        <Filters onFilterChange={handleFilterChange} showBestProjects={true} />
        <ProjectTable 
          showUpload={true} 
          showEdit={true} 
          showBestTag={false}
          searchTerm={searchTerm}
          filters={filters}
        />
      </div>
    </div>
  );
};

export default CoordinatorHODDashboard;
