'use client'
import { useState, useRef, TouchEvent } from 'react'
import Image from 'next/image'
import styles from './Gallery.module.scss'

const carImages = [
  '/images/auto-1.jpg',
  '/images/auto-2.jpg',
  '/images/auto-3.jpg',
  '/images/auto-4.jpg',
  '/images/auto-5.jpg',
  '/images/auto-6.jpg',
  '/images/auto-7.jpg',
  '/images/auto-8.jpg',
  '/images/auto-9.jpg',
  '/images/auto-10.jpg',
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage()
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prevImage()
    }
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % carImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + carImages.length) % carImages.length)
  }

  return (
    <div className={styles.gallery}>
      <div 
        className={styles.imageCard}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={carImages[selectedImage]}
          alt={`Auto foto ${selectedImage + 1}`}
          width={800}
          height={600}
          className={styles.image}
          priority
        />
        
        <button className={styles.navBtn + ' ' + styles.prev} onClick={prevImage}>
          ‹
        </button>
        <button className={styles.navBtn + ' ' + styles.next} onClick={nextImage}>
          ›
        </button>
        
        <div className={styles.indicators}>
          {carImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === selectedImage ? styles.active : ''}`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}