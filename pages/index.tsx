import styles from '@/pages/index.module.css'
import Calculator from "@/components/Calculator"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Roman Numeral Calculator</h1>

      <br />
      <Calculator />
    </div>
  )
}
