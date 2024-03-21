"use client";
import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

const Wraper = ({ children }: Props) => {
  return <div className={styles.wraper}>{children}</div>;
};

export default Wraper;
