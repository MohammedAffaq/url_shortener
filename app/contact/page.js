import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          We’d love to hear from you! Reach out through any of the platforms below.
        </p>

        <div className="flex flex-col gap-4">
          {/* Gmail */}
          <a
            href="mohammedaffaq1431@gmail.com"
            className="flex items-center justify-center gap-3 p-3 bg-red-50 hover:bg-red-100 rounded-xl text-red-600 transition"
          >
            <Mail size={20} />
            mohammedaffaq1431@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohammed-affaq-192675232/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl text-blue-700 transition"
          >
            <Linkedin size={20} />
            linkedin.com/in/mohammed-affaq
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MohammedAffaq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-800 transition"
          >
            <Github size={20} />
            github.com/MohammedAffaq
          </a>
        </div>

        <footer className="mt-10 text-sm text-gray-400">
          &copy; 2025 BitLinks. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;
