import React, { useState, useEffect } from "react";
import IMAGE from "../../assets/Frame 81.png";
import Delete from "../../assets/delete.png";
import Classes from "../../sass/Cart.module.scss";

const Cart = (props) => {
  const [checkout, setCheckout] = useState(false);

  const showCheckoutPage = () => {
    setCheckout(true);
    props.getCartDrop(true);
  };

  useEffect(() => {
    props.getCartDrop(checkout);
  }, [checkout, setCheckout]);

  return (
    <div className={Classes["cart-container"]}>
      <hr />
      <div className={Classes["cart-header"]}>
        <h1>Cart(2)</h1>
        <h1>Cart Summary</h1>
      </div>
      <div className={Classes["cart-items"]}>
        <div className={Classes["cart-item"]}>
          <section>
            <img src={IMAGE} alt="image" />
            <div className={Classes["item-details"]}>
              <h3>N°5 Eau de Parfum Spray</h3>
              <p>In Stock</p>
              <p className={Classes["remove"]}>
                <img src={Delete} alt="delete" /> Remove
              </p>
            </div>
          </section>
          <section className={Classes["second-section"]}>
            <h1 className={Classes["price"]}>$121.24</h1>
            <p>$150.34</p>
            <div className={Classes["quantity"]}>
              <div>-</div>
              <h1>1</h1>
              <div>+</div>
            </div>
          </section>
        </div>
        <div className={Classes["cart-summary"]}>
          <div>
            <p>SubTotal</p>
            <h3 className={Classes["subtotal"]}>$121.24</h3>
          </div>
          <button
            className={Classes["checkout-button"]}
            onClick={showCheckoutPage}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
