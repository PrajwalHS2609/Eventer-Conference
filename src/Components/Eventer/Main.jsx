import React from "react";
import Navbar from "./Nav/Navbar";
import "./Global.css";
import style from "./main.module.css";
import Page1 from "./Page/Page1/Page1";
import Page2 from "./Page/Page2/Page2";
import Page3 from "./Page/Page3/Page3";
import Page9 from "./Page/Page9/Page9";
import Page7 from "./Page/Page7/Page7";
import Page10 from "./Page/Page10/Page10";
import LastBlock from "./LastBlock/LastBlock";
import Page8 from "./Page/Page8/Page8";
import Page4 from "./Page/Page4/Page4";
import Page5 from "./Page/Page5/Page5";
import Page6 from "./Page/Page6/Page6";
const Main = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.mainBlock}></div>

      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
      <LastBlock />
    </div>
  );
};

export default Main;
