import Button from "../Button/Button";
import styles from "./Home.module.css";
export default function Home({onplaynow}) {
  return (
    <div className={styles.container}>
      <div className={styles.img_div}>
        <img src="./Images/homedice.png" alt="The home dice image"></img>
      </div>
      <div className={styles.content}>
        <h1>DICE GAME</h1>
        <Button text="play Now"
         isPrimary={true}
          onclick={onplaynow}
          style={{width:"220px", height:"44px", fontSize:"16px"}}
          />
      </div>
    </div>
  )
}
