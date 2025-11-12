'use client'

import { useEffect } from 'react'
import styles from './ContactModal.module.css'

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>Get in Touch</h2>
        <div className={styles.content}>
          <div className={styles.contactItem}>
            <div className={styles.icon}>📧</div>
            <div className={styles.details}>
              <h3 className={styles.label}>Email</h3>
              <a href="mailto:leahnikka16@gmail.com" className={styles.value}>
                leahnikka16@gmail.com
              </a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.icon}>📱</div>
            <div className={styles.details}>
              <h3 className={styles.label}>Phone</h3>
              <a href="tel:+639602364990" className={styles.value}>
                +63 960 236 4990
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
