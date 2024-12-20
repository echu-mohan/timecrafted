import React, { ReactNode } from "react";
import Header from "../components/Header";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="bg-red-100 text-black">
      <Header />
      {children}
      <footer className=" grid justify-items-center mt-10 ">
        <p>&copy; 2025 My Application</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
