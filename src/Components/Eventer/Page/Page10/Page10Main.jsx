import React, { useState } from "react";
import style from "./page10.module.css";
import "./Page10Span.css";
const Page10Main = () => {
  let [valid, setValid] = useState({
    name: "",
    email: "",
    phone: "",
  });
  let { name, email, phone } = valid;

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setValid({ ...valid, [name]: value });
  };
  let handleSend = (e) => {
    e.preventDefault();
    if (name === "") {
      document.querySelector(".span1").innerHTML = "this field is required";
      return false;
    } else if (!isNaN(name)) {
      document.querySelector(".span1").innerHTML = "name cannot be Number";
      return false;
    } else if (name.length <= 2) {
      document.querySelector(".span1").innerHTML =
        "name should be atleast  3 characters long";
      return false;
    } else {
      document.querySelector(".span1").style.display = "none";

      console.log(name);
    }
    if (email === "") {
      document.querySelector(".span2").innerHTML = "this field is required";
      return false;
    } else if (email.length <= 6) {
      document.querySelector(".span2").innerHTML = "this field is required";
      return false;
    } else {
      document.querySelector(".span2").style.display = "none";

      console.log(email);
    }
    if (phone === "") {
      document.querySelector(".span3").innerHTML = "this field is required";
      return false;
    } else if (isNaN(phone)) {
      document.querySelector(".span3").innerHTML = "this field is required";
      return false;
    } else if (phone.length <= 9) {
      document.querySelector(".span3").innerHTML = "this field is required";
      return false;
    } else {
      document.querySelector(".span3").style.display = "none";
      console.log(phone);
    }
  };

  return (
    <div className={style.pg10MainContainer} id="pg10MainContainer">
      <div className={style.pg10MainContent}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <span className="span1"></span>
      <div className={style.pg10MainContent}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <span className="span2"></span>

      <div className={style.pg10MainContent}>
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </div>
      <span className="span3"></span>

      <div className={style.pg10MainContent} id={style.pg10MainContent1}>
        <button onClick={handleSend}>SEND</button>
      </div>
    </div>
  );
};

export default Page10Main;
