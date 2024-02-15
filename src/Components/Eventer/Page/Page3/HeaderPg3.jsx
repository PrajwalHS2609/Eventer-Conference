import React from "react";
import style from "./page3.module.css";
const HeaderPg3 = () => {
  return (
    <div className={style.headerPg3Container}>
      <div className={style.headerPg3Content} id={style.headerPg3Content1}>
        <div className={style.headerPg3Dot}></div>
        <div className={style.headerPg3Line1}></div>
        <div className={style.headerPg3Line2}></div>
        <div className={style.headerPg3Line3}></div>
      </div>
      <div className={style.headerPg3Content} id={style.headerPg3Content2}>
        <h1>Event Schedule</h1>
      </div>
    </div>
  );
};

export default HeaderPg3;
