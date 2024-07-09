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

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <header className={Classes["ruvid-store-header"]}>
      <img src={Ruvid} alt="Ruvid Store Logo" className={Classes.logo} />
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
        <img src={Cart} alt="Cart Icon" className={Classes["cart-icon"]} />
        {isMobile && (
          <img
            src={NotificationIcon}
            alt="Notification"
            className={Classes["notification-icon"]}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
