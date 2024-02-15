import React from 'react'
import  style from "./pg5.module.css"
const HeaderPg5 = () => {
  return (
    <div className={style.pg5HeadingContainer}>
    <div className={style.pg5HeadingContent}>
      <div
        className={style.pg5HeadingInnerContent}
        id={style.pg5HeadingInnerContent1}
      >
        <div className={style.headerPg5Dot}></div>
        <div className={style.headerPg5Line1}></div>
        <div className={style.headerPg5Line2}></div>
        <div className={style.headerPg5Line3}></div>
      </div>
      <div
        className={style.pg5HeadingInnerContent}
        id={style.pg5HeadingInnerContent2}
      >
        <h1>Testimonials</h1>
      </div>
    </div>
    <div className={style.pg5HeadingContent} id={style.pg5HeadingContent2}>
      <div className={style.pg5HeadingText} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        dolores facere libero velit quia laboriosam voluptates non debitis
        fugit quisquam illo, a, corrupti amet cupiditate doloremque accusamus
        eum atque error?
      </div>
    </div>
  </div>
  )
}

export default HeaderPg5
