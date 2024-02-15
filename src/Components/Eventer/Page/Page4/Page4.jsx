import React from 'react'
import style from "./pg4.module.css"
import HeaderPg4 from './HeaderPg4'
import Page4Main from './Page4Main'
const Page4 = () => {
  return (
    <div className={style.pg4Container} id='speaker'>
      <HeaderPg4/>
      <Page4Main/>
    </div>
  )
}

export default Page4
