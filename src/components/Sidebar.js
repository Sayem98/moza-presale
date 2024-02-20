import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const navBarItems = [
    { lbl: "Home", slug: "/" },
    {
      lbl: "Favorites",
      slug: "/",
    },
    { lbl: "My Appointments", slug: "/" },
    { lbl: "About Us", slug: "/" },
    { lbl: "Rate Us", slug: "/" },
    { lbl: "Share", slug: "/" },
  ];

  useEffect(() => {
    document.body.addEventListener("click", () => {
      document.body.style.overflowY = "auto";
      setOpenSidebar(false);
    });
  }, []);

  return (
    <div
      className={`sidebar-s fixed rel anim ${openSidebar ? "show" : "hide"}`}
    >
      <div
        className={`side-block flex col anim ${openSidebar ? "show" : "hide"}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="hdr flex items-center justify-center">
          <div className="hdr-tag">Sidebar Header</div>
          <div
            className="icon-close flex aic jc"
            onClick={(e) => {
              setOpenSidebar(false);
            }}
          >
            {/* <CrossIcon /> */}
          </div>
        </div>
        <div>
          <div className="items flex aic flex-col">
            {navBarItems.map((item, index) => (
              <div
                className={`list-item flex `}
                onClick={(e) => {
                  setOpenSidebar(false);
                }}
              >
                {/* <div className="icon flex items-start justify-center mr-3">
                  {item.icon}
                </div> */}
                <div className="li cfff font">{item.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
