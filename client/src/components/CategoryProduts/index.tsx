"use client";
import React from "react";
import styles from "./styles.module.css";

import { dataFake } from "./data";
import { CategoryProdutsType } from "./type";

const url = "https://cdn-icons-png.flaticon.com/512/12817/12817086.png";
const CategoryProduts = () => {
  return (
    <div className={styles.wraperCategoryProduts}>
      <div className={styles.categoryProduts}>
        {dataFake.map((item: CategoryProdutsType) => {
          return (
            <div key={item.id} className={styles.categoryProdutItem}>
              <div className={styles.categoryProdutImage}>
                <img width={76} height={76} src={item.image} alt={""} />
              </div>
              <p>{item.name}</p>
              <small>{item.quantity} sản phẩm</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProduts;
