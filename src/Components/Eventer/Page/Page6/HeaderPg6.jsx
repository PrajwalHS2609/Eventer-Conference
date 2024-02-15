import React from "react";
import style from "./pg6.module.css";
const HeaderPg6 = () => {
  return (
    <div className={style.pg6HeadingContainer}>
      <div className={style.pg6HeadingContent}>
        <div
          className={style.pg6HeadingInnerContent}
          id={style.pg6HeadingInnerContent1}
        >
          <div className={style.headerPg6Dot}></div>
          <div className={style.headerPg6Line1}></div>
          <div className={style.headerPg6Line2}></div>
          <div className={style.headerPg6Line3}></div>
        </div>
        <div
          className={style.pg6HeadingInnerContent}
          id={style.pg6HeadingInnerContent2}
        >
          <h1>Proudly sponsored by</h1>
        </div>
      </div>
      <div className={style.pg6HeadingContent} id={style.pg6HeadingContent2}>
        <div className={style.pg6HeadingText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolores facere libero velit quia laboriosam voluptates non debitis
          fugit quisquam illo, a, corrupti amet cupiditate doloremque accusamus
          eum atque error?
        </div>
      </div>
    </div>
  );
};

export default HeaderPg6;
