'use client'

import { motion } from 'framer-motion'

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
  return (
    <motion.div
      className="group relative rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-100 shadow-soft hover:shadow-premium transition-all duration-300 h-full flex flex-col overflow-hidden cursor-pointer"
      whileHover={{ y: -8, borderColor: '#3b82f6' }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-50 to-transparent -z-10"></div>

      {/* Icon */}
      <motion.div
        className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.2, rotate: 5 }}
      >
        {service.icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
        {service.description}
      </p>

      {/* Features */}
      <div className="space-y-2">
        {service.features.map((feature, index) => (
          <motion.div
            key={feature}
            className="flex items-center gap-3 text-sm text-gray-600"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <svg
              className="w-4 h-4 text-blue-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </motion.div>
        ))}
      </div>

      {/* Arrow */}
      <motion.div
        className="mt-6 inline-flex items-center text-blue-600 font-600 text-sm group-hover:translate-x-2 transition-transform duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </motion.div>
    </motion.div>
  )
}
