import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Countdown from "react-countdown";
import ConnectWalletPopup from "./ConnectWalletPopup";
import { useDisconnect, useWeb3Modal } from "@web3modal/ethers/react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const Header = ({ openSidebar, setOpenSidebar }) => {
  // const [open, setOpen] = useState(false);

  const { open } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  return (
    <div className="header-camp flex">
      <div className="wrapWidth wrap flex items-center">
        <div className="left flex items-center">
          <Link to={"/"}>
            <div className="app-logo flex aic cursor-pointer">
              <img src="./images/logo.png" alt="LOGO" className="logo-img " />
              <div className="logo-txt logo-font cfff">Barkley</div>
            </div>
          </Link>
        </div>

        <div className="right flex items-center justify-end">
          <div className="actions flex aic">
            <a href="#howBuy" className="btn button">
              HOW TO BUY Barkley
            </a>

            <div
              className="btn button"
              onClick={
                isConnected
                  ? () => open({ view: "Account" })
                  : () => open({ view: "Connect" })
              }
            >
              {isConnected
                ? address.slice(0, 6) + "..." + address.slice(-4)
                : "Connect Wallet"}
            </div>
          </div>
        </div>
      </div>
      {/* <Modal open={open} onClose={() => setOpen(false)}>
        <ConnectWalletPopup setOpen={setOpen} />
      </Modal> */}
    </div>
  );
};

export default Header;
