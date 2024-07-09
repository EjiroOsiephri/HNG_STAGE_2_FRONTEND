import React from "react";
import Classes from "../../sass/MobileCheckout.module.scss";
import ATM from "../../assets/uil_atm-card.png";

const MobileCheckoutPage = ({ onCheckout }) => {
  return (
    <div className={Classes.mobileCheckoutPage}>
      <h3>{"<"}</h3>
      <h2>Payment Details</h2>
      <div className={Classes.cardDetails}>
        <section>
          <img src={ATM} alt="" />
          <p>Card Number: 0001 1234 3421 8745</p>
        </section>
        <div></div>
        <aside>
          <img src={ATM} alt="" />
          <p>Valid Till: 09/2029</p>
          <p>CVV: 123</p>
        </aside>
      </div>
      <button onClick={onCheckout}>Pay $172</button>
    </div>
  );
};

export default MobileCheckoutPage;
