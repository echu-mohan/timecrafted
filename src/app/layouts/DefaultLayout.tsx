import React, { ReactNode } from "react";
import Header from "../components/Header";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <footer>
        <p>&copy; 2025 My Application</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
