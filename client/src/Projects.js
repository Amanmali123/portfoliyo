import React from 'react';

export default function Projects({ id }) {
  return (
    <section id={id} className="py-16 bg-blue-50 dark:bg-gray-800 transition-colors duration-500" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Projects</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">E-Tender Platform (MERN Stack)</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2">
            <li>Full-stack application with React frontend, Node/Express backend, MongoDB database</li>
            <li>Secure login and authentication</li>
            <li>Modern, responsive UI</li>
            <li>Version control with Git</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">React.js</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">Node.js</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">Express.js</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">MongoDB</span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
} 