import styles from './Button.module.css';

export default function Button({text,isPrimary,onclick,...rest}) {
  return (
    
      <button
      onClick={onclick}
      className={isPrimary? styles.primary_btn : styles.outline_btn}
       {...rest} >
        {text}
        </button>
  )
}
