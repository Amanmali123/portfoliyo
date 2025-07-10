import React from 'react';

export default function Experience({ id }) {
  return (
    <section id={id} className="py-16 bg-blue-50 dark:bg-gray-800 transition-colors duration-500" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Experience</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">MERN Stack Intern</h3>
          <div className="text-gray-700 dark:text-gray-300 mb-1">Ypsilon IT Solution Pvt. Ltd., Indore</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Duration: 6 months</div>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Web optimization</li>
            <li>Technical support</li>
            <li>Infrastructure management</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 