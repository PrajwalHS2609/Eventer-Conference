import React from "react";
import style from "./pg7.module.css";
import Page7Main from "./Page7Main";
import HeaderPg7 from "./HeaderPg7";
const Page7 = () => {
  return (
    <div className={style.pg7Container} id="faq">
      <HeaderPg7 />
      <Page7Main />
    </div>
  );
};

export default Page7;
