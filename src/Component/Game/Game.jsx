import {  useRef, useState } from 'react';
import Button from '../Button/Button';
import Numberbox from '../Numberbox/Numberbox';
import Rolldice from '../RollDice/Rolldice';
import Score from '../Score/Score';
import styles from './Game.module.css';
import Error from '../Error/Error';
import Showrules from '../ShowRules/Showrules';
function Game() {
  const[selected,Setselected] = useState(null);
  const[myrandom, Setmyrandom] = useState(1);
  const[score,setScore] = useState(0);
  const[error,Seterror] = useState(false);
  const[showrule,setshowrule] = useState(false);
  const[isRolling,setIsRolling] = useState(false);
  const rulesRef = useRef(null);

  const handleSelection = (num) => {
    Setselected(num);
    console.log(num);
    Seterror(false);
  }

  const randomValue = () => {
    // the logic of generating random value
    if(selected == null) {
      Seterror(true);
      return;
    } 
    Seterror(false);
    setIsRolling(true);
   const value = Math.floor(Math.random()*6) + 1;
   setTimeout(() => {

     Setmyrandom(value);
     setIsRolling(false);
   },600);
   
   if(selected === value) {
    setScore(prev => prev + value);

   } else {
    setScore(prev => prev - 2);

   }
   Setselected(null);

  } 

  const numbers = [1, 2, 3, 4, 5, 6];
  const resetScore = () => {
    setScore(0);
  }

  const showRules = () => {
  setshowrule(prev => {
    const next = !prev;

    if (next) {
      setTimeout(() => {
        rulesRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }

    return next;
  });
};
  return (
    <div className={ styles.main_container}>
    <div className={styles.main_div}>
      <div className={styles.score}>
         <Score score={score}/>
      <p>Total Score</p>
      </div>
     
      <div className={styles.selection_div}>
        { error &&<Error/>}
        <div className={styles.onlynumberbox}>
          {
           numbers.map((num)=> (
            <Numberbox key={num} text={num} selection={handleSelection} selected={selected}/>
           ))
          }
           </div>
          <p>Select Number</p>
      </div>

    </div>
    <div className={styles.dice_container}>
      <div className={styles.dice_content}>
            <Rolldice randomvalue={randomValue} myrandom={myrandom} isrolling={isRolling}/>
          <p>Click on Dice to roll</p>
          </div>
          <div className={styles.action_buttons}>
          <Button text="Reset Score" isPrimary={false} onclick={resetScore} style={{width:"220px", height:"44px",fontSize:"16px",fontWeight:"bold"}}/>
          <Button text="Show Rules" isPrimary={true} onclick={showRules} style={{width:"220px", height:"44px",fontSize:"16px",fontWeight:"bold"}}/>
          </div>
          {showrule && (
           <div ref={rulesRef}>
            <Showrules />
          </div>
         )}
    </div>

    </div>
  )
}

export default Game
