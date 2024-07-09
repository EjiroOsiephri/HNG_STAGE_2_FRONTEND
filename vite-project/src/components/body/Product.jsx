import React from "react";
import {
  productOne,
  productTwo,
  productThree,
  productFour,
  productFive,
  productSix,
  productSeven,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
  product22,
  product23,
  product24,
} from "../export/ProductsExport";
import Classes from "../../sass/ProductsMain.module.scss";

const productArray = [
  { img: productOne, name: "Gucci Flora Perfume", price: "$172" },
  { img: productTwo, name: "Chanel Coco Mademoiselle", price: "$185.57" },
  { img: productThree, name: "No5 Eau de Parfum Spray", price: "$121.52" },
  { img: productFour, name: "Hugo Boss Oud Aromatic", price: "$150.12" },
  { img: productFive, name: "Daisy Marc Jacobs", price: "$120.00" },
  { img: productSix, name: "Coco Noir Channel", price: "$160.00" },
  { img: productSeven, name: "Wild Colt", price: "$125.00" },
  { img: product8, name: "Essence of Summer", price: "$135.00" },
  { img: product9, name: "Midnight Flower", price: "$145.00" },
  { img: product10, name: "Ocean Breeze", price: "$155.00" },
  { img: product11, name: "Vanilla Dream", price: "$165.00" },
  { img: product12, name: "Rose Garden", price: "$175.00" },
  { img: product13, name: "Amber Romance", price: "$185.00" },
  { img: product14, name: "Lavender Bliss", price: "$195.00" },
  { img: product15, name: "Mystic Woods", price: "$205.00" },
  { img: product16, name: "Citrus Burst", price: "$215.00" },
  { img: product17, name: "Tropical Paradise", price: "$225.00" },
  { img: product18, name: "Sweet Pea", price: "$235.00" },
  { img: product19, name: "Honeydew", price: "$245.00" },
  { img: product20, name: "Spring Bloom", price: "$255.00" },
  { img: product21, name: "Autumn Leaves", price: "$265.00" },
  { img: product22, name: "Winter Chill", price: "$275.00" },
  { img: product23, name: "Sunset Glow", price: "$285.00" },
  { img: product24, name: "Moonlit Night", price: "$295.00" },
];

const Product = () => {
  return (
    <>
      <h3 className={Classes.productText}>Recommended</h3>
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

export default Product;
