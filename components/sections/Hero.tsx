'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30 -ml-40 -mb-40"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left - Heading & Text */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-sm font-600 text-blue-600 tracking-wide uppercase">
                Portfolio
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight italic mb-8"
            >
              I'm<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Ethan
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-600 leading-relaxed mb-8"
            >
              Hello, I'm Ethan Miles, a Digital Product Designer passionate about creating exceptional digital experiences. I design intuitive interfaces and user-centric experiences that blend creativity, function, and innovation.
            </motion.p>

            <motion.button
              variants={itemVariants}
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Discuss
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Center - Profile Image */}
          <motion.div
            className="lg:col-span-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-96 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 blur-2xl opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-premium bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <Image
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                  alt="Ethan Miles"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Follow & Typography */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Follow Section */}
            <motion.div
              variants={itemVariants}
              className="mb-12 bg-white rounded-2xl p-6 shadow-soft border border-gray-100"
            >
              <h3 className="text-sm font-600 text-gray-900 mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {[
                  { icon: '𝕏', label: 'Twitter' },
                  { icon: '⚡', label: 'LinkedIn' },
                  { icon: '📷', label: 'Instagram' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-lg hover:bg-blue-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="text-sm text-gray-600 leading-relaxed mb-12"
            >
              <p>
                I design intuitive interface and develop user-centric experiences to deliver real value.
              </p>
            </motion.div>

            {/* Background Typography */}
            <motion.div
              variants={itemVariants}
              className="text-8xl md:text-9xl font-bold text-gray-100 leading-none absolute right-0 top-1/2 -translate-y-1/2 -z-10 whitespace-nowrap italic opacity-50"
            >
              DESIGN
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
