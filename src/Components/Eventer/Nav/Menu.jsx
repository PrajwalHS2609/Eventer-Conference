import React from "react";
import style from "./nav.module.css";
import { HashLink as Link } from "react-router-hash-link";
const Menu = () => {
  return (
    <div className={style.menuContainer}>
      <div className={style.menuContent}>
        <div className={style.line1}></div>
        <span className={style.menuContentSpan}>
          <Link to="#intro">INTRO</Link>
        </span>

        <div className={style.line2}></div>
      </div>
      <div className={style.menuContent}>
        <div className={style.line1}></div>
        <span className={style.menuContentSpan}>
          <Link to="#about">ABOUT</Link>
        </span>
        <div className={style.line2}></div>
      </div>
      <div className={style.menuContent}>
        <div className={style.line1}></div>
        <span className={style.menuContentSpan}>
          <Link to="#schedule">SCHEDULE</Link>
        </span>
        <div className={style.line2}></div>
      </div>
      <div className={style.menuContent}>
        <div className={style.line1}></div>
        <span className={style.menuContentSpan}>
          <Link to="#speaker">SPEAKERS</Link>
        </span>
        <div className={style.line2}></div>
      </div>
      <div className={style.menuContent}>
        <div className={style.line1}></div>
        <span className={style.menuContentSpan}>
          <Link to="#test">TESTIMONIALS</Link>
        </span>
        <div className={style.line2}></div>
      </div>
      <div className={style.menuContent}>
        <div className={style.line1}></div>
        <span className={style.menuContentSpan}>
          <Link to="#sponsor">SPONSORS</Link>
        </span>
        <div className={style.line2}></div>
      </div>
      <div className={style.menuContent}>
        <div className={style.line1}></div>
        <span className={style.menuContentSpan}>
          <Link to="#blog">BLOG</Link>
        </span>
        <div className={style.line2}></div>
      </div>
      <div className={style.menuContent}>
        <div className={style.line1}></div>
        <span className={style.menuContentSpan}>
          <Link to="#faq">FAQ</Link>
        </span>
        <div className={style.line2}></div>
      </div>
      <div className={style.menuContent}>
        <div className={style.line1}></div>
        <span className={style.menuContentSpan}>
          <Link to="#price">PRICES</Link>
        </span>
        <div className={style.line2}></div>
      </div>
      <div className={style.menuContent}>
        <div className={style.line1}></div>
        <span className={style.menuContentSpan}>
          <Link to="#register">REGISTER</Link>
        </span>

        <div className={style.line2}></div>
      </div>
    </div>
  );
};

export default Menu;
