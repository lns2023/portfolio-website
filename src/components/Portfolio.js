'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import styles from './Portfolio.module.css'
import { supabase } from '../lib/supabase'

const projects = [
  {
    id: 1,
    title: 'Official Gazette',
    url: 'https://officialgazette.gov.ph',
    description: 'Government official publications and news portal',
    category: 'Government'
  },
  {
    id: 2,
    title: 'PCO',
    url: 'https://pco.gov.ph',
    description: 'Presidential Communications Operations portal',
    category: 'Government'
  },
  {
    id: 3,
    title: 'Greenworks Australia',
    url: 'https://greenworksaustralia.com.au',
    description: 'Eco-friendly outdoor power equipment',
    category: 'E-commerce'
  },
  {
    id: 4,
    title: 'Rato Power Products',
    url: 'https://ratopowerproducts.com.au/',
    description: 'Power tools and equipment supplier',
    category: 'E-commerce'
  },
  {
    id: 5,
    title: 'Opdee',
    url: 'https://opdee.com.au',
    description: 'Professional business solutions',
    category: 'Business'
  },
  {
    id: 6,
    title: 'Bold Metals',
    url: 'https://boldmetals.com.au/',
    description: 'Metal fabrication and manufacturing',
    category: 'Manufacturing'
  },
  {
    id: 7,
    title: 'Bold Metals Orders',
    url: 'https://orders.boldmetals.com.au/',
    description: 'Order management system for Bold Metals',
    category: 'Web App'
  },
  {
    id: 8,
    title: 'WFH Compliance App',
    url: 'https://wfh-compliance-app.pages.dev/',
    description: 'Work from home compliance tracking system',
    category: 'Web App'
  },
  {
    id: 9,
    title: 'Mavent Inicio',
    url: 'https://inicio.mavent.com.au/',
    description: 'Modern business platform',
    category: 'Business'
  }
]

export default function Portfolio() {
  const [views, setViews] = useState({})
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    // Track page views in Supabase (optional)
    trackPageView()
  }, [])

  const trackPageView = async () => {
    try {
      // You can uncomment this when Supabase is configured
      // const { data, error } = await supabase
      //   .from('page_views')
      //   .insert([{ page: 'portfolio', timestamp: new Date() }])
    } catch (error) {
      console.log('Analytics tracking disabled - configure Supabase to enable')
    }
  }

  const categories = ['All', ...new Set(projects.map(p => p.category))]

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="portfolio" className={styles.portfolio}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h2 className={styles.title}>My Portfolio</h2>
        <p className={styles.description}>
          A collection of projects I've worked on
        </p>
      </motion.div>

      <div className={styles.filterBar}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.grid}
      >
        {filteredProjects.map((project) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className={styles.card}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.category}>{project.category}</span>
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.link}>Visit Site →</span>
              </div>
            </div>
            <div className={styles.cardGlow}></div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
