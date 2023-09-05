import React from "react";
import styles from "./EducationSection.module.css";
import BgContent from "../../UI/BackgroundContent/BgContent";
import NodeTimeLine from "../NodeTimeLine/NodeTimeLine";

const education = [
  {
    title: "FullStack Developer",
    organization: "Funix",
    time: "2023",
    describe: `Studying at Funix to become a Full Stack Developer. I have
     learned ReactJS and NodeJS, and I am excited to continue my education and learn more
      about these technologies. I am confident that my skills and knowledge will make me
       a valuable asset to any team.
    `,
  },
  {
    title: "software engineering",
    organization: "FPT University",
    time: "2018-2022",
    describe: `I have gained a comprehensive understanding of the entire software development process, from requirements gathering and system design to coding and development, testing and debugging, deployment and implementation, and maintenance and support.`,
  },
];

function EducationSection(props) {
  return (
    <BgContent content="Education">
      <div className={styles.container}>
        <h1 className={styles.title}>My education</h1>
        <ul className={styles.timeline}>
          {education.map((item, index) => (
            <NodeTimeLine data={item} key={index} />
          ))}
        </ul>
      </div>
    </BgContent>
  );
}

export default EducationSection;
