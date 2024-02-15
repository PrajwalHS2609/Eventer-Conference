import React from "react";
import style from "./page2.module.css";
import HeaderPg2 from "./HeaderPg2";
import Page2Main from './Page2Main';
const Page2 = () => {
  return (
    <div className={style.pg2Container} id="about">
      <HeaderPg2 />
      <Page2Main/>
    </div>
  );
};

export default Page2;
