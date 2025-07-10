import React from 'react';

const certifications = [
  'MERN Stack – Ypsilon IT Solution',
  'MERN Stack – Universal Informatics',
  'C and C++ – Universal Informatics',
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mx-auto max-w-xl">
          {certifications.map(cert => (
            <li key={cert} className="mb-2">{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
} 