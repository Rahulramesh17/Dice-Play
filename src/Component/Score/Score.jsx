import styles from './Score.module.css';
export default function Score({score}) {
  return (
    <div className={styles.score}>
      <h1>{score}</h1>
    </div>
  )
}
