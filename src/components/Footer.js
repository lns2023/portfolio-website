'use client'

import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>
          &copy; {currentYear} My Portfolio. Built with Next.js & Supabase
        </p>
        <div className={styles.links}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
          <a href="mailto:contact@example.com" className={styles.link}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
