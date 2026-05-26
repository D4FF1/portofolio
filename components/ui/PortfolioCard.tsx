'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
  return (
    <motion.div
      className="group rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-premium transition-all duration-300 cursor-pointer h-full flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 md:h-72 bg-gray-100">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Year Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-600"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {project.year}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4">{project.category}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Arrow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300"
        initial={false}
      >
        <motion.svg
          className="w-8 h-8 text-white opacity-0 group-hover:opacity-100"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
