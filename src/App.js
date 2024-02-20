/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import Main from "./Pages/Main";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
