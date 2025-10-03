import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Upload, User, Settings, Bookmark, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ showUpload, title = "Student & Staff" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    setIsDropdownOpen(false);
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center bg-white p-4 border-b border-borderGrey">
      <div className="text-primaryPurple font-bold text-xl">
        {title}
      </div>

      <div className="flex items-center space-x-4">
        {showUpload && (
          <button className="flex items-center bg-gradient-to-r from-primaryPurple to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium">
            <Upload size={16} className="mr-2" /> Upload
          </button>
        )}

        <div className="relative" ref={dropdownRef}>
          <button 
            className="flex items-center space-x-2 text-neutralText hover:text-darkText focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <User size={18} className="text-primaryPurple" />
            <span>Lorem Ipsum</span>
            <ChevronDown size={18} className="text-primaryPurple" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
              <div className="py-1">
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <Settings size={16} className="mr-3 text-gray-500" />
                  Profile & Settings
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <Bookmark size={16} className="mr-3 text-gray-500" />
                  Bookmarks
                </button>
                <button 
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleSignOut}
                >
                  <LogOut size={16} className="mr-3 text-gray-500" />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

