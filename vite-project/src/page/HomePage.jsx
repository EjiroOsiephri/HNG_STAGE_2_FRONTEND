import React, { useState, useEffect } from "react";
import Header from "../components/Headers/Header";
import MainBody from "../components/body/MainBody";
import Categories from "../components/body/Categories";
import Product from "../components/body/Product";
import Footer from "../components/body/Footer";
import MobileFooter from "../components/body/MobileFooter";
import MobileCart from "../components/cart/MobileCart";
import CartDrop from "../components/cart/Cart";
import { CSSTransition } from "react-transition-group";
import MobileCheckoutPage from "../components/body/MobileCheckOut";
import CheckoutPage from "../components/body/CheckoutPage";
import ThankYouPage from "../components/body/ThankYou.module";
import "../sass/animation.scss";
import Saved from "../components/body/Saved";

const HomePage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [setshowCart, setShowCart] = useState(false);
  const [webCheckout, setWebChekout] = useState(false);
  const [mobileCheckout, setMobileChekout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  function getCartDrop(props) {
    setWebChekout(props);
  }

  function getMobileCart(props) {
    setMobileChekout(props);
  }

  const handleCheckout = () => {
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return <ThankYouPage />;
  }

  return (
    <>
      <Header
        setCartIsShown={setCartIsShown}
        isMobile={isMobile}
        setshowCart={setshowCart}
        setShowCart={setShowCart}
      />
      {isMobile && mobileCheckout ? (
        <MobileCheckoutPage onCheckout={handleCheckout} />
      ) : !isMobile && webCheckout ? (
        <CheckoutPage
          setWebChekout={setWebChekout}
          setShowCart={setShowCart}
          onCheckout={handleCheckout}
        />
      ) : (
        <CSSTransition
          in={cartIsShown}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          {isMobile ? (
            <MobileCart
              setCartIsShown={setCartIsShown}
              getMobileCart={getMobileCart}
            />
          ) : (
            <div>
              <CartDrop getCartDrop={getCartDrop} />
              <Saved />
              <Product />
              <Footer />
            </div>
          )}
        </CSSTransition>
      )}
      {!cartIsShown && (
        <div>
          <Categories />
          <Product />
          <Footer />
          <MobileFooter cartIsShown={cartIsShown} getData={setCartIsShown} />
        </div>
      )}
    </>
  );
};

export default HomePage;
