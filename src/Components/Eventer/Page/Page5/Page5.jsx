import React from 'react'
import style from "./pg5.module.css"
import HeaderPg5 from './HeaderPg5'
import Page5Main from './Page5Main'
const Page5 = () => {
  return (
    <div className={style.pg5Container} id='test'>
      <HeaderPg5/>
      <Page5Main/>
    </div>
  )
}

export default Page5

