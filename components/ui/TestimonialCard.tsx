'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
  return (
    <motion.div
      className="group rounded-2xl bg-white p-8 shadow-soft hover:shadow-premium border border-gray-100 transition-all duration-300 h-full flex flex-col hover:border-blue-200"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-lg"
          >
            ⭐
          </motion.span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 mb-6">
        <p className="text-gray-700 leading-relaxed relative">
          <span className="text-4xl text-blue-200 absolute -top-2 -left-2">"</span>
          <span className="relative pl-2">{testimonial.quote}</span>
        </p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <div className="w-12 h-12 flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            width={48}
            height={48}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-600 text-gray-900 text-sm">{testimonial.author}</p>
          <p className="text-gray-600 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}
