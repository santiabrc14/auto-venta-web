import Gallery from '@/components/Gallery'
import CarDetails from '@/components/CarDetails'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.leftColumn}>
            <Gallery />
          </div>
          <div className={styles.rightColumn}>
            <CarDetails />
          </div>
        </div>
      </div>
    </main>
  )
}