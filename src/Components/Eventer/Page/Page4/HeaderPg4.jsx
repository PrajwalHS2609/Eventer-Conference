import React from 'react'
import style from "./pg4.module.css"
const HeaderPg4 = () => {
  return (
    <div className={style.pg4HeadingContainer}>
    <div className={style.pg4HeadingContent}>
      <div
        className={style.pg4HeadingInnerContent}
        id={style.pg4HeadingInnerContent1}
      >
        <div className={style.headerPg4Dot}></div>
        <div className={style.headerPg4Line1}></div>
        <div className={style.headerPg4Line2}></div>
        <div className={style.headerPg4Line3}></div>
      </div>
      <div
        className={style.pg4HeadingInnerContent}
        id={style.pg4HeadingInnerContent2}
      >
        <h1>Our Speakers</h1>
      </div>
    </div>
    <div className={style.pg4HeadingContent} id={style.pg4HeadingContent2}>
      <div className={style.pg4HeadingText} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        dolores facere libero velit quia laboriosam voluptates non debitis
        fugit quisquam illo, a, corrupti amet cupiditate doloremque accusamus
        eum atque error?
      </div>
    </div>
  </div>
  )
}

export default HeaderPg4
