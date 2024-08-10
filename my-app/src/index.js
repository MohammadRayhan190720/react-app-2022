import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';






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
    {/* <h1 className="headingStyle">TODO APP</h1>
    < Card />
    < Card />
    */}
    < App />
    
  
  </div>
);


