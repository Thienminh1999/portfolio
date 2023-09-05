import React from "react";
import styles from "./PersonalProjectSection.module.css";
import BgContent from "../../UI/BackgroundContent/BgContent";
import ProjectImg from "../ProjectImg/ProjectImg";

const projects = [
  {
    imgUrl: "/images/project1.png",
    name: "Digital CV",
    tech: "ReactJs",
    description:
      "Personal CV websites are a great way to showcase your skills and experience to potential employers. They allow you to create a more personalized and visually appealing presentation of your qualifications than a traditional resume.",
    link: "#",
  },
  {
    imgUrl: "/images/project2.png",
    name: "Ecommerce Web Application",
    tech: "ReactJs, Redux, Nodejs, MongoDB",
    description:
      "E-commerce websites are a type of website that allows users to purchase goods and services online. They are a convenient and efficient way to shop, and they offer a wide range of products and services to choose from.",
    link: "https://ecommerce-asm3.web.app",
  },
];

function PersonalProjectSection(props) {
  return (
    <BgContent content="Project">
      <div className={styles.container}>
        <h1 className={styles.title}>My personal project</h1>
        <ul className={styles.imgs}>
          {projects.map((item, index) => (
            <ProjectImg key={index} data={item} />
          ))}
        </ul>
      </div>
    </BgContent>
  );
}

export default PersonalProjectSection;
