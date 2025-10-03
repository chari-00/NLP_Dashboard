import React, { useState } from "react";

const Filters = ({ onFilterChange, showBestProjects = false }) => {
  const [filters, setFilters] = useState({
    year: "",
    semester: "",
    domain: "",
    status: "",
    department: ""
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      year: "",
      semester: "",
      domain: "",
      status: "",
      department: ""
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <select 
          value={filters.year}
          onChange={(e) => handleFilterChange('year', e.target.value)}
          className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primaryPurple focus:outline-none transition-colors duration-200 text-lg font-primary"
        >
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>

        <select 
          value={filters.semester}
          onChange={(e) => handleFilterChange('semester', e.target.value)}
          className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primaryPurple focus:outline-none transition-colors duration-200 text-lg font-primary"
        >
          <option value="">All Semesters</option>
          <option value="6th">6th</option>
          <option value="7th">7th</option>
        </select>

        <select 
          value={filters.domain}
          onChange={(e) => handleFilterChange('domain', e.target.value)}
          className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primaryPurple focus:outline-none transition-colors duration-200 text-lg font-primary"
        >
          <option value="">All Domains</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Internet of Things">Internet of Things</option>
          <option value="Renewable Energy">Renewable Energy</option>
          <option value="Automation">Automation</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Sustainability">Sustainability</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Blockchain">Blockchain</option>
          <option value="AR/VR">AR/VR</option>
          <option value="3D Printing">3D Printing</option>
          <option value="Robotics">Robotics</option>
          <option value="Materials">Materials</option>
          <option value="Infrastructure">Infrastructure</option>
        </select>

        <select 
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primaryPurple focus:outline-none transition-colors duration-200 text-lg font-primary"
        >
          <option value="">All Projects</option>
          <option value="best">Best Projects</option>
          <option value="non-best">Non-Best Projects</option>
        </select>

        <select 
          value={filters.department}
          onChange={(e) => handleFilterChange('department', e.target.value)}
          className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primaryPurple focus:outline-none transition-colors duration-200 text-lg font-primary"
        >
          <option value="">All Departments</option>
          <option value="AE">AE</option>
          <option value="BT">BT</option>
          <option value="CE">CE</option>
          <option value="CSE">CSE</option>
          <option value="EEE">EEE</option>
          <option value="ECE">ECE</option>
          <option value="IT">IT</option>
          <option value="MA">MA</option>
          <option value="MN">MN</option>
          <option value="ME">ME</option>
          <option value="CHE">CHE</option>
          <option value="AI/DS">AI/DS</option>
        </select>

        <button
          onClick={clearFilters}
          className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-200 font-medium text-lg shadow-md hover:shadow-lg"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
