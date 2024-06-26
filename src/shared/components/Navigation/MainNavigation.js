import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop.js";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openAndCloseDrawerHandler = () => {
    setDrawerIsOpen((prevDrawerIsOpen) => !prevDrawerIsOpen);
  };

  return (
    <React.Fragment>
      {/* this Backdrop component needs to be inserted before the SideDrawer
       ** and in this separate JSX expression */}
      {drawerIsOpen && <Backdrop onClick={openAndCloseDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={openAndCloseDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openAndCloseDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">PlacePicks</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
