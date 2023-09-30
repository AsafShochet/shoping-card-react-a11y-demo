import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";
import memoryImg from "../../images/memory.png";

export default function Footer() {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <span onClick={handelToTop} className="go_top">
        <FaArrowUp />
      </span>
      <div className="footer_first">
        <img src={memoryImg} alt="Memory Game" />
        <div className="footer_btn_title_box">
          <p>Try out this nice memory game</p>
          <a
            target={"_blank"}
            href="https://mohammadyousefvand.github.io/Memory-Card-Game/"
            className="btn_link_to_game"
            rel="noreferrer"
          >
            Go{" "}
          </a>
          <a
            target={"_blank"}
            href="https://github.com/mohammadyousefvand/Memory-Card-Game"
            className="btn_link_to_game"
            rel="noreferrer"
          >
            سورس کد
          </a>
        </div>
      </div>
      <div className="footer_last">
        <span>Quick Access</span>
        <div className="footer_link_box">
          <Link to={"/basket"}>Cart</Link>
          <Link to={"/favorite"}>Favorites</Link>
          <Link to={"/coupons"}>Crazy Coupons</Link>
          <a
            target={"_blank"}
            href="https://github.com/mohammadyousefvand/Shoping-card-react"
            rel="noreferrer"
          >
            View source on Github
          </a>
        </div>
      </div>
    </footer>
  );
}
