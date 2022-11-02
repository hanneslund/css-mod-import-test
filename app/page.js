"use client";
import "next/link";

import styles from "package-with-css/styles.module.css";

export default function Page() {
  return <p className={styles.mod}>Hello world</p>;
}
