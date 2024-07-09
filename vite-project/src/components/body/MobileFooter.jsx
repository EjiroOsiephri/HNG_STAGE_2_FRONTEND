import React, { useEffect, useState } from "react";
import Home from "../../assets/home.png";
import DialPad from "../../assets/dialpad.png";
import Cart from "../../assets/mdi_cart-outline.png";
import Love from "../../assets/love.png";
import Ebun from "../../assets/Ellipse 40.png";

import Classes from "../../sass/MobileFooter.module.scss";

const MobileFooter = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown((prevValue) => !prevValue);
  };

  useEffect(() => {
    props.getData(cartIsShown);
  }, [setCartIsShown, cartIsShown]);

  return (
    <div className={Classes.footerContainer}>
      <div className={Classes.footerItem}>
        <img src={Home} alt="Home" />
        <span>Home</span>
      </div>
      <div className={Classes.footerItem}>
        <img src={DialPad} alt="DialPad" />
        <span>Explore</span>
      </div>
      <div className={Classes.footerItem} onClick={showCart}>
        <img src={Cart} alt="Cart" />
        <span>Cart</span>
      </div>
      <div className={Classes.footerItem}>
        <img src={Love} alt="Love" />
        <span>Wishlist</span>
      </div>
      <div className={Classes.footerItem}>
        <img src={Ebun} alt="Profile" />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default MobileFooter;
