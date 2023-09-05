import React from "react";
import styles from "./ContactMe.module.css";
import Button from "../../UI/Button/Button";
import { enqueueSnackbar } from "notistack";

function ContactMe(props) {
  return (
    <div>
      <ul className={styles.social}>
        <li>
          <a href="https://www.facebook.com/nglethien.minh/">
            <i className="fa-brands fa-facebook fa-2xl"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Thienminh1999">
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        </li>
        <li>
          <i
            onClick={() => {
              navigator.clipboard.writeText("nglethien.minh@gmail.com");
              enqueueSnackbar("Email address has been copied to clipboard", {
                variant: "success",
              });
            }}
            className="fa-solid fa-at fa-2xl"
          ></i>
        </li>
      </ul>
      {!props.isBtnUnVisiable && (
        <Button className={styles.btn}>Contact me!</Button>
      )}
    </div>
  );
}

export default ContactMe;
