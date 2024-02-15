import React from 'react'
import style from "./page10.module.css"

const HeaderPg10 = () => {
  return (
    <div className={style.pg10HeadingContainer} id='register'>
    <div className={style.pg10HeadingContent}>
      <div
        className={style.pg10HeadingInnerContent}
        id={style.pg10HeadingInnerContent1}
      >
        <div className={style.headerPg10Dot}></div>
        <div className={style.headerPg10Line1}></div>
        <div className={style.headerPg10Line2}></div>
        <div className={style.headerPg10Line3}></div>
      </div>
      <div
        className={style.pg10HeadingInnerContent}
        id={style.pg10HeadingInnerContent2}
      >
        <h1>Register Now</h1>
        <div className={style.pg10HeadingInnerContent2Underline}></div>
      </div>
    </div>
    <div className={style.pg10HeadingContent} id={style.pg10HeadingContent2}>
      <div className={style.pg10HeadingText} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        dolores facere libero velit quia laboriosam voluptates non debitis
        fugit quisquam illo, a, corrupti amet cupiditate doloremque accusamus
        eum atque error?
      </div>
    </div>
  </div>
  )
}

export default HeaderPg10
