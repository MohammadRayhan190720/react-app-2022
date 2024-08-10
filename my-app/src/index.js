import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const todoTitle = "Call Family123520";
const todoDesc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate delectus provident voluptatum porro debitis vero vel expedita nihil pariatur?";
const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentday = date.getDate();

// const headingStyle = {
//   color: "white",
//   backgroundColor: "purple",
//   textAlign: "center",
//   fontSize : "3rem",
//   padding : "15px",
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <h1 style={{color : "green",backgroundColor: "gray",textAlign:"center"}}>TODO APP</h1>,  inline style */}
    {/* <h1 style = {headingStyle}>TODO APP</h1>  */}
    <h1 className="headingStyle">TODO APP</h1>
      <h3 className="titleStyle">{todoTitle}</h3>
      <p className="descStyle">{todoDesc}</p>
      <p className="footer">
        {currentday + "/" + currentMonth + "/" + currentYear}
      </p>
  </div>
);


