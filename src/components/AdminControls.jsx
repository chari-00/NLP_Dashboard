import React from "react";

const AdminControls = () => {
  return (
    <div className="flex space-x-4 mt-6">
      <button className="border border-primaryPurple text-primaryPurple px-3 py-1 rounded hover:bg-primaryPurple hover:text-white">
        Add Project
      </button>
      <button className="border border-primaryPurple text-primaryPurple px-3 py-1 rounded hover:bg-primaryPurple hover:text-white">
        Remove Project
      </button>
      <button className="border border-primaryPurple text-primaryPurple px-3 py-1 rounded hover:bg-primaryPurple hover:text-white">
        Manage Users
      </button>
      <button className="border border-primaryPurple text-primaryPurple px-3 py-1 rounded hover:bg-primaryPurple hover:text-white">
        Sync Database
      </button>
    </div>
  );
};

export default AdminControls;
