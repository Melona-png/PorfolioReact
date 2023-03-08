import React, { useState, useEffect } from "react";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function Main({ activePage, setActivePage }) {
  const renderPage = () => {
    if (activePage === "About") {
      return <About setActivePage={setActivePage} />;
    } else if (activePage === "Projects") {
      return <Projects />;
    } else if (activePage === "Contact") {
      return <Contact />;
    }
  };

  return renderPage();
}
