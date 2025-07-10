import React from 'react';

const skills = [
  { name: 'JavaScript', type: 'Language' },
  { name: 'C', type: 'Language' },
  { name: 'C++', type: 'Language' },
  { name: 'HTML', type: 'Tool' },
  { name: 'CSS', type: 'Tool' },
  { name: 'React.js', type: 'Stack' },
  { name: 'Node.js', type: 'Stack' },
  { name: 'Express.js', type: 'Stack' },
  { name: 'MongoDB', type: 'Stack' },
  { name: 'Git', type: 'Tool' },
  { name: 'VS Code', type: 'Tool' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map(skill => (
            <div key={skill.name} className="bg-blue-50 dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
              <span className="text-lg font-semibold text-blue-700 dark:text-blue-300">{skill.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 