import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const projectData = [
  {
    id: 1,
    title: "AI Chatbot",
    nature: "Software",
    domain: "Artificial Intelligence",
    type: "Main",
    year: 2024,
    semester: "7th",
    department: "CSE",
    isBest: true,
  },
  {
    id: 2,
    title: "IoT Smart Home",
    nature: "Hardware",
    domain: "Internet of Things",
    type: "Mini",
    year: 2023,
    semester: "6th",
    department: "ECE",
    isBest: false,
  },
  {
    id: 3,
    title: "Robotic Arm Controller",
    nature: "Hardware",
    domain: "Automation",
    type: "Main",
    year: 2024,
    semester: "7th",
    department: "ME",
    isBest: true,
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    nature: "Software",
    domain: "Blockchain",
    type: "Main",
    year: 2023,
    semester: "6th",
    department: "CSE",
    isBest: false,
  },
  {
    id: 5,
    title: "Solar Panel Optimizer",
    nature: "Hardware",
    domain: "Renewable Energy",
    type: "Main",
    year: 2024,
    semester: "7th",
    department: "EEE",
    isBest: true,
  },
  {
    id: 6,
    title: "Predictive Analytics Dashboard",
    nature: "Software",
    domain: "Data Analytics",
    type: "Main",
    year: 2023,
    semester: "6th",
    department: "AI/DS",
    isBest: false,
  },
  {
    id: 7,
    title: "Green Building Monitor",
    nature: "Hardware",
    domain: "Sustainability",
    type: "Mini",
    year: 2024,
    semester: "7th",
    department: "CE",
    isBest: true,
  },
  {
    id: 8,
    title: "Machine Learning Model",
    nature: "Software",
    domain: "Machine Learning",
    type: "Main",
    year: 2023,
    semester: "6th",
    department: "CSE",
    isBest: false,
  },
  {
    id: 9,
    title: "Smart Traffic System",
    nature: "Hardware",
    domain: "Internet of Things",
    type: "Main",
    year: 2024,
    semester: "7th",
    department: "ECE",
    isBest: true,
  },
  {
    id: 10,
    title: "Wind Energy Converter",
    nature: "Hardware",
    domain: "Renewable Energy",
    type: "Main",
    year: 2023,
    semester: "6th",
    department: "EEE",
    isBest: false,
  },
  {
    id: 11,
    title: "Automated Manufacturing",
    nature: "Hardware",
    domain: "Automation",
    type: "Main",
    year: 2024,
    semester: "7th",
    department: "ME",
    isBest: true,
  },
  {
    id: 12,
    title: "Data Visualization Tool",
    nature: "Software",
    domain: "Data Analytics",
    type: "Mini",
    year: 2023,
    semester: "6th",
    department: "IT",
    isBest: false,
  },
  {
    id: 13,
    title: "Eco-Friendly Materials",
    nature: "Hardware",
    domain: "Sustainability",
    type: "Main",
    year: 2024,
    semester: "7th",
    department: "CHE",
    isBest: true,
  },
  {
    id: 14,
    title: "Neural Network Framework",
    nature: "Software",
    domain: "Machine Learning",
    type: "Main",
    year: 2023,
    semester: "6th",
    department: "AI/DS",
    isBest: false,
  },
  {
    id: 15,
    title: "Smart Agriculture System",
    nature: "Hardware",
    domain: "Internet of Things",
    type: "Mini",
    year: 2024,
    semester: "7th",
    department: "AE",
    isBest: true,
  },
  {
    id: 16,
    title: "Biomedical Sensor",
    nature: "Hardware",
    domain: "Healthcare",
    type: "Main",
    year: 2023,
    semester: "6th",
    department: "BT",
    isBest: false,
  },
  {
    id: 17,
    title: "AR/VR Learning Platform",
    nature: "Software",
    domain: "AR/VR",
    type: "Main",
    year: 2024,
    semester: "7th",
    department: "CSE",
    isBest: true,
  },
  {
    id: 18,
    title: "Cybersecurity Framework",
    nature: "Software",
    domain: "Cybersecurity",
    type: "Main",
    year: 2023,
    semester: "6th",
    department: "IT",
    isBest: false,
  },
  {
    id: 19,
    title: "3D Printing Optimizer",
    nature: "Hardware",
    domain: "3D Printing",
    type: "Mini",
    year: 2024,
    semester: "7th",
    department: "ME",
    isBest: true,
  },
  {
    id: 20,
    title: "Mathematical Modeling Tool",
    nature: "Software",
    domain: "Data Analytics",
    type: "Main",
    year: 2023,
    semester: "6th",
    department: "MA",
    isBest: false,
  },
];

const ProjectTable = ({ showUpload = false, showEdit = false, showBestTag = false, showAdminControls = false, searchTerm = "", filters = {} }) => {
  const [filteredData, setFilteredData] = useState(projectData);

  useEffect(() => {
    let filtered = projectData;

    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.id.toString().includes(searchTerm) ||
        project.domain.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.year) {
      filtered = filtered.filter(project => project.year.toString() === filters.year);
    }

    if (filters.semester) {
      filtered = filtered.filter(project => project.semester === filters.semester);
    }

    if (filters.domain) {
      filtered = filtered.filter(project => project.domain === filters.domain);
    }

    if (filters.department) {
      filtered = filtered.filter(project => project.department === filters.department);
    }

    if (filters.status === "best") {
      filtered = filtered.filter(project => project.isBest);
    } else if (filters.status === "non-best") {
      filtered = filtered.filter(project => !project.isBest);
    }

    setFilteredData(filtered);
  }, [searchTerm, filters]);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-primaryPurple to-secondaryPurple">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white font-primary">Projects</h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gradient-to-r from-primaryPurple to-accent1">
            <tr>
              <th className="px-6 py-5 text-left text-lg font-bold text-white font-primary">ID</th>
              <th className="px-6 py-5 text-left text-lg font-bold text-white font-primary">Project Title</th>
              <th className="px-6 py-5 text-left text-lg font-bold text-white font-primary">Nature</th>
              <th className="px-6 py-5 text-left text-lg font-bold text-white font-primary">Domain</th>
              <th className="px-6 py-5 text-left text-lg font-bold text-white font-primary">Type</th>
              <th className="px-6 py-5 text-left text-lg font-bold text-white font-primary">Year</th>
              <th className="px-6 py-5 text-left text-lg font-bold text-white font-primary">Semester</th>
              <th className="px-6 py-5 text-left text-lg font-bold text-white font-primary">Department</th>
              {showBestTag && <th className="px-6 py-5 text-left text-lg font-bold text-white font-primary">Status</th>}
              <th className="px-6 py-5 text-left text-lg font-bold text-white font-primary">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((project, index) => (
              <tr
                key={project.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-accent1/20 transition-colors duration-200`}
              >
                <td className="px-6 py-4 text-lg font-medium text-gray-900 font-primary">{project.id}</td>
                <td className="px-6 py-4 text-lg text-gray-900 font-primary">{project.title}</td>
                <td className="px-6 py-4 text-lg text-gray-600 font-secondary">{project.nature}</td>
                <td className="px-6 py-4 text-lg text-gray-600 font-secondary">{project.domain}</td>
                <td className="px-6 py-4 text-lg text-gray-600 font-secondary">{project.type}</td>
                <td className="px-6 py-4 text-lg text-gray-600 font-secondary">{project.year}</td>
                <td className="px-6 py-4 text-lg text-gray-600 font-secondary">{project.semester}</td>
                <td className="px-6 py-4 text-lg text-gray-600 font-secondary">{project.department}</td>
                {showBestTag && (
                  <td className="px-6 py-4">
                    {project.isBest ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <Star className="w-3 h-3 mr-1" />
                        Best Project
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Regular
                      </span>
                    )}
                  </td>
                )}
                <td className="px-6 py-4">
                  <div className="flex space-x-3">
                    <button className="bg-primaryPurple text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent3 transition-colors duration-200 shadow-md hover:shadow-lg">
                      View
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg">
                      Download
                    </button>
                    {showEdit && (
                      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-600 transition-colors duration-200 shadow-md hover:shadow-lg">
                        Edit
                      </button>
                    )}
                    {showEdit && (
                      <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors duration-200 shadow-md hover:shadow-lg">
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
