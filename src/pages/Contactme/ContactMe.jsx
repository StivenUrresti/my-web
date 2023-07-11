import React from "react";
import styles from "../../style";
import Button from "../../components/CustomButton/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CustomTextField from "../../components/CustomTesxtField/CustomTextField";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContactMe = () => {
  const navigate = useNavigate();
  const goBack = () => {
    console.log("hola");
    navigate("/");
  };
  return (
    <div className="bg-primary w-full overflow-hidden h-screen sm:px-6 lg:px-20 ">
      <div
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} justify-between  bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <IconButton onClick={goBack} className="invisible lg:visible md:visible">
          <ArrowBackIosIcon style={{ color: "white" }} />
          <p className={`${styles.paragraph} max-w-[470px] my-5`}>back</p>
        </IconButton>
        <div className=" flex flex-col">
          <h2 className={styles.heading2}>let me know what interested you</h2>
          <p className={`${styles.paragraph} max-w-[470px] my-5`}>
            you can contact me via email
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col w-full">
              <CustomTextField
                title="Name"
                customStyle={{ marginBottom: 30 }}
              />
              <CustomTextField
                title="Last Name"
                customStyle={{ marginBottom: 30 }}
              />
              <CustomTextField
                title="Email"
                customStyle={{ marginBottom: 30 }}
              />
              <div className="flex justify-center">
                <Button title="send email" press={() => console.log("hola")} />
                <IconButton onClick={goBack} className="invisible">
                  <ArrowBackIosIcon style={{ color: "white" }} />
                  <p className={`${styles.paragraph} max-w-[470px] my-5`}>
                    back
                  </p>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
