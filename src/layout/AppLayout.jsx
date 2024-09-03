import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import ParticlesBackground from "../components/background/ParticlesBackground.jsx";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <ParticlesBackground />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
