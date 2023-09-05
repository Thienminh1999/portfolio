import React from "react";
import styles from "./SkillCard.module.css";

function SkillCard(props) {
  const { title, skills } = props;
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <ul>
        {skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
