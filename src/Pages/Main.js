import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import { AddIcon } from "../assets";

import HorizontalSlider from "../components/HorizontalSlider";
const Main = () => {
  const [open, setOpen] = useState(false);
  const countdowntime = 1662327598221;
  const whitelistcountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <ul className="app-timer js-app-timer flex">
          <li className="app-timer__item">
            <span className="app-timer__value js-timer-days">0</span>
            <h3 className="app-timer__title">Days</h3>
          </li>
          <li className="app-timer__item">
            <span className="app-timer__value js-timer-hours">0</span>
            <h3 className="app-timer__title">Hours</h3>
          </li>
          <li className="app-timer__item">
            <span className="app-timer__value js-timer-minutes">0</span>
            <h3 className="app-timer__title">Minutes</h3>
          </li>
          <li className="app-timer__item">
            <span className="app-timer__value js-timer-seconds">0</span>
            <h3 className="app-timer__title">Seconds</h3>
          </li>
        </ul>
      );
    } else {
      // Render a countdown
      return (
        <ul className="app-timer js-app-timer flex">
          <li className="app-timer__item">
            <span className="app-timer__value js-timer-days">{days}</span>
            <h3 className="app-timer__title">Days</h3>
          </li>
          <li className="app-timer__item">
            <span className="app-timer__value js-timer-hours">{hours}</span>
            <h3 className="app-timer__title">Hours</h3>
          </li>
          <li className="app-timer__item">
            <span className="app-timer__value js-timer-minutes">{minutes}</span>
            <h3 className="app-timer__title">Minutes</h3>
          </li>
          <li className="app-timer__item">
            <span className="app-timer__value js-timer-seconds">{seconds}</span>
            <h3 className="app-timer__title">Seconds</h3>
          </li>
        </ul>
      );
    }
  };

  return (
    <div className="landing-page flex flex-col">
      <div className="page-content flex flex-col s-50">
        <div className="hero-sec flex">
          <div className="bg"></div>
          <div className="wrap wrapWidth flex">
            <div className="_block flex">
              <div className="left-side flex flex-col">
                <div className="slogan">
                  <div className="tag1">
                    <span className="logo-font">Barkley</span> PRE-SALE, BUY NOW
                  </div>
                </div>
                <div className="page-desc">
                  <span className="logo-font">Barkley</span> is a new meme coin
                  with real utility via our Chat-To-Earn and{" "}
                  <span className="logo-font">Barkley</span> pay app which comes
                  with your very own NFT that grows over time, which can be
                  customised via the <span className="logo-font">Barkley</span>{" "}
                  store. You can buy directly using either BNB, BUSD, or USDT
                  already in your wallet, if not please deposit. Once purchased
                  you will need to add the token to your wallet using the custom
                  token or import token option in your wallet and add the
                  following contract address below
                </div>
                <div className="token-box flex items-center">
                  <div className="token-id">
                    0xeDc1b4851aA96F27e627311aF9366eE1695361cd{" "}
                  </div>
                </div>
                <div className="page-desc">
                  Full instructions are below. To get started hit the connect
                  wallet button to buy (we recommend MetaMask on your mobile,
                  BSC Chain Wallet, & Wallet Connect on your desktop).
                </div>
                <div className="left-info flex">
                  <div className="info-le flex flex-col">
                    <div className="token-price">
                      1 BUSD = 100 <span className="logo-font">bark</span>
                    </div>
                    <div className="token-price">PHASE 1 - 50,000,000</div>
                    <div className="token-numb-sec flex aic">
                      <div className="numb">50,000,000</div>
                      <div className="lbl">Barkley'S REMAINING</div>
                    </div>
                  </div>
                </div>
                <>
                  <HorizontalSlider />
                </>
              </div>
              <div className="right-side flex flex-col">
                <div className="right-side-box flex flex-col">
                  <div className="box-tag">EXCHANGE</div>
                  <div className="box-desc">Please select a currency</div>
                  <div className="exchange-box flex flex-col">
                    <div className="currency-box flex flex-col">
                      <div className="currency-types flex items-center">
                        <div className="c-left flex">
                          <div className="token-items flex aic">
                            <div className="token-info flex flex-col aic">
                              <img src="./images/icon5.png" className="icon" />
                              <div className="token-lbl">BNB</div>
                              <input type="radio" className="radio-btn" />
                            </div>
                            <div className="token-info flex flex-col aic">
                              <img src="./images/icon6.png" className="icon" />
                              <div className="token-lbl">BUSD</div>
                              <input type="radio" className="radio-btn" />
                            </div>
                            <div className="token-info flex flex-col aic">
                              <img src="./images/icon7.png" className="icon" />
                              <div className="token-lbl">USDT</div>
                              <input type="radio" className="radio-btn" />
                            </div>
                          </div>
                        </div>
                        <div className="c-right flex justify-end">
                          <div className="field flex flex-col">
                            <div className="field-lbl">AMOUNT</div>
                            <input
                              type="number"
                              className="txt cleanbtn"
                              placeholder="AMOUNT"
                              // value="000"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="currency-types flex items-center">
                        <div className="c-left flex">
                          <div className="token-items flex aic">
                            <div className="our-token flex aic">
                              <img src="./images/logo.png" className="logo" />
                              <div className="our-token-lbl">bark </div>
                            </div>
                          </div>
                        </div>
                        <div className="c-right flex justify-end">
                          <div className="field flex flex-col">
                            <div className="field-lbl">RECIEVED</div>
                            <input
                              type="number"
                              className="txt cleanbtn"
                              placeholder="RECIEVED"
                              value="000"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn button">CONVERTNOW</div>
                </div>

                <div className="info-box flex flex-col">
                  <div className="info-top flex aic justify-between">
                    <img src="./images/logo.png" className="logo" />
                    <div className="box-tag">
                      <span className="logo-font">Barkley</span> PURCHASED
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="box-numb">123,945</div>
                  </div>
                </div>
              </div>
              <div className="img flex">
                <img src="./images/dog.png" className="dog-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="page-meta wrapWidth flex flex-col">
          <div id="howBuy" className="how-buy-sec flex flex-col">
            <div className="slogan flex aic jc">
              <div className="tag1">HOW TO BUY</div>
              <div className="logo-font ml-4">Barkley</div>
            </div>
            <div className="how-buy-info flex">
              <div className="how-buy-left flex">
                <div className="steps flex flex-col">
                  <div className="step-tag">STEP 1 - CONNECT WALLET</div>
                  <div className="step-dec">
                    To begin, you will need to connect your wallet. Make sure
                    you have a MetaMask, Binance Smart Chain, Trust Wallet, or
                    Wallet connect installed on your browser, or mobile then
                    choose which wallet you would like to connect to.
                  </div>
                  <br />
                  <div className="step-dec">
                    Purchasing on a desktop browser will give you a smoother
                    purchasing experience. For this, we recommend Metamask,
                    Binance Smart Chain, or Wallet Connect, and if using Meta
                    Mask make sure you select the Binance Smart Chain network.
                    If you are purchasing on mobile, we recommend using Trust
                    Wallet and connecting through the in-built browser (just
                    copy{" "}
                    <a
                      href="www.theBarkley.io"
                      target="_blank"
                      className="mx-3 underline"
                    >
                      www.theBarkley.io
                    </a>{" "}
                    into the Trust Wallet Browser)
                  </div>
                </div>
              </div>
              <div className="how-buy-right flex aic jc">
                <img src="./images/bg-2.jpg" className="img" />
              </div>
            </div>
            <div className="how-buy-info flex flex-col mt-16">
              <div className="how-buy-left flex">
                <div className="steps flex flex-col">
                  <div className="step-tag">STEP 2 - BUY Barkley</div>
                  <br />
                  <div className="step-dec">
                    Once you have selected your preferred wallet provider click
                    “Connect Wallet” and select the appropriate option. For the
                    mobile wallet app, you will need to select “Wallet Connect”.
                  </div>
                  <br />
                  <div className="step-dec">
                    You will then have 3 options which you can by{" "}
                    <span className="logo-font">Barkley</span>
                  </div>
                </div>
              </div>
              <div className="token-types-block">
                <div className="card flex flex-col">
                  <div className="card-tag">BUY WITH BUSD</div>
                  <img src="./images/icon6.png" className="icon" />
                  <div className="card-desc">
                    Please ensure you have at least $50 of BUSD in your wallet
                    before commencing the transaction. Type in the amount of
                    BUSD you wish to use for the purchase, it will then show the
                    <span className="logo-font"> Barkley</span> you will receive
                    in the box below then Click “Convert BUSD. You will then be
                    asked to approve the purchase TWICE. The first approval is
                    for the BUSD contract and the second is for the transaction
                    amount. Please ensure you go through both approval steps in
                    order to complete the transaction.
                  </div>
                </div>
                <div className="card flex flex-col">
                  <div className="card-tag">BUY WITH BNB</div>
                  <img src="./images/icon5.png" className="icon" />
                  <div className="card-desc">
                    You will need a minimum of 0.5 BNB in your wallet to use
                    this option. Once you have sufficient BNB in your wallet
                    Type in the number of ORBS you wish to purchase and then
                    click “Convert BNB”. Your wallet provider will ask you to
                    confirm the transaction and will also show you the cost of
                    gas.
                  </div>
                </div>
                <div className="card flex flex-col">
                  <div className="card-tag">BUY WITH USDT</div>
                  <img src="./images/icon7.png" className="icon" />
                  <div className="card-desc">
                    Please ensure you have at least $50 of USDT in your wallet
                    before commencing the transaction. Type in the amount of
                    USDT you wish to use for the purchase, it will then show the
                    <span className="logo-font"> Barkley</span> you will receive
                    in the box below then Click “Convert USDT. You will then be
                    asked to approve the purchase TWICE. The first approval is
                    for the USDT contract and the second is for the transaction
                    amount. Please ensure you go through both approval steps in
                    order to complete the transaction.
                  </div>
                </div>
              </div>
            </div>
            <div className="how-buy-info flex flex-col mt-16">
              <div className="how-buy-left flex">
                <div className="steps flex flex-col">
                  <div className="step-tag">
                    STEP 3 - ADD ORBS TOKEN TO YOUR WALLET
                  </div>
                  <br />
                  <div className="step-dec">
                    Once you have purchased your{" "}
                    <span className="logo-font">Barkley</span> you will then
                    need to add the token information to your wallet so they are
                    visible. To do this do the following.
                  </div>
                  <br />
                  <div className="step-dec">
                    1. Go to your wallet that you connected to buy your{" "}
                    <span className="logo-font">Barkley</span> and login
                  </div>
                  <div className="step-dec">
                    2. Once login on you will need to add the token, depending
                    on the wallet you used you will need to find the section
                    that allows you to import a token (metamask) or add a custom
                    asset (binance smart chain). example screens below.
                  </div>
                  <div className="step-dec">
                    3. Once you have found the screen all you need to do is copy
                    and paste the contract address which is :
                    <span className="token-id b6 s-30">
                      0xeDc1b4851aA96F27e627311aF9366eE1695361cd
                    </span>{" "}
                    in the contract address field then click the add token
                    button. Once done your token will appear in your wallet.
                  </div>
                </div>
              </div>
              <div className="images-block flex items-start justify-center">
                <div className="token-types-block2">
                  <div className="card flex flex-col">
                    <div className="card-tag">META MASK</div>
                    <img src="./images/tab1.jpg" className="tab-img" />
                  </div>
                  <div className="card flex flex-col">
                    <div className="card-tag">BSC</div>
                    <img src="./images/tab2.jpg" className="tab-img" />
                  </div>
                  <div className="card flex flex-col">
                    <div className="card-tag">TRUST WALLET</div>
                    <img src="./images/tab3.jpeg" className="tab-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="how-buy-info flex flex-col mt-16">
              <div className="how-buy-left flex">
                <div className="steps flex flex-col">
                  <div className="step-tag">Barkley CONTRACT INFORMATION</div>
                  <br />
                  <div className="step-dec">
                    Use the contract information below to add the Barkley token
                    to your wallet.
                  </div>
                  <br />
                  <div className="step-dec">
                    Address:
                    <a href="/" className="token-id mx-3 underline">
                      {" "}
                      0xeDc1b4851aA96F27e627311aF9366eE1695361cd
                    </a>
                  </div>
                  <div className="step-dec">Decimals: 9</div>
                  <div className="step-dec">Token symbol: Barkley</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        {/* <SelectToken setOpen={setOpen} setSelectedToken={setSelectedToken} /> */}
      </Modal>
    </div>
  );
};

export default Main;
