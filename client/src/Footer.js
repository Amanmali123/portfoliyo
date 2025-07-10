import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 bg-white dark:bg-gray-900 border-t border-blue-100 dark:border-gray-800 transition-colors duration-500" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-700 dark:text-gray-300 text-center md:text-left mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Aman Mali. All rights reserved.
        </div>
        <div className="flex gap-4 text-2xl justify-center">
          <a href="https://www.linkedin.com/in/amanmali-255763205" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 hover:scale-110 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/amanmali" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:scale-110 transition">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
} 