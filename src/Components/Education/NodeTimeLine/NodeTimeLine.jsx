import React from "react";
import styles from "./NodeTimeLine.module.css";

function NodeTimeLine(props) {
  const { data } = props;
  return (
    <li className={styles.container}>
      <h1>{data.title}</h1>
      <h2>{data.organization}</h2>
      <h3>{data.time}</h3>
      <p>{data.describe}</p>
    </li>
  );
}

export default NodeTimeLine;
