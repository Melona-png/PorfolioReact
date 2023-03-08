import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./NavTabs";
import Main from "./Main";
import Footer from "./Footer";

export default function Container() {
  const [activePage, setActivePage] = useState("About");

  return (
    <div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <Main activePage={activePage} setActivePage={setActivePage} />
      <Footer />
    </div>
  );
}
