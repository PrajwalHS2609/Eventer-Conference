import React from "react";
import style from "./page9.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee,faTicket } from "@fortawesome/free-solid-svg-icons";
const Page9Main = () => {
  return (
    <div className={style.pg9MainContainer}>
      <div className={style.pg9MainContent}>
        <div className={style.pg9MainOuterContent}>
          <div className={style.pg9MainInnerContent}>
            <div className={style.pg9MainItemTicket}>
            <div className={style.pg9MainInnerItemTicket1}>
            <FontAwesomeIcon
                    icon={faTicket}
                    className={style.pg9MainTicketIcon}
                  ></FontAwesomeIcon>
            </div>
            <div className={style.pg9MainInnerItemTicket2}>
                <div className={style.pg9MainTicket2Text1}>REGISTER NOW!</div>
                <div className={style.pg9MainTicket2Text2}>just 1 click away! </div>
            </div>

            </div>
            <div className={style.pg9MainItem1}>
              <div className={style.pg9MainInnerItem11}>
                <h1>
                  <FontAwesomeIcon
                    icon={faIndianRupee}
                    className={style.pg9MainIcon}
                  ></FontAwesomeIcon>
                  500
                </h1>
              </div>
              <div className={style.pg9MainInnerItem12}>1X PERSON PASS</div>
            </div>
            <div className={style.pg9MainItem2}>
              <div className={style.pg9MainInnerItem21}>This Includes:</div>
              <div className={style.pg9MainInnerItem22}>
                <ul>
                  <li>free entrance</li>
                  <li>free checkout</li>
                  <li>1X speech listening</li>
                  <li>1X lunch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.pg9MainContent}>
        <div className={style.pg9MainOuterContent}>
          <div className={style.pg9MainInnerContent}>
            <div className={style.pg9MainItemTicket}>
            <div className={style.pg9MainInnerItemTicket1}>
            <FontAwesomeIcon
                    icon={faTicket}
                    className={style.pg9MainTicketIcon}
                  ></FontAwesomeIcon>
            </div>
            <div className={style.pg9MainInnerItemTicket2}>
                <div className={style.pg9MainTicket2Text1}>REGISTER NOW!</div>
                <div className={style.pg9MainTicket2Text2}>just 1 click away! </div>
            </div>
            </div>
            <div className={style.pg9MainItem1}>
              <div className={style.pg9MainInnerItem11}>
                <h1>
                  <FontAwesomeIcon
                    icon={faIndianRupee}
                    className={style.pg9MainIcon}
                  ></FontAwesomeIcon>
                  900
                </h1>
              </div>
              <div className={style.pg9MainInnerItem12}>2X PERSON PASS</div>
            </div>
            <div className={style.pg9MainItem2}>
              <div className={style.pg9MainInnerItem21}>This Includes:</div>
              <div className={style.pg9MainInnerItem22}>
                <ul>
                  <li>free entrance</li>
                  <li>free checkout</li>
                  <li>1X speech listening</li>
                  <li>1X lunch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.pg9MainContent}>
        <div className={style.pg9MainOuterContent}>
          <div className={style.pg9MainInnerContent}>
            <div className={style.pg9MainItemTicket}>
            <div className={style.pg9MainInnerItemTicket1}>
            <FontAwesomeIcon
                    icon={faTicket}
                    className={style.pg9MainTicketIcon}
                  ></FontAwesomeIcon>
            </div>
            <div className={style.pg9MainInnerItemTicket2}>
                <div className={style.pg9MainTicket2Text1}>REGISTER NOW!</div>
                <div className={style.pg9MainTicket2Text2}>just 1 click away! </div>
            </div>
            </div>
            <div className={style.pg9MainItem1}>
              <div className={style.pg9MainInnerItem11}>
                <h1>
                  <FontAwesomeIcon
                    icon={faIndianRupee}
                    className={style.pg9MainIcon}
                  ></FontAwesomeIcon>
                  1300
                </h1>
              </div>
              <div className={style.pg9MainInnerItem12}>1X PERSON VIP PASS</div>
            </div>
            <div className={style.pg9MainItem2}>
              <div className={style.pg9MainInnerItem21}>This Includes:</div>
              <div className={style.pg9MainInnerItem22}>
                <ul>
                  <li>free entrance</li>
                  <li>free checkout</li>
                  <li>free speech listening</li>
                  <li>free foods and drinks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9Main;
