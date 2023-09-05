import React from "react";
import styles from "./Header.module.css";
import Button from "../../UI/Button/Button";
import CV from "../../../assets/files/CV_FullStack.pdf";

function Header(props) {
  return (
    <div className={styles.container}>
      <h3>nglethien.minh</h3>
      <div className={styles.actions}>
        <a href={CV} download="NguyenLeThienMinh_CV_Fullstack" target="_blank">
          <Button className={styles.download_cv}>Download CV</Button>
        </a>
      </div>
    </div>
  );
}

export default Header;
