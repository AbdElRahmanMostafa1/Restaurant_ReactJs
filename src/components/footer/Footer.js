import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="aboutUs" className="footer p-2">
      <ul className="">
        <li>
          <a href="#">Register</a>
        </li>
        <li>
          <a href="#">Forum</a>
        </li>
        <li>
          <a href="#">Affilate</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>

      <ul className="social-media">
        <li>
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>

      <p className="pt-3">&copy; 2021. Foodera. All rights reserved.</p>
      <p className="">Made with 💝 by AbdElRahman Mostafa ElSayed</p>
    </footer>
  );
};

export default Footer;
