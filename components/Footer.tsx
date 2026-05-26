'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 italic">Ethan Miles</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Digital Product Designer crafting beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-600 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Services', 'Testimonials'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-600 mb-4">Services</h4>
            <ul className="space-y-2">
              {['UI/UX Design', 'Product Design', 'Branding', 'Web Design'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-600 mb-4">Connect</h4>
            <div className="flex gap-3">
              {['twitter', 'linkedin', 'instagram', 'dribbble'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs font-bold">
                    {social.charAt(0).toUpperCase()}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <motion.p
              whileHover={{ color: '#f3f4f6' }}
              transition={{ duration: 0.3 }}
            >
              &copy; {currentYear} Ethan Miles. All rights reserved.
            </motion.p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service'].map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors relative group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ color: '#fff', x: 2 }}
                >
                  {item}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
