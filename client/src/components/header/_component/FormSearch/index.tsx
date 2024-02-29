"use client";
import React from "react";
import styles from "./styles.module.css";

const FormSearch = () => {
  return (
    <div className={styles.categoryProduct}>
      <select defaultValue="">
        <option value="">Tất cả danh mục</option>
        <option value="saab">Vợt cầu lông</option>
        <option value="vw">Giày cầu lông</option>
      </select>
      <input type="text" placeholder="Tìm kiếm sản phẩm ..." />
      <button type="button">Tìm kiếm</button>
    </div>
  );
};

export default FormSearch;
