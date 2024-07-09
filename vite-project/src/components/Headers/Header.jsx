import React, { useEffect, useState } from "react";
import Classes from "../../sass/Headers.module.scss";
import {
  Ruvid,
  Search,
  Cart,
  Back,
  VectorOne,
  Vector,
  Ebun,
  NotificationIcon,
} from "../../components/export/Export";

const Header = ({ setCartIsShown, isMobile, setshowCart, setShowCart }) => {
  const toggleCart = () => {
    setShowCart((prevValue) => !prevValue);
    setCartIsShown((prevValue) => !prevValue);
  };

  return (
    <>
      <header className={Classes["ruvid-store-header"]}>
        <img src={Ruvid} alt="Ruvid Store Logo" className={Classes.logo} />
        {setshowCart && isMobile ? (
          <h1 className={Classes.cartText}>Cart</h1>
        ) : (
          <div className={Classes["search-container"]}>
            <img
              src={Search}
              alt="Search Icon"
              className={Classes["search-icon"]}
            />
            <input
              type="text"
              placeholder="What are you looking for"
              className={Classes["search-input"]}
            />
            <img
              src={VectorOne}
              alt="Vector One"
              className={Classes["vector-one"]}
            />
            <img src={Vector} alt="Vector" className={Classes["vector-two"]} />
          </div>
        )}
        <div className={Classes["user-container"]}>
          <img src={Ebun} alt="User Profile" className={Classes["user-icon"]} />
          <span className={Classes["user-text"]}>
            {isMobile ? "Welcome, Ebunoluwa" : "Hi, Ebunoluwa"}
          </span>
          <img
            src={Back}
            alt="Dropdown Icon"
            className={Classes["dropdown-icon"]}
          />
          <img
            src={Cart}
            alt="Cart Icon"
            onClick={toggleCart}
            className={Classes["cart-icon"]}
          />
          {isMobile && (
            <img
              src={NotificationIcon}
              alt="Notification"
              className={Classes["notification-icon"]}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
