"use client";
import { FcMenu } from "react-icons/fc";
import styles from "./styles.module.css";

const MenuProduct = () => {
  return (
    <div className={styles.menuProdutsCategory}>
      <div className={styles.menuProduts}>
        <FcMenu />
        <span>Danh mục sản phẩm</span>
      </div>
    </div>
  );
};

export default MenuProduct;
