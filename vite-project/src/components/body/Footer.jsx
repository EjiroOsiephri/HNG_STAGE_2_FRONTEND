import React from "react";
import Classes from "../../sass/Footer.module.scss";
import Ruvid from "../../assets/ruvid.png";

const Footer = () => {
  return (
    <main className={Classes.mainFooter}>
      <footer className={Classes.footer}>
        <div className="img">
          <img src={Ruvid} alt="Ruvid" />
        </div>
        <div className={Classes.container}>
          <div className={Classes.column}>
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className={Classes.column}>
            <h3>Support</h3>
            <ul>
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div className={Classes.column}>
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div className={Classes.column}>
            <h3>Private Notice</h3>
            <ul>
              <li>Cookie Notice</li>
              <li>Official Stores</li>
              <li>Flash Stores</li>
            </ul>
          </div>
          <div className={Classes.column}>
            <h3>Payment and Deliveries</h3>
            <ul>
              <li>Be a sales consultant</li>
              <li>Service apartment</li>
              <li>Our Locations</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={Classes.bottomBar}>
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </main>
  );
};

export default Footer;
