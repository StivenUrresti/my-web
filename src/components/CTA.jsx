import { useNavigate } from "react-router-dom";
import styles from "../style";
import Button from "./CustomButton/Button";

const CTA = () => {

  const navigate = useNavigate();
  const goToCoontactMe = () => {
    console.log("hola")
    navigate('/contact-me')
  }
  return(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>If my skills interested you let me know</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      you can contact me via email by clicking the contact button
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button title='write me' press={goToCoontactMe} />
    </div>
  </section>

  )
}

export default CTA;