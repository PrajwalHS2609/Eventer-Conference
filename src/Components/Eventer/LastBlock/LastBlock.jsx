import React from "react";
import style from "./lastblock.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const LastBlock = () => {
  return (
    <div className={style.lastBlockContainer}>
      <div className={style.lastBlockContent} id={style.lastBlockContent1}>
        <h2>"The power of imagination makes us infinite" - John Muir</h2>
      </div>
      <div className={style.lastBlockContent} id={style.lastBlockContent2}>
        <div className={style.lastBlockInnerContent}>
          <div id={style.iconBlock}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={style.lastBlockIcon}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={style.lastBlockInnerContent}>
          <div id={style.iconBlock}>
            <FontAwesomeIcon
              icon={faFacebook}
              className={style.lastBlockIcon}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={style.lastBlockInnerContent}>
          <div id={style.iconBlock}>
            <FontAwesomeIcon
              icon={faXTwitter}
              className={style.lastBlockIcon}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={style.lastBlockInnerContent}>
          <div id={style.iconBlock}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className={style.lastBlockIcon}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={style.lastBlockInnerContent}>
          <div id={style.iconBlock}>
            <FontAwesomeIcon
              icon={faYoutube}
              className={style.lastBlockIcon}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBlock;
