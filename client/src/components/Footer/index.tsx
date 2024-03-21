"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import FacebookFanPage from "../FacebookFanpage";
import Wraper from "../Wraper";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wraper>
        <div className={styles.row}>
          <div className={styles.item}>
            <h3>Giới thiệu về cửa hàng</h3>
            <Link href="/" className={styles.logoFooter}>
              <Image
                src={"images/logo.svg"}
                width={120}
                height={80}
                alt={"logo"}
              />
            </Link>
            <span className={styles.information}>
              Có câu hỏi? Gọi cho chúng tôi 24/7
            </span>
            <a href="tel:0344287032" className={styles.phone}>
              0344287032
            </a>
            <p>Địa chỉ : Bí trung 2 - Phương đông - Uông bí - Quảng Ninh</p>
            <p>
              <span>Email :</span>
              <a href="maillto:maclong.mvl.com"> maclong.mvl.com</a>
            </p>
          </div>
          <div className={styles.item}>
            <h3>Về chúng tôi</h3>
            <ul>
              <li>
                <a href="/gioi-thieu" target="_blank">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="http://" target="_blank">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="http://" target="_blank">
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h3>Chính sách</h3>
            <ul>
              <li>
                <a href="http://" target="_blank">
                  Chính sách Vận chuyển{" "}
                </a>
              </li>
              <li>
                <a href="http://" target="_blank">
                  Chính sách bảo hành
                </a>
              </li>
              <li>
                <a href="http://" target="_blank">
                  Chính sách đổi trả và hoàn tiền
                </a>
              </li>
              <li>
                <a href="http://" target="_blank">
                  Quy định giá cả và hình thức thanh toán
                </a>
              </li>
              <li>
                <a href="http://" target="_blank">
                  Quy định giá cả và hình thức thanh toán
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h3>Fanpage</h3>
            <FacebookFanPage />
          </div>
        </div>
      </Wraper>
    </footer>
  );
};

export default Footer;
