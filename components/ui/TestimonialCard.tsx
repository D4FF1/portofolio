'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  image: string
  rating: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group rounded-2xl bg-white p-8 shadow-soft hover:shadow-premium border border-gray-100 h-full flex flex-col cursor-pointer relative overflow-hidden"
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-50/40 to-transparent transition-opacity duration-300 -z-10"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Rating */}
      <div className="flex gap-2 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.span
            key={i}
            className="text-xl"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              delay: i * 0.1,
              type: 'spring',
              stiffness: 400,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            ⭐
          </motion.span>
        ))}
      </div>

      {/* Quote */}
      <motion.blockquote className="flex-1 mb-6">
        <motion.p
          className="text-gray-700 leading-relaxed relative"
          animate={{ color: isHovered ? '#374151' : '#374151' }}
        >
          <motion.span
            className="text-4xl text-blue-200/60 absolute -top-2 -left-2 group-hover:text-blue-300 transition-colors"
            animate={{ scale: isHovered ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          >
            "
          </motion.span>
          <span className="relative pl-2">{testimonial.quote}</span>
        </motion.p>
      </motion.blockquote>

      {/* Divider */}
      <motion.div
        className="h-0.5 mb-6 bg-gradient-to-r from-transparent via-blue-200 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      />

      {/* Author */}
      <div className="flex items-center gap-4">
        <motion.div
          className="w-12 h-12 flex-shrink-0 relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            width={48}
            height={48}
            className="w-full h-full rounded-full object-cover border-2 border-blue-200"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            className="font-600 text-gray-900 text-sm transition-colors duration-300"
            animate={{ color: isHovered ? '#1e40af' : '#111827' }}
          >
            {testimonial.author}
          </motion.p>
          <motion.p
            className="text-gray-600 text-xs transition-colors duration-300"
            animate={{ color: isHovered ? '#4b5563' : '#6b7280' }}
          >
            {testimonial.role}
          </motion.p>
        </motion.div>
      </div>

      {/* Border */}
      <motion.div
        className="absolute inset-0 border-2 border-blue-300 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
