import React from 'react'
import style from "./pg8.module.css"
const HeaderPg8 = () => {
  return (
    <div className={style.pg8HeadingContainer}>
    <div className={style.pg8HeadingContent}>
      <div
        className={style.pg8HeadingInnerContent}
        id={style.pg8HeadingInnerContent1}
      >
        <div className={style.headerPg8Dot}></div>
        <div className={style.headerPg8Line1}></div>
        <div className={style.headerPg8Line2}></div>
        <div className={style.headerPg8Line3}></div>
      </div>
      <div
        className={style.pg8HeadingInnerContent}
        id={style.pg8HeadingInnerContent2}
      >
        <h1>Blog</h1>
      </div>
    </div>
    <div className={style.pg8HeadingContent} id={style.pg8HeadingContent2}>
      <div className={style.pg8HeadingText} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        dolores facere libero velit quia laboriosam voluptates non debitis
        fugit quisquam illo, a, corrupti amet cupiditate doloremque accusamus
        eum atque error?
      </div>
    </div>
  </div>
  )
}

export default HeaderPg8
