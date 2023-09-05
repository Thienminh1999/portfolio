import React from "react";
import styles from "./HobbieItem.module.css";

function HobbieItem(props) {
  const { data } = props;
  return (
    <li>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src={data.imgUrl} alt={data.title} />
        </div>
        <figcaption className={styles.caption}>
          <p>{data.desc}</p>
          <span>{data.author}</span>
        </figcaption>
        <h2>{data.title}</h2>
      </div>
    </li>
  );
}

export default HobbieItem;
