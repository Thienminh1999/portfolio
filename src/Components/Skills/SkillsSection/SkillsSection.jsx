import React from "react";
import styles from "./SkillsSection.module.css";
import BgContent from "../../UI/BackgroundContent/BgContent";
import SkillCard from "../SkillsCard/SkillCard";

const SkillSet = [
  {
    title: "Front end development",
    skils: ["ReactJs", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Back end development",
    skils: ["Java Springboot", "NodeJs", "Microsoft SQL", "MongoDB"],
  },
  {
    title: "Personal Skill",
    skils: [
      "Good teamworking",
      "Quick learning to new concepts",
      "Hard working",
    ],
  },
];

function SkillsSection(props) {
  return (
    <BgContent content="Skills">
      <div className={styles.container}>
        <div className={`${styles["skills-info"]}`}>
          <h1>Here are some my skills</h1>
          <div className={styles.skills}>
            {SkillSet.map((item, index) => (
              <SkillCard key={index} title={item.title} skills={item.skils} />
            ))}
          </div>
        </div>

        <div className={styles.backdrop}>
          <img src="/images/img1.jpg" />
        </div>
      </div>
    </BgContent>
  );
}

export default SkillsSection;
