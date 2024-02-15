import React from "react";
import style from "./pg7.module.css";
const HeaderPg7 = () => {
  return (
    <div className={style.pg7HeadingContainer}>
      <div className={style.pg7HeadingContent}>
        <div
          className={style.pg7HeadingInnerContent}
          id={style.pg7HeadingInnerContent1}
        >
          <div className={style.headerPg7Dot}></div>
          <div className={style.headerPg7Line1}></div>
          <div className={style.headerPg7Line2}></div>
          <div className={style.headerPg7Line3}></div>
        </div>
        <div
          className={style.pg7HeadingInnerContent}
          id={style.pg7HeadingInnerContent2}
        >
          <h1>Faq</h1>
        </div>
      </div>
      <div className={style.pg7HeadingContent} id={style.pg7HeadingContent2}>
        <div className={style.pg7HeadingText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolores facere libero velit quia laboriosam voluptates non debitis
          fugit quisquam illo, a, corrupti amet cupiditate doloremque accusamus
          eum atque error?
        </div>
      </div>
    </div>
  );
};

export default HeaderPg7;
