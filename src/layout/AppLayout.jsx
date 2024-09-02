import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
