import React from "react";
import JoinButton from "./ui/JoinButton/JoinButton";
import "@styles/Navbar.css";
import icon from "@assets/svg/desktop-header-logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="logged-out-header">
      <div className="left">
        <span>
          <img className="desktop-logo" src={icon} alt="" />
        </span>
      </div>
      <div className="right-buttons">
        <form className="search-wrapper">
          <input placeholder="Search" className="search-input" />
          <select defaultValue="All" className="select-search">
            <option>All</option>
            <option>Songs</option>
            <option>Photos</option>
            <option>Videos</option>
            <option>SFX</option>
          </select>
          <button className="search-button">
            <svg
              id="Layer_1"
              enable-background="new 0 0 50 50"
              version="1.1"
              viewBox="0 0 50 50"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              data-v-06911f12=""
            >
              <rect
                fill="none"
                height="50"
                width="50"
                data-v-06911f12=""
              ></rect>{" "}
              <circle
                cx="21"
                cy="20"
                fill="none"
                r="16"
                stroke="#fff"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
                data-v-06911f12=""
              ></circle>{" "}
              <line
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="4"
                x1="32.229"
                x2="45.5"
                y1="32.229"
                y2="45.5"
                data-v-06911f12=""
              ></line>
            </svg>
          </button>
        </form>
        <div className="nav-desktop">
          <Link to='/how-it-works'></Link>
        </div>
        <div className="nav-desktop"></div>
        <div className="login-buttons">
          <div className="login"></div>
          <div className="Join">
            <JoinButton text="Join Free" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
