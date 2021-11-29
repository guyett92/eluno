import React from "react";
import styles from "../styles/Loading.module.css";

const LoadingIndicator = () => {
  return (
    <div className={styles.ringContainer}>
      {/* <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <div className={styles.loader} />
    </div>
  );
};

export default LoadingIndicator;
