import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-white to-blue-50 text-gray-800 shadow-md">
      <div className="py-6 text-center">
        <h1 className="text-4xl font-extrabold">Welcome to The Task Planner</h1>
        <p className="mt-2 text-lg text-gray-700">
          Plan, Organize, and Achieve Your Goals
        </p>
      </div>

      <nav className="mt-6">
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              className="text-lg font-medium text-black hover:text-red-600 transition-all"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-lg font-medium text-black hover:text-red-600 transition-all"
              href="/about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-lg font-medium text-black hover:text-red-600 transition-all"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
