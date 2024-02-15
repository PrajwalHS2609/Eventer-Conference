import React from "react";
import style from "./page2.module.css";
const HeaderPg2 = () => {
  return (
    <div className={style.headerPg2Container} >
      <div className={style.headerPg2Content}>
        <div className={style.headerPg2Item} id={style.headerPg2Item1}>
          <h1>Date:</h1>
        </div>
        <div className={style.headerPg2Item} id={style.headerPg2Item2}>
          <h3>june 4-8,2024</h3>
        </div>
      </div>
      <div className={style.headerPg2Content}>
        <div className={style.headerPg2Item} id={style.headerPg2Item1}>
          <h1>Location:</h1>
        </div>
        <div className={style.headerPg2Item} id={style.headerPg2Item2}>
          <h3>UB City,Bengaluru City</h3>
        </div>
      </div>
      <div className={style.headerPg2Content}>
        <div className={style.headerPg2Item} id={style.headerPg2Item1}>
          <h1>Remaining:</h1>
        </div>
        <div className={style.headerPg2Item} id={style.headerPg2Item2}>
          <h3>250 Tickets</h3>
        </div>
      </div>
      <div className={style.headerPg2Content}>
        <div className={style.headerPg2Item} id={style.headerPg2Item1}>
          <h1>Speakers:</h1>
        </div>
        <div className={style.headerPg2Item} id={style.headerPg2Item2}>
          <h3>28 Professional Speakers</h3>
        </div>
      </div>
    </div>
  );
};

export default HeaderPg2;
