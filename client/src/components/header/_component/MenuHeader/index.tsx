"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const MENU = [
  {
    title: "Trang chủ",
    link: "/",
  },
  {
    title: "Cửa hàng",
    link: "/cua-hang",
  },
  {
    title: "Sản phẩm",
    link: "/san-pham",
  },
  {
    title: "Tin tức",
    link: "/tin-tuc",
  },
  {
    title: "Liên hệ",
    link: "/lien-he",
  },
];

const MenuHeader = () => {
  return (
    <nav className={styles.menuHeaderWrap}>
      <ul>
        {MENU.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.link} className={styles.menuItem}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MenuHeader;
