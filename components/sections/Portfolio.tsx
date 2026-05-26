'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PortfolioCard from '@/components/ui/PortfolioCard'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Thrift Shop App',
      category: 'UI/UX Design Mobile App',
      year: 2025,
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      tags: ['Mobile', 'E-commerce'],
    },
    {
      id: 2,
      title: 'Tape Branding',
      category: 'Logo, Branding & Collateral',
      year: 2025,
      image: 'https://images.pexels.com/photos/3651795/pexels-photo-3651795.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      tags: ['Branding'],
    },
    {
      id: 3,
      title: 'Book Design',
      category: 'Printing, Layout & Collateral',
      year: 2023,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      tags: ['Print', 'Layout'],
    },
    {
      id: 4,
      title: 'Livora Estate',
      category: 'UI/UX Design Web Design',
      year: 2024,
      image: 'https://images.pexels.com/photos/3721456/pexels-photo-3721456.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      tags: ['Web', 'Design'],
    },
    {
      id: 5,
      title: 'Digital Agency',
      category: 'Website Redesign',
      year: 2024,
      image: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      tags: ['Web', 'Branding'],
    },
    {
      id: 6,
      title: 'Mobile Platform',
      category: 'Product Design & Development',
      year: 2023,
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      tags: ['Mobile', 'Product'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm font-600 text-blue-600 tracking-wide uppercase mb-4"
            animate={{ letterSpacing: ['0.1em', '0.15em', '0.1em'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Recent Works
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mt-6 max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of projects reflecting process and problem-solving
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              viewport={{ once: true, margin: '-50px' }}
              className="group"
            >
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
