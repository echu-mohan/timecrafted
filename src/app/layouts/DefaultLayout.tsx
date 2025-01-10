import React, { ReactNode } from "react";
import Header from "../components/Header";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800 shadow-md font-sans">
      <Header />
      {children}
      <footer className=" grid justify-items-center mt-10 ">
        <p>&copy; 2025 My Application</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
