import React from "react";
import Classes from "../../sass/CheckoutPage.module.scss";
import ATM from "../../assets/uil_atm-card.png";

const CheckoutPage = (props) => {
  const CheckoutPage = () => {
    props.setWebChekout(false);
    props.setShowCart(false);
  };

  const handleCheckout = () => {
    props.onCheckout();
  };
  return (
    <>
      <h1 className={Classes.alignText} onClick={CheckoutPage}>
        {"<"}
      </h1>
      <div className={Classes.checkoutPage}>
        <div className={Classes.deliveryDetails}>
          <h2>Delivery Details</h2>
          <section>
            <p>Customer Address: Yaryra Ajilore</p>
            <p>
              Full Address: Full Address goes here with state +234 123 456 7890
            </p>
            <p>Delivery Mode: Door Delivery</p>
            <p>Delivery between 11 July and 12 July.</p>
          </section>
          <section>
            <div className={Classes.line}></div>
            <h4>Card Number:</h4>
            <p>
              0001 1234 3421 8745
              <img src={ATM} alt="ATM Card" />
            </p>
            Valid Till:
            <p>09/2029</p>
            CVV:
            <p>123</p>
            <div className={Classes.line}></div>
          </section>
        </div>
        <div className={Classes.orderSummary}>
          <h2>Order Summary</h2>
          <p>Item (1): $121.52</p>
          <p>Delivery Fees: $2.22</p>
          <p>Discount: $1.00</p>
          <p>Total: $124.74</p>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
