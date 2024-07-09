import React from "react";
import {
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
  productSix,
} from "../export/ProductsExport";
import Classes from "../../sass/ProductsMain.module.scss";

const productArray = [
  { img: productOne, name: "Gucci Flora Perfume", price: "$172" },
  { img: productTwo, name: "Chanel Coco Mademoiselle", price: "$185.57" },
  { img: productThree, name: "No5 Eau de Parfum Spray", price: "$121.52" },
  { img: productFour, name: "Hugo Boss Oud Aromatic", price: "$150.12" },
  { img: productFive, name: "Daisy Marc Jacobs", price: "$120.00" },
];

const Saved = () => {
  return (
    <>
      <h1 className={Classes.saved}>Saved Items(5)</h1>
      <h3 className={Classes.productText}></h3>
      <main className={Classes["product-main-container"]}>
        <section className={Classes["products-section"]}>
          {productArray.map((item, index) => (
            <div key={index} className={Classes["product-card"]}>
              <img
                src={item.img}
                alt={item.name}
                className={Classes["product-image"]}
              />
              <div className={Classes["product-info"]}>
                <h3 className={Classes["product-name"]}>{item.name}</h3>
                <h3 className={Classes["product-price"]}>{item.price}</h3>
                <button className={Classes["add-to-cart-button"]}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Saved;
