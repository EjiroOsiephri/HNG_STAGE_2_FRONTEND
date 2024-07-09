import React from "react";
import Classes from "../../sass/ThankYouPage.module.scss";

const ThankYouPage = () => {
  return (
    <div className={Classes.thankYouPage}>
      <h1>Thank You for Your Order!</h1>
      <p>
        Your order has been placed successfully. We appreciate your business!
      </p>
    </div>
  );
};

export default ThankYouPage;
