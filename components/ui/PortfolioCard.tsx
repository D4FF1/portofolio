'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  category: string
  year: number
  image: string
  tags: string[]
}

interface PortfolioCardProps {
  project: Project
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-premium cursor-pointer h-full flex flex-col relative"
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 md:h-72 bg-gray-100">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Year Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-gray-900/85 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm font-600 border border-white/20"
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
        >
          {project.year}
        </motion.div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.svg
            className="w-12 h-12 text-white drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ scale: 0, rotate: -180 }}
            animate={isHovered ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">
            {project.category}
          </p>
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-500 group-hover:bg-blue-100 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Border Accent */}
      <motion.div
        className="absolute inset-0 border-2 border-blue-400 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
