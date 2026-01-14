import styles from './CarDetails.module.scss'

const carData = {
  marca: 'Toyota',
  modelo: 'Corolla',
  año: 2020,
  kilometraje: '45,000 km',
  combustible: 'Nafta',
  transmision: 'Manual',
  color: 'Blanco',
  precio: '$15,500,000',
  descripcion: 'Auto en excelente estado, único dueño. Mantenimiento al día, service completo. Papeles en regla. Acepto permuta por auto de menor valor.',
  caracteristicas: [
    'Aire acondicionado',
    'Dirección asistida',
    'Cierre centralizado',
    'Alarma',
    'Radio con Bluetooth',
    'Llantas de aleación',
    'Airbags frontales',
    'ABS'
  ]
}

export default function CarDetails() {
  return (
    <section className={styles.details}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2 className={styles.title}>
              {carData.marca} {carData.modelo} {carData.año}
            </h2>
            
            <div className={styles.price}>
              {carData.precio}
            </div>
            
            <div className={styles.specs}>
              <div className={styles.spec}>
                <span className={styles.label}>Kilometraje:</span>
                <span className={styles.value}>{carData.kilometraje}</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.label}>Combustible:</span>
                <span className={styles.value}>{carData.combustible}</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.label}>Transmisión:</span>
                <span className={styles.value}>{carData.transmision}</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.label}>Color:</span>
                <span className={styles.value}>{carData.color}</span>
              </div>
            </div>
            
            <div className={styles.description}>
              <h3>Descripción</h3>
              <p>{carData.descripcion}</p>
            </div>
          </div>
          
          <div className={styles.features}>
            <h3>Características</h3>
            <ul className={styles.featuresList}>
              {carData.caracteristicas.map((feature, index) => (
                <li key={index} className={styles.feature}>
                  ✓ {feature}
                </li>
              ))}
            </ul>
            
            <div className={styles.contact}>
              <h3>Contacto</h3>
              <button className="btn primary">
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}