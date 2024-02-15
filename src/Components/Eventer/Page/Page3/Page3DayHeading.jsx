import React from "react";
import style from "./page3.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Page3DayHeading = () => {
 return (
    <div className={style.pg3MainInnerContent} id={style.pg3MainInnerContent1}>
      <div className={style.pg3InnerContentHeading}>
        <FontAwesomeIcon
          icon={faCalendar}
          className={style.pg3MainIcon}
        ></FontAwesomeIcon>
        <Link to={"/"}>Day 1</Link>
      </div>
      <div className={style.pg3InnerContentHeading}>
        <FontAwesomeIcon
          icon={faCalendar}
          className={style.pg3MainIcon}
        ></FontAwesomeIcon>
        <Link to={"/day2"}>Day 2</Link>
      </div>
      <div className={style.pg3InnerContentHeading} id={style.day3}>
        <FontAwesomeIcon
          icon={faCalendar}
          className={style.pg3MainIcon}
        ></FontAwesomeIcon>
        <Link to={"/day3"}>Day 3</Link>
      </div>
    </div>
  );
};

export default Page3DayHeading;
