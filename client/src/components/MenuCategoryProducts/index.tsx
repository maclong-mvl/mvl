import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const DATA_MENU = [
  {
    icon: "",
    title: "Thời trang nữ",
  },
  {
    icon: "",
    title: "Thời trang nam",
  },
  {
    icon: "",
    title: "Mỹ phẩm chính hãng",
  },
  {
    icon: "",
    title: "Dụng cụ làm đẹp",
  },
  {
    icon: "",
    title: "Giầy dép Nam & Nữ",
  },
  {
    icon: "",
    title: "Sức khỏe",
  },
  {
    icon: "",
    title: "Thiết bị điện tử",
  },
];
const MenuCategoryProducts = () => {
  return (
    <div className={styles.menuCategoryProducts}>
      <ul>
        {DATA_MENU.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={styles.itemMenuCategoryProduct}
                href="#"
                target="_blank"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuCategoryProducts;
