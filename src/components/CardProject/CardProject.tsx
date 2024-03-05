// components/CardProject/CardProject.tsx

import React from 'react';

const CardProject = () => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src="..." alt="Project Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Project Title</div>
        <p className="text-gray-700 text-base">Project Description</p>
      </div>
    </div>
  );
};

export default CardProject;
