import React from "react";
import BgContent from "../../UI/BackgroundContent/BgContent";
import styles from "./HobbieSection.module.css";
import HobbieItem from "../HobbieItem/HobbieItem";

const data = [
  { imgUrl: "/images/book1.jpg", title: "Atomic Habits" },
  {
    imgUrl: "/images/book2.jpg",
    title: "Mind map at work",
    desc: "The process of knowledge accumulation and management is the foundation of success for every company.",
    author: "Tony Buzan",
  },
  { imgUrl: "/images/book3.jpg", title: "Clean code" },
];

function HobbieSection(props) {
  return (
    <BgContent content="Hobbies">
      <div className={styles.container}>
        <h1 className={styles.title}>My Hobbies</h1>
        <ul className={styles.list}>
          {data.map((item, index) => (
            <HobbieItem key={index} data={item} />
          ))}
        </ul>
      </div>
    </BgContent>
  );
}

export default HobbieSection;
