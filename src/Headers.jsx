import React from "react";
import logo from "./assets/logo.png";
import "./Headers.css";

function Headers() {
  return (
    <div className="headers">
      <div className="logo_box">
        <img className="logo_img" src={logo} alt="logo" />
        <span className="logo_title">Webzer Yazılım</span>
      </div>
      <div className="list-div">
        <ul className="list-ul">
          <li className="list-li">
            <a href="#" className="list-a">
              Anasayfa
            </a>
          </li>

          <li className="list-li">
            <a href="#" className="list-a">
              Hakkımızda
            </a>
          </li>

          <li className="list-li">
            <a href="#" className="list-a">
              İletişim
            </a>
          </li>

          <div className="dropdown-div">
            <ul className="dropdown-ul">
              <li className="dropdown-li">
                <a href="" className="dropdown-a"></a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Headers;
