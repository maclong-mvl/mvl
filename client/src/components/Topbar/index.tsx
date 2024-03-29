"use client";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import styles from "./styles.module.css";
import Wraper from "../Wraper";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <Wraper>
        <div className={styles.row}>
          <p className={styles.topbarLeft}>
            Bạn là sinh viên và sinh viên được giảm giá 20%.
          </p>
          <div className={styles.topbarRight}>
            <div className={styles.languageWrap}>
              <div className={styles.languageActive}>
                <Image
                  src="/images/language/vi-icon.svg"
                  alt={"Language MVL"}
                  width={30}
                  height={30}
                />
                <span>Vietnamese</span>
                <FiChevronDown />
              </div>
            </div>
          </div>
        </div>
      </Wraper>
    </div>
  );
};

export default Topbar;
