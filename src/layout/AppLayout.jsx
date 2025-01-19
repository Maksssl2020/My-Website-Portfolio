import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import ParticlesBackground from "../components/background/ParticlesBackground.jsx";
import StickyNavBar from "../components/NavigationBar/StickyNavBar.jsx";

const AppLayout = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPositionY, setLastScrollPositionY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollPositionY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollPositionY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPositionY]);

  return (
    <div>
      <Header isVisible={isVisible} />
      <div className={"relative flex flex-col"}>
        {location.pathname === "/My-Website-Portfolio/" && (
          <StickyNavBar isVisible={isVisible} />
        )}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
