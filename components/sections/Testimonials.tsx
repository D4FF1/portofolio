'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import TestimonialCard from '@/components/ui/TestimonialCard'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: 'An exceptional designer with a great sense for both form and function. The final product was not only visually appealing but also highly functional and user-friendly.',
      author: 'Daniel Budianto',
      role: 'Founder, Tech Startup',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
    },
    {
      id: 2,
      quote: 'Working with Ethan was a game-changer for our brand. He understood our vision and delivered designs that exceeded all expectations. Highly recommended!',
      author: 'Sarah Johnson',
      role: 'CEO, Design Agency',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
    },
    {
      id: 3,
      quote: 'Ethan brought our product ideas to life with stunning visuals and seamless interactions. The attention to detail is remarkable.',
      author: 'Michael Chen',
      role: 'Product Manager, E-commerce',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
    },
  ]

  return (
    <section
      id="testimonials"
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
          <p className="text-sm font-600 text-blue-600 tracking-wide uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Testimonials that<br />
            highlight my work
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl">
            Real words from clients and collaborators about the vision I bring to their projects
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Testimonial */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-2xl p-8 md:p-12 border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-lg md:text-xl font-600 text-gray-900 mb-4">
                "Ethan brought our entire design vision to life with precision and creativity. His understanding of user behavior and design principles is truly exceptional."
              </p>
              <div>
                <p className="font-600 text-gray-900">Sophia Rodriguez</p>
                <p className="text-gray-600">Founder, Digital Studio</p>
              </div>
            </div>
            <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
              <Image
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Sophia Rodriguez"
                width={120}
                height={120}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
