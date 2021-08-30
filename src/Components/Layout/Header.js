import React from "react";
import { Fragment } from "react-is";
import mealsImage from "../../assets/1.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>IceCreamShop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="ice-cream" />
      </div>
    </Fragment>
  );
};
export default Header;
