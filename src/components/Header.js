import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Countdown from "react-countdown";
import ConnectWalletPopup from "./ConnectWalletPopup";

const Header = ({ openSidebar, setOpenSidebar }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-camp flex">
      <div className="wrapWidth wrap flex items-center">
        <div className="left flex items-center">
          <Link to={"/"}>
            <div className="app-logo flex aic cursor-pointer">
              <img src="./images/logo.png" className="logo-img " />
              <div className="logo-txt logo-font cfff">Barkley</div>
            </div>
          </Link>
        </div>

        <div className="right flex items-center justify-end">
          <div className="actions flex aic">
            <a href="#howBuy" className="btn button">
              HOW TO BUY Barkley
            </a>
            <div className="btn button" onClick={(e) => setOpen(true)}>
              CONNECT WALLET
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ConnectWalletPopup setOpen={setOpen} />
      </Modal>
    </div>
  );
};

export default Header;
