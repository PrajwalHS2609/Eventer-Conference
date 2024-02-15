import React from "react";
import style from "./page9.module.css";
const Page9Heading = () => {
  return (
    <div className={style.pg9HeadingContainer}>
      <div className={style.pg9HeadingContent}>
        <div
          className={style.pg9HeadingInnerContent}
          id={style.pg9HeadingInnerContent1}
        >
          <div className={style.headerPg9Dot}></div>
          <div className={style.headerPg9Line1}></div>
          <div className={style.headerPg9Line2}></div>
          <div className={style.headerPg9Line3}></div>
        </div>
        <div
          className={style.pg9HeadingInnerContent}
          id={style.pg9HeadingInnerContent2}
        >
          <h1>Prices</h1>
        </div>
      </div>
      <div className={style.pg9HeadingContent} id={style.pg9HeadingContent2}>
        <div className={style.pg9HeadingText} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolores facere libero velit quia laboriosam voluptates non debitis
          fugit quisquam illo, a, corrupti amet cupiditate doloremque accusamus
          eum atque error?
        </div>
      </div>
    </div>
  );
};

export default Page9Heading;
