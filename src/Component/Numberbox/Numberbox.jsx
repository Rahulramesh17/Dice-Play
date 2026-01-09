import styles from './Numberbox.module.css';
export default function Numberbox({text,selection,selected,...rest}) {
    const isSelected = selected === text; 
  return (
      <button
      onClick={()=>selection(text)}
      className={isSelected ? styles.activebutton :styles.numberbutton}>
        {text}
      </button>
 
  )
}
