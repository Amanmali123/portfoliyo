import React from 'react';

export default function AboutMe({ id }) {
  return (
    <section id={id} className="py-16 bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 min-h-screen" data-aos="fade-up">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <img
          src="/IMG_20230819_123011_825.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover border-4 border-blue-200 dark:border-blue-800"
        />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Aman Mali</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
          Hello, I'm Aman Mali, a passionate software developer specializing in a diverse
          range of technologies including React.js, Node.js, Express, MongoDB, and Tailwind CSS.
          With a strong foundation in JavaScript, JQuery, HTML5, and CSS.
           I bring a comprehensive skill set to the table, complemented by my expertise in
           UI/UX design
           </p>
        <div className="flex space-x-4 mb-6">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Get Resume</a>
          <a href="https://github.com/amanmali" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/amanmali-255763205" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">LinkedIn</a>
        </div>
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-4">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Interests & Hobbies</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>I enjoy designing clean and responsive user interfaces that are both beautiful and functional.</li>
            <li>I frequently explore new web technologies, tools, and frameworks to stay ahead in the frontend ecosystem.</li>
            <li>I love contributing to open-source projects and learning from collaborative coding.</li>
            <li>I regularly read tech blogs and case studies to stay updated with design trends and performance best practices.</li>
            <li>I participate in UI/UX challenges on platforms like Frontend Mentor and Dribbble to sharpen my design thinking.</li>
            <li>I like integrating external APIs to build real-world solutions and dynamic applications.</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 