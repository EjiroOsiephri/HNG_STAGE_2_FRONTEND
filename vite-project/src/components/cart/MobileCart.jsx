import React, { useEffect, useState } from "react";
import IMAGE from "../../assets/Frame 81.png";
import Delete from "../../assets/delete.png";
import Love from "../../assets/love.png";
import Classes from "../../sass/MobileCart.module.scss";

const MobileCart = (props) => {
  const [checkout, setCheckout] = useState(false);

  const showCheckoutPage = () => {
    setCheckout(true);
    props.getMobileCart(true);
  };

  const setDefaultValue = () => {
    props.setCartIsShown(checkout);
  };

  useEffect(() => {
    props.getMobileCart(checkout);
  }, [checkout, setCheckout]);

  return (
    <div className={Classes["mobile-cart-container"]}>
      <div className={Classes["header"]}>
        <h1 onClick={setDefaultValue}>{"<"}</h1>
        <span className={Classes["title"]}>Cart</span>
        <img src={Love} alt="Favorite" className={Classes["love-icon"]} />
      </div>
      <div className={Classes["cart-item"]}>
        <img src={IMAGE} alt="Product" />
        <div className={Classes["item-details"]}>
          <h3>N°5 Eau de Parfum Spray</h3>
          <p>In Stock</p>
          <p className={Classes["remove"]}>
            <img src={Delete} alt="Back" className={Classes["delete-icon"]} />
            Remove
          </p>
          <div className={Classes["quantity"]}>
            <div>-</div>
            <span>1</span>
            <div>+</div>
          </div>
        </div>
        <span className={Classes["price"]}>$121.52</span>
      </div>
      <div className={Classes["cart-summary"]}>
        <h3>Cart Summary</h3>
        <p className={Classes["summary-value"]}>Subtotal: $121.52</p>
      </div>
      <div className={Classes["order-summary"]}>
        <h3>Order Summary</h3>
        <div className={Classes["summary-row"]}>
          <p>Item (1)</p>
          <p className={Classes["summary-value"]}>$121.52</p>
        </div>
        <div className={Classes["summary-row"]}>
          <p>Delivery Fees</p>
          <p className={Classes["summary-value"]}>$2.22</p>
        </div>
        <hr />
        <div className={Classes["summary-row"]}>
          <p>Discount</p>
          <p className={Classes["summary-value"]}>$1.00</p>
        </div>
        <div className={Classes["summary-row"]}>
          <h3>Total</h3>
          <h3 className={Classes["summary-value"]}>$124.74</h3>
        </div>
      </div>
      <button className={Classes["checkout-button"]} onClick={showCheckoutPage}>
        Checkout
      </button>
    </div>
  );
};

export default MobileCart;
