import React from "react";
import {
  MakeUp,
  SkinCare,
  HairCare,
  Perfume,
} from "../../components/export/CategoriesExport";
import Classes from "../../sass/Categories.module.scss";

const Categories = () => {
  return (
    <>
      <div className={Classes["categories"]}>
        <h2>Categories</h2>
        <section className={Classes["imageCategory"]}>
          <div className={Classes["perfume"]}>
            <img src={Perfume} alt="Perfume" />
            <p>Perfume</p>
          </div>
          <div className={Classes["skincare"]}>
            <img src={SkinCare} alt="SkinCare" />
            <p>Skin Care</p>
          </div>
          <div className={Classes["haircare"]}>
            <img src={HairCare} alt="HairCare" />
            <p>Hair Care</p>
          </div>
          <div className={Classes["makeup"]}>
            <img src={MakeUp} alt="MakeUp" />
            <p>Make Up</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
