import React from "react";
import style from "./page1.module.css";
const Heading = () => {
  return (
    <div className={style.headingContainer} >
      <div className={style.headingLogoContainer}>
        <img src="/Pics/job_logo3.png" alt="" />
      </div>
      <div className={style.heading1Container}>
        <div className={style.headingTxt1}>
          <h1>eventer</h1>
        </div>
        <div className={style.headingTxt2}>
          <h1>GLOBAL CONFERENCE</h1>
        </div>
      </div>
    </div>
  );
};

export default Heading;
