import React from "react";
import style from "./pg7.module.css";

const Page7Main = () => {
  return (
    <div className={style.pg7MainContainer}>
      <div className={style.pg7MainContent} id={style.pg7MainContent1}>
        <div className={style.pg7MainContent1Circle1}>
          <div className={style.pg7MainContent1Circle1Dot}></div>
        </div>
        <div className={style.pg7MainContent1Line1}></div>

        <div className={style.pg7MainContent1Circle2}>
          <div className={style.pg7MainContent1Circle2Dot}></div>
        </div>

        <div className={style.pg7MainContent1Line2}></div>

        <div className={style.pg7MainContent1Circle3}>
          <div className={style.pg7MainContent1Circle3Dot}></div>
        </div>
        <div className={style.pg7MainContent1Line3}></div>

        <div className={style.pg7MainContent1Circle4}>
          <div className={style.pg7MainContent1Circle4Dot}></div>
        </div>
      </div>
      <div className={style.pg7MainContent} id={style.pg7MainContent2}>
        <div className={style.pg7InnerContent}>
          <div className={style.pg7InnerContentLine1}></div>

          <div className={style.pg7InnerContentTxt}>
            <div className={style.pg7InnerContentHeading}>
              <h3>
                I WOULD LIKE TO SPEAK AT UPCOMING EVENTS, WHAT SHOULD I DO?
              </h3>
            </div>
            <div className={style.pg7InnerContentInnerTxt}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              rerum, nostrum provident beatae cumque eius esse hic, veniam
              aperiam excepturi reprehenderit lorem adipisci minima deserunt
              sapiente minus ipsum quis fuga. Quam?
            </div>
          </div>
        </div>
        <div className={style.pg7InnerContent}>
          <div className={style.pg7InnerContentLine1}></div>

          <div className={style.pg7InnerContentTxt}>
            <div className={style.pg7InnerContentHeading}>
              <h3>WHAT FORMS OF PAYMENT AVAILABLE? </h3>
            </div>
            <div className={style.pg7InnerContentInnerTxt}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              rerum, nostrum provident beatae cumque eius esse hic, veniam
              aperiam excepturi reprehenderit lorem adipisci minima deserunt
              sapiente minus ipsum quis fuga. Quam?
            </div>
          </div>
        </div>
        <div className={style.pg7InnerContent}>
          <div className={style.pg7InnerContentLine1}></div>

          <div className={style.pg7InnerContentTxt}>
            <div className={style.pg7InnerContentHeading}>
              <h3>
I WOULD LIKE SPECIAL PACKAGE FOR THE EMPLOYEES  MY COMPANY, WHAT SHOULD I DO?
              </h3>
            </div>
            <div className={style.pg7InnerContentInnerTxt}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              rerum, nostrum provident beatae cumque eius esse hic, veniam
              aperiam excepturi reprehenderit lorem adipisci minima deserunt
              sapiente minus ipsum quis fuga. Quam?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7Main;
