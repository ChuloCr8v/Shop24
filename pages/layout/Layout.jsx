import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from '../../components/NavBar'

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
        {children}
      <Footer />
    </div>
  );
};

export default Layout;
