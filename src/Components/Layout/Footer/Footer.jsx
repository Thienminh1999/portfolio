import React from "react";
import styles from "./Footer.module.css";
import ContactMe from "../../AboutMe/ContactMe/ContactMe";
function Footer(props) {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <h2>Contact with me</h2>
        <p>
          Genius is one percent inspiration and ninety-nine percent perspiration
        </p>
        <span>nglethien.minh@gmail.com</span>
        <ContactMe isBtnUnVisiable={true} />
        <h3>373 Thong Nhat, Go Vap, Ho Chi Minh city</h3>
      </div>
    </div>
  );
}

export default Footer;
