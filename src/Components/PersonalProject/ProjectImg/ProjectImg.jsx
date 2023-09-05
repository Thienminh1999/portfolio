import React from "react";
import styles from "./ProjectImg.module.css";

function ProjectImg(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["site"]} ${styles.front}`}>
        <img src={data.imgUrl} />
      </div>
      <div className={`${styles["site"]} ${styles.back}`}>
        <h3>{data.name}</h3>
        <p>
          <strong>Technology</strong> : {data.tech}
        </p>
        <p>
          <strong>Description</strong> : {data.description}
        </p>
        <p>
          <strong>Link demo</strong> : <a href={data.link}>{data.link}</a>
        </p>
      </div>
    </div>
  );
}

export default ProjectImg;
