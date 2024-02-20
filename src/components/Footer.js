import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-comp flex flex-col aic jc">
      <div className="wrapWidth wrap flex aic flex-col">
        <div className="footer-hdr flex aic jc">
          <div className="left flex">
            <Link to={"/"}>
              <div className="app-logo flex aic cursor-pointer">
                <img src="./images/logo.png" className="logo-img " />
                <div className="logo-txt logo-font cfff">Barkley</div>
              </div>
            </Link>
          </div>
          <div className="footer-btm flex aic text-center">
            <div className="copy-right-txt">
              © 2022, Barkley Ltd. All Rights Reserved.
            </div>
          </div>
          {/* <div className="center flex aic jc flex-col text-center">
            <div className="social flex aic jc">
              <a
                href="https://t.me/Barkleychannel"
                target="_blank"
                className="icon"
              >
                <img src="./images/social/icon1.png" className="img" />
              </a>
              <a
                href="https://twitter.com/BarkleyMusic"
                target="_blank"
                className="icon"
              >
                <img src="./images/social/icon2.png" className="img" />
              </a>
              <a
                href="https://discord.com/channels/957029441832357889/957029442876735551"
                target="_blank"
                className="icon"
              >
                <img src="./images/social/icon3.png" className="img" />
              </a>
              <a
                href="https://www.instagram.com/Barkley.music/"
                target="_blank"
                className="icon"
              >
                <img src="./images/social/icon4.png" className="img" />
              </a>
              <a
                href="https://www.facebook.com/Barkleylabs/"
                target="_blank"
                className="icon"
              >
                <img src="./images/social/icon5.png" className="img" />
              </a>
            </div>
          </div> */}
          {/* <div className="right flex aic justify-end">
            <div className="action flex aic">
              <div className="btn button">WHITEPAPER</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
