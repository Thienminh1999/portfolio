import React from "react";
import styles from "./AboutMeSection.module.css";
import BgContent from "../../UI/BackgroundContent/BgContent";
import Position from "../Position/Position";

function AboutMeSection(props) {
  return (
    <BgContent content="about">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src="/images/about_me.JPG" />
        </div>
        <Position />
      </div>
    </BgContent>
  );
}

export default AboutMeSection;
