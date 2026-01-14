'use client'
import { useState } from 'react'
import styles from './CarDetails.module.scss'

const carData = {
  marca: 'Citröen',
  modelo: 'C4 Pack Look',
  año: 2012,
  kilometraje: '179000km',
  combustible: 'Nafta',
  transmision: 'Manual',
  motor: '1.6 16V',
  precio: 'USD 6500',
  descripcion: 'Funciona todo a la perfección, segundo dueño. Services al día, VTV hasta 2027, Cubiertas nuevas. ',
  caracteristicas: [
    'Dirección asistida',
    'Aire acondicionado',
    'Cierre centralizado',
    'ABS',
    'Alarma',
    'Stereo con Bluetooth',
    'Llantas de aleación',
    'Airbags frontales',
    'Cristales delanteros electricos'
  ]
}

export default function CarDetails() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = '2213041813'
  const message = `Hola Santia, Me interesa el ${carData.marca} ${carData.modelo} ${carData.año}`
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <>
      <div className={styles.description}>
        <h1 className={styles.title}>
          {carData.marca} {carData.modelo}
        </h1>
        <div className={styles.year}>{carData.año}</div>
        <p className={styles.text}>{carData.descripcion}</p>
      </div>

      <div className={styles.card}>
        <div className={styles.specs}>
          <div className={styles.spec}>
            <span className={styles.label}>Kilometraje</span>
            <span className={styles.value}>{carData.kilometraje}</span>
          </div>
          <div className={styles.spec}>
            <span className={styles.label}>Combustible</span>
            <span className={styles.value}>{carData.combustible}</span>
          </div>
          <div className={styles.spec}>
            <span className={styles.label}>Transmisión</span>
            <span className={styles.value}>{carData.transmision}</span>
          </div>
          <div className={styles.spec}>
            <span className={styles.label}>Motor</span>
            <span className={styles.value}>{carData.motor}</span>
          </div>
        </div>
        
        <div className={styles.features}>
          <button 
            className={styles.featuresToggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Características</span>
            <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▼</span>
          </button>
          
          {isOpen && (
            <ul className={styles.featuresList}>
              {carData.caracteristicas.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.contactSection}>
          <div className={styles.price}>{carData.precio}</div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
            📱 Contactar por WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}