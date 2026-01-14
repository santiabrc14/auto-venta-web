'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './Gallery.module.scss'

const carImages = [
  '/images/auto-1.jpg',
  '/images/auto-2.jpg',
  '/images/auto-3.jpg',
  '/images/auto-4.jpg',
  '/images/auto-5.jpg',
  '/images/auto-6.jpg',
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <section className={styles.gallery}>
      <div className="container">
        <h2 className={styles.title}>Galería de Fotos</h2>
        
        <div className={styles.mainImage}>
          <Image
            src={carImages[selectedImage]}
            alt={`Auto foto ${selectedImage + 1}`}
            width={800}
            height={600}
            className={styles.image}
            priority
          />
        </div>
        
        <div className={styles.thumbnails}>
          {carImages.map((image, index) => (
            <button
              key={index}
              className={`${styles.thumbnail} ${index === selectedImage ? styles.active : ''}`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image}
                alt={`Miniatura ${index + 1}`}
                width={120}
                height={90}
                className={styles.thumbnailImage}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}