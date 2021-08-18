import React from "react";

const footerstyle= {
  position: "fixed!important",
  left: "0!important",
  bottom: "0!important",
  width: "100%",
  backgroundcolor: "red",
  color: "white",
  textalign: "center",
}
export default function Footer() {
  return (
    <footer className="main-footer"  style={{footerstyle}}>
      <div className="footer-left">
        Copyright & copy; 2021 <div className="bullet" /> Design By{" "}
        <a href="https://samarlifejourney.blogspot.com/"> Samar Jeet Singh </a>{" "}
      </div>{" "}
      <div className="footer-right fixed-bottom"> 2.3 .0 </div>{" "}
    </footer>
  );
}
