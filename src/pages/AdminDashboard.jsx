import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminAnalyticsCards from "../components/AdminAnalyticsCards";
import AdminGraphs from "../components/AdminGraphs";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProjectTable from "../components/ProjectTable";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-lightGrey font-primary">
      <AdminNavbar />
      <div className="p-6">
        <AdminAnalyticsCards />
        <AdminGraphs />
        <SearchBar onSearch={handleSearch} />
        <Filters onFilterChange={handleFilterChange} showBestProjects={true} />
        <ProjectTable 
          showUpload={true} 
          showEdit={true} 
          showBestTag={true}
          showAdminControls={true}
          searchTerm={searchTerm}
          filters={filters}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
