'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import StatCounter from '@/components/ui/StatCounter'

export default function About() {
  const stats = [
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 109, suffix: '+', label: 'Projects Completed' },
    { value: 24, suffix: '/7', label: 'Support Available' },
    { value: 96, suffix: '%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-600 text-blue-600 tracking-wide uppercase mb-4">
            About Me
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Designing with Purpose,
            <br />
            Building with Passion
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            className="relative h-96 md:h-full md:min-h-96"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-premium">
              <Image
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="About Ethan"
                width={500}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate digital product designer who crafts user-focused designs that are both functional and meaningful. My mission is to bridge the gap between aesthetics and usability, creating designs that resonate with users and deliver real business value.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-600 text-gray-900 mb-2">My Approach</h4>
                <p className="text-gray-600">
                  I believe in creating thoughtful designs that solve real problems. Every pixel, every interaction, and every animation serves a purpose in delivering an exceptional user experience.
                </p>
              </div>

              <div>
                <h4 className="font-600 text-gray-900 mb-2">What I Specialize In</h4>
                <p className="text-gray-600">
                  UI/UX Design, Product Design, Web Design, Brand Identity, Interaction Design, and Digital Strategy.
                </p>
              </div>
            </div>

            <motion.button
              className="btn-primary inline-flex items-center gap-2 mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delayChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-medium transition-all text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)' }}
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-3">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-600 font-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
