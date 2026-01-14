import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.title}>Auto en Venta</h1>
        <p className={styles.subtitle}>Excelente oportunidad - Único dueño</p>
      </div>
    </header>
  )
}