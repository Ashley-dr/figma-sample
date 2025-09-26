/* eslint-disable @typescript-eslint/no-unused-vars */

import Navigation from "./components/Navigation";
import "./App.css";
import React from "react";
import logo from "./assets/logo.svg";
import landingbg1 from "./assets/firstbackground.svg";
import landingbg2 from "./assets/gradientgreen.svg";
import FirstLandingPage from "./components/FirstLandingPage";
import SecondLandingPage from "./components/SecondLandingPage";
import Footer from "./components/Footer";
const App: React.FC = () => {
  const handleLogin = () => alert("Login clicked!");
  return (
    <>
      <Navigation
        logoSrc={logo}
        navItems={[
          "Home",
          "How it Works",
          "Selfie Feed",
          "Testimonials",
          "Pricing",
        ]}
        onLogin={handleLogin}
      />
      <FirstLandingPage backgroundImage={landingbg1} />
      <SecondLandingPage backgroundImage={landingbg2} />
    </>
  );
};

export default App;
