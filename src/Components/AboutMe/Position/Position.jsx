import React from "react";
import styles from "./Position.module.css";
import ContactMe from "../ContactMe/ContactMe";

function Position(props) {
  return (
    <div className={styles.container}>
      <h1>Nguyen</h1>
      <h1>Le Thien Minh</h1>
      <div className={styles.desc}>
        <p>
          I am a <strong>full-stack developer</strong>, with a strong passion
          for learning and striving to further develop myself
        </p>
        <ContactMe />
      </div>
    </div>
  );
}

export default Position;
