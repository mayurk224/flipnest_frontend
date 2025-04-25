import React from "react";
import Navbar from "./components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="">
        Sidebar
      </div>
      <div className="w-full">
        <div className="">
            <Navbar/>
        </div>
        <div className="">
        {children}
        </div>
      </div>
      
    </div>
  );
};

export default Layout;
