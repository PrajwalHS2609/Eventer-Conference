import React from 'react'
import style from "./page3.module.css"
import HeaderPg3 from './HeaderPg3'
import Page3Main from './Page3Main'
const Page3 = () => {
  return (
    <div className={style.pg3Container} id='schedule'>
      <HeaderPg3/>
      <Page3Main/>
    </div>
  )
}

export default Page3
