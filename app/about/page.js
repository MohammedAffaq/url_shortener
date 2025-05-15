import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-purple-100 p-6 flex items-center justify-center">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About BitLinks</h1>
        <p className="text-gray-600 mb-6">
          <strong>BitLinks</strong> is your go-to tool for shortening, tracking, and managing links with ease.
          Whether you are a creator, marketer, or business owner, BitLinks helps you simplify your URLs and supercharge your campaigns.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2">🚀 Features</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
          <li>Shorten long URLs instantly</li>
          <li>Track clicks and user insights in real time</li>
          <li>Create branded and customized short links</li>
          <li>Organize and manage your links in one dashboard</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2">👥 Who It is For</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
          <li>Marketers optimizing campaigns</li>
          <li>Content creators sharing links across platforms</li>
          <li>Startups and brands building awareness</li>
          <li>Developers integrating link tools via API</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2">🎯 Our Mission</h2>
        <p className="text-gray-600 mb-6">
          To empower individuals and teams with smart, secure, and insightful link tools that drive performance and simplify communication online.
        </p>

        <footer className="text-sm text-gray-400 text-center pt-4 border-t">
          &copy; 2025 BitLinks. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
