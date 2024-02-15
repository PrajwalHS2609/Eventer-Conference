import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
// import style from "./nav.module.css";
import "./navbar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page2 from "./../Page/Page2/Page2";
import Page1 from "../Page/Page1/Page1";
import Page3 from "./../Page/Page3/Page3";
import Page4 from "./../Page/Page4/Page4";
import Page5 from "./../Page/Page5/Page5";
import Page6 from "./../Page/Page6/Page6";
import Page7 from "./../Page/Page7/Page7";
import Page8 from "./../Page/Page8/Page8";
import Page9 from "./../Page/Page9/Page9";
import Page10 from "./../Page/Page10/Page10";
const Navbar = () => {
  let [scroll, setScroll] = useState(false);

  let changeColor = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={scroll ? "navContainer" : "navContainer1"}>
      <Logo />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/#intro" element={<Page1 />} />
          <Route path="/#about" element={<Page2 />} />
          <Route path="/#schedule" element={<Page3 />} />
          <Route path="/#speaker" element={<Page4 />} />
          <Route path="/#test" element={<Page5 />} />
          <Route path="/#sponsor" element={<Page6 />} />
          <Route path="/#faq" element={<Page7 />} />
          <Route path="/#blog" element={<Page8 />} />
          <Route path="/#price" element={<Page9 />} />
          <Route path="#register" element={<Page10 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
