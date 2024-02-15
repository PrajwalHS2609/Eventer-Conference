import React from "react";
import style from "./page3.module.css";
import Page3DayHeading from "./Page3DayHeading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";

const Page3Main = () => {
  
    return (
    <div className={style.pg3MainContainer}>
      <div className={style.pg3MainContent} id={style.pg3MainContent1}>
        <div className={style.pg3MainContent1Circle1}>
          <div className={style.pg3MainContent1Circle1Dot}></div>
        </div>
        <div className={style.pg3MainContent1Line1}></div>

        <div className={style.pg3MainContent1Circle2}>
          <div className={style.pg3MainContent1Circle2Dot}></div>
        </div>

        <div className={style.pg3MainContent1Line2}></div>

        <div className={style.pg3MainContent1Circle3}>
          <div className={style.pg3MainContent1Circle3Dot}></div>
        </div>
        <div className={style.pg3MainContent1Line3}></div>

        <div className={style.pg3MainContent1Circle4}>
          <div className={style.pg3MainContent1Circle4Dot}></div>
        </div>
        <div className={style.pg3MainContent1Line4}></div>

        <div className={style.pg3MainContent1Circle5}>
          <div className={style.pg3MainContent1Circle5Dot}></div>
        </div>
      </div>
      <div className={style.pg3MainContent} id={style.pg3MainContent2}>
        <BrowserRouter>
          <Page3DayHeading />
          <div
            className={style.pg3MainInnerContent}
            id={style.pg3MainInnerContent2}
          >
            <Routes>
              <Route path="/" element={<Day1 />} />
              <Route path="/day2" element={<Day2 />} />
              <Route path="/day3" element={<Day3 />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Page3Main;
