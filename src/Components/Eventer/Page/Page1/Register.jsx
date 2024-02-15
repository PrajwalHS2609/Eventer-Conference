import React, { useRef, useState } from "react";
import style from "./page1.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faRocket,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  let nameRef = useRef();
  let userRef = useRef();
  let phoneRef = useRef();

  let [glow, setGlow] = useState(true);
  let handleGlow = (e) => {
    e.preventDefault();
    if ((e.target.name === "name") === glow) {
      setGlow(true);
      nameRef.current.style.boxShadow = "0px 0px 3px 2px sandybrown";
      userRef.current.style.boxShadow = "none";
      phoneRef.current.style.boxShadow = "none";
    } else if ((e.target.name === "user") === glow) {
      setGlow(true);
      nameRef.current.style.boxShadow = "none";
      userRef.current.style.boxShadow = "0px 0px 3px 2px sandybrown";
      phoneRef.current.style.boxShadow = "none";
    } else if ((e.target.name === "phone") === glow) {
      setGlow(true);
      nameRef.current.style.boxShadow = "none";
      userRef.current.style.boxShadow = "none";
      phoneRef.current.style.boxShadow = "0px 0px 3px 2px sandybrown";
    } else {
      setGlow(false);
      nameRef.current.style.boxShadow = "none";
      userRef.current.style.boxShadow = "none";
      phoneRef.current.style.boxShadow = "none";
    }
  };
  return (
    <div className={style.regContainer}>
      <div className={style.regContent} id={style.regContent1}>
        <span>- Register now and guarantee your seat! -</span>
      </div>
      <div className={style.regContent} id={style.regContent2}>
        <div className={style.item} ref={nameRef}>
          <div className={style.iconContainer}>
            <FontAwesomeIcon
              icon={faUser}
              className={style.icon}
            ></FontAwesomeIcon>
          </div>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            onClick={handleGlow}
          />
        </div>
        <div className={style.item} ref={userRef}>
          <div className={style.iconContainer}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={style.icon}
            ></FontAwesomeIcon>
          </div>
          <input
            type="text"
            placeholder="Your Email"
            name="user"
            onClick={handleGlow}
          />
        </div>
        <div className={style.item} ref={phoneRef}>
          <div className={style.iconContainer}>
            <FontAwesomeIcon
              icon={faPhone}
              className={style.icon}
            ></FontAwesomeIcon>
          </div>
          <input
            type="text"
            placeholder="Your Phone"
            name="phone"
            onClick={handleGlow}
          />
        </div>
      </div>
      <div className={style.regContent} id={style.regContent3}>
        <div className={style.regItem1}>
          <div className={style.regInnerContent}></div>
          <div className={style.innerRegItem}>
            <div className={style.iconContainer2}>
              <FontAwesomeIcon
                icon={faRocket}
                className={style.icon2}
              ></FontAwesomeIcon>
            </div>
            <div className={style.textContainer}>
              <span>REGISTER NOW</span>
            </div>
          </div>
        </div>
        <div className={style.regItem1}>
          <div className={style.regInnerContent}></div>
          <div className={style.innerRegItem}>
            <div className={style.iconContainer2}>
              <FontAwesomeIcon
                icon={faPlay}
                className={style.icon2}
              ></FontAwesomeIcon>
            </div>
            <div className={style.textContainer}>
              <span>WATCH VIDEO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
