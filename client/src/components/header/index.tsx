"use client";
import Image from "next/image";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { LiaUser } from "react-icons/lia";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import styles from "./styles.module.css";
import FormSearch from "./_component/FormSearch";
import MenuProduct from "./_component/MenuProduct";
import MenuHeader from "./_component/MenuHeader";
import Wraper from "../Wraper";

const Header = () => {
  return (
    <header>
      <div className={styles.headerTop}>
        <Wraper>
          <div className={styles.row}>
            <div className={styles.logo}>
              <Link rel="stylesheet" href="/">
                <Image
                  src={"images/logo.svg"}
                  width={120}
                  height={80}
                  alt={"logo"}
                />
              </Link>
            </div>
            <div className={styles.searchCar}>
              <FormSearch />
            </div>
            <div className={styles.controlWrap}>
              <Link href="/signin" className={styles.signinWrap}>
                <LiaUser />
                <div className={styles.signin}>
                  <small>Đăng nhập</small>
                  <span>Tài khoản</span>
                </div>
              </Link>
              <div className={styles.wishlistWrap}>
                <div className={styles.wishlist}>
                  <span>0</span>
                  <FiHeart />
                </div>
              </div>
              <div className={styles.cartWrap}>
                <Link href="/cart" className={styles.cartLink}>
                  <div className={styles.cart}>
                    <span>0</span>
                    <PiShoppingCartSimpleBold />
                  </div>
                  <div className={styles.cartInfo}>
                    <small>Giỏ hàng của bạn</small>
                    <span>999.999.000đ</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Wraper>
      </div>
      <div className={styles.headerBottom}>
        <Wraper>
          <div className={styles.row}>
            <MenuProduct />
            <MenuHeader />
            <div className={styles.menuCap}>
              <Image
                src="/images/icons/icon_sale.svg"
                width={21}
                height={21}
                alt={"icon_sale"}
              />
              <p>Giảm giá 5% cho đơn hàng đầu tiên của bạn.</p>
            </div>
          </div>
        </Wraper>
      </div>
    </header>
  );
};

export default Header;
