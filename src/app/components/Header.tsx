import React from "react";

const Header = () => {
  return (
    <header>
      <h1 className="flex justify-center mt-8 text-4xl italic hover:not-italic font-black">
        Welcome to The Task Planner
      </h1>
      <nav>
        <ul className="mt-10 mx-6 rounded-md border-4">
          <div className="grid grid-cols-3 justify-between  ml-64">
            <li>
              <a
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
