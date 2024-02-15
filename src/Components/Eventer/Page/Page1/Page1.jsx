import React from "react";
import  style from "./page1.module.css"
import Heading from "./Heading";
import Ribbion from "./Ribbion";
import Register from "./Register";
const Page1 = () => {
  return (
    <div className={style.pg1Container}id="intro">
      <div className={style.innerContainer}>
      <Heading/>
      <Ribbion/>
      <Register/>
      </div>
    </div>
  );
};

export default Page1;
