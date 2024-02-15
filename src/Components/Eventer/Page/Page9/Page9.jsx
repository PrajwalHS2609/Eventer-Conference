import React from 'react'
import  style from "./page9.module.css"
import Page9Heading from './Page9Heading'
import Page9Main from './Page9Main'
const Page9 = () => {
  return (
    <div className={style.pg9Container} id='price'>
      <Page9Heading/>
      <Page9Main/>
    </div>
  )
}

export default Page9

