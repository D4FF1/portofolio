'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-100 shadow-soft hover:shadow-premium h-full flex flex-col overflow-hidden cursor-pointer"
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-50/80 via-blue-50/40 to-transparent -z-10 transition-opacity duration-300"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Accent Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* Icon */}
      <motion.div
        className="text-5xl mb-6 inline-block"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 400 }}
      >
        {service.icon}
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300"
        animate={{ color: isHovered ? '#1e40af' : '#111827' }}
      >
        {service.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 transition-colors duration-300"
        animate={{ color: isHovered ? '#374151' : '#4b5563' }}
      >
        {service.description}
      </motion.p>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <motion.div
            key={feature}
            className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-700 transition-colors"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            animate={
              isHovered
                ? { x: 4, transition: { duration: 0.2 } }
                : { x: 0, transition: { duration: 0.2 } }
            }
          >
            <motion.div
              className="flex-shrink-0"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="w-4 h-4 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* Arrow */}
      <motion.div
        className="inline-flex items-center text-blue-600 font-600 text-sm"
        animate={{
          x: isHovered ? 4 : 0,
          color: isHovered ? '#1e40af' : '#3b82f6',
        }}
        transition={{ duration: 0.3 }}
      >
        Learn More
        <motion.svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </motion.svg>
      </motion.div>

      {/* Border Animation */}
      <motion.div
        className="absolute inset-0 border-2 border-blue-400 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
