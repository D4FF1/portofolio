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
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <motion.button
                className="btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                  initial={false}
                />
                <span className="relative">Get in Touch</span>
              </motion.button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <motion.button
                className="btn-outline group relative overflow-hidden"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.span
                  className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 -z-10"
                  initial={false}
                />
                <span className="relative">View Portfolio</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            className="mt-16 pt-16 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                label: 'Email',
                value: 'hello@ethanmiles.design',
                href: 'mailto:hello@ethanmiles.design',
                icon: '✉️',
              },
              {
                label: 'Phone',
                value: '+1 (234) 567-890',
                href: 'tel:+1234567890',
                icon: '📱',
              },
              {
                label: 'Location',
                value: 'San Francisco, USA',
                href: '#',
                icon: '📍',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="text-3xl mb-2 transition-transform group-hover:scale-110 duration-300 inline-block">
                  {item.icon}
                </div>
                <p className="text-sm text-gray-600 mb-2 group-hover:text-gray-700 transition-colors">
                  {item.label}
                </p>
                <motion.a
                  href={item.href}
                  className="text-lg font-600 text-gray-900 hover:text-blue-600 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {item.value}
                </motion.a>
                <motion.div
                  className="h-0.5 mt-3 bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
