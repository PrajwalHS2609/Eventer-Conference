import React from 'react'
import style from "./pg6.module.css"
import HeaderPg6 from './HeaderPg6'
import Page6Main from './Page6Main'
const Page6 = () => {
  return (
    <div className={style.pg6Container} id='sponsor'>
      <HeaderPg6/>
      <Page6Main/>
    </div>
  )
}

export default Page6
