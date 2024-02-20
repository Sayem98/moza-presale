import React from "react";
import { CrossIcon } from "../assets";

const ConnectWalletPopup = ({ setOpen }) => {
  return (
    <div className="connect-wallet-popup flex flex-col">
      <div className="hdr flex aic justify-end">
        <div
          className="cross-icon cursor-pointer"
          onClick={(e) => setOpen(false)}
        >
          <CrossIcon />
        </div>
      </div>
      <div className="wrap-block">
        <div className="wallet-card flex flex-col">
          <img src="./images/icon3.png" className="img" />
          <div className="lbl">Meta Mask</div>
        </div>
        <div className="wallet-card flex flex-col">
          <img src="./images/icon4.png" className="img" />
          <div className="lbl">Wallet Connect</div>
        </div>
        <div className="wallet-card flex flex-col">
          <img src="./images/icon1.png" className="img" />
          <div className="lbl">Binance Wallet</div>
        </div>
        <div className="wallet-card flex flex-col">
          <img src="./images/icon2.png" className="img" />
          <div className="lbl">Trust Wallet</div>
        </div>
      </div>
      <div className="action flex ">
        <div className="btn button">LEARN TO HOW TO CONNECT</div>
      </div>
    </div>
  );
};

export default ConnectWalletPopup;
