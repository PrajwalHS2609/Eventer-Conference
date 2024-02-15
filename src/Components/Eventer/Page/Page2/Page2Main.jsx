import React from "react";
import style from "./page2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faRocket } from "@fortawesome/free-solid-svg-icons";
const Page2Main = () => {
  return (
    <div className={style.pg2MainContainer}>
      <div className={style.pg2MainContent}>
        <img
          src="http://dotrex.co/theme-preview/eventer/img/conference-about.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div className={style.pg2MainContent}>
        <div className={style.pg2MainItem} id={style.pg2MainItem1}>
          <h1>
            <div className={style.pg2MainContentDot}>
              <div className={style.pg2MainContentInnerDot}></div>
            </div>
            About the Conference
          </h1>
          <div className={style.pg2MainContentLine}></div>

          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            pariatur placeat nihil totam consequatur itaque quas sit quod
            consequuntur mollitia voluptate optio, dolorem velit excepturi dolor
            in. Itaque, libero assumenda?'Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam, eum quidem! Blanditiis repudiandae
            similique dignissimos impedit eligendi, veritatis, dolor maxime
            suscipit dolores delectus sapiente illum, repellendus aperiam. Nisi,
            vel perspiciatis!
          </span>
        </div>
        <div className={style.pg2MainItem} id={style.pg2MainItem2}>
          <div className={style.pg2MainBut1}>
            <div className={style.pg2MainButCover}></div>
            <div className={style.pg2MainInnerbut}>
              <FontAwesomeIcon
                icon={faCalendar}
                className={style.pg2MainIcon}
              ></FontAwesomeIcon>
              SEE EVENT SCHEDULE
            </div>
          </div>
          <div className={style.pg2MainBut2}>
            <div className={style.pg2MainButCover}></div>
            <div className={style.pg2MainInnerbut}>
              <FontAwesomeIcon
                icon={faRocket}
                className={style.pg2MainIcon}
              ></FontAwesomeIcon>
              REGISTER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2Main;
