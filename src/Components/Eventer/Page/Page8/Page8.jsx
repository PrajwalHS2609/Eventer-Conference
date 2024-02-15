import React from 'react'
import style from "./pg8.module.css"
import HeaderPg8 from './HeaderPg8'
import Page8Main from './Page8Main'

const Page8 = () => {
  return (
    <div className={style.pg8Container} id='blog'>
      <HeaderPg8/>
      <Page8Main/>
    </div>
  )
}

export default Page8
