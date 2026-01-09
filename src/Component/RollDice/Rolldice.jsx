import styles from './Rolldice.module.css';
export default function Rolldice({randomvalue,myrandom,isrolling}) {
  return (
    <div className={`${styles.dice_image_container} ${isrolling? styles.roll:""}`}>
      <img src={`./Images/dice_${myrandom}.png`} alt="dice_image" onClick={randomvalue}></img>
    </div>
  )
}
