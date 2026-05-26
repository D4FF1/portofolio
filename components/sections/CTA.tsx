'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -mr-48"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Ready to start your next
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              project together?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's create something extraordinary. Whether you have a specific project in mind or just want to explore possibilities, I'm here to help bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>

            <motion.button
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </div>

          {/* Contact Info */}
          <motion.div
            className="mt-16 pt-16 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-sm text-gray-600 mb-2">Email</p>
              <a
                href="mailto:hello@ethanmiles.design"
                className="text-lg font-600 text-gray-900 hover:text-blue-600 transition-colors"
              >
                hello@ethanmiles.design
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Phone</p>
              <a
                href="tel:+1234567890"
                className="text-lg font-600 text-gray-900 hover:text-blue-600 transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Location</p>
              <p className="text-lg font-600 text-gray-900">San Francisco, USA</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
