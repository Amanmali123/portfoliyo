import React, { useState } from 'react';

export default function Contact({ id }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id={id} className="py-16 bg-blue-50 dark:bg-gray-800 transition-colors duration-500" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 text-center">"I am here to help you"</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 space-y-2 text-gray-700 dark:text-gray-300">
            <div><span className="font-semibold">Email:</span> am37228611@gmail.com</div>
            <div><span className="font-semibold">Phone:</span> +91-8234024228</div>
            <div><span className="font-semibold">Address:</span> 63/02 Patnipura, Indore, MP</div>
          </div>
          <form className="md:w-1/2 bg-white dark:bg-gray-900 rounded-lg shadow p-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            {submitted && <div className="text-green-600 dark:text-green-400 mt-2">Thank you for reaching out!</div>}
          </form>
        </div>
      </div>
    </section>
  );
} 