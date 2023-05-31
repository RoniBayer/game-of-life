import Image from 'next/image'
import { Grid } from './components/Grid'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid />
    </main>
  )
}
