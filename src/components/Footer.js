'use client'

import { useState } from 'react'
import styles from './Footer.module.css'
import ContactModal from './ContactModal'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <p className={styles.text}>
            &copy; {currentYear} My Portfolio. Built with Next.js & Supabase
          </p>
          <div className={styles.links}>
            <a href="https://github.com/lns2023" target="_blank" rel="noopener noreferrer" className={styles.link}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/leah-s-4860bb207/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              LinkedIn
            </a>
            <button onClick={() => setIsModalOpen(true)} className={styles.link}>
              Contact
            </button>
          </div>
        </div>
      </footer>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
