import styles from './Error.module.css';
export default function Error() {
  return (
    <div className={styles.error_message}>
      <p>You have not selected any number</p>
    </div>
  )
}
