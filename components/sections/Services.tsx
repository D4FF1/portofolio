'use client'

import { motion } from 'framer-motion'
import ServiceCard from '@/components/ui/ServiceCard'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'Creating intuitive interfaces and user experiences that solve real problems and delight users.',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping'],
    },
    {
      id: 2,
      title: 'Product Design',
      description: 'End-to-end product design from concept to implementation with focus on user needs.',
      icon: '📦',
      features: ['Strategy', 'Design System', 'Implementation'],
    },
    {
      id: 3,
      title: 'Web Design',
      description: 'Modern, responsive web designs that combine aesthetics with functionality.',
      icon: '🌐',
      features: ['Responsive Design', 'Performance', 'SEO Optimization'],
    },
    {
      id: 4,
      title: 'Branding',
      description: 'Comprehensive brand identity design from logo to complete visual guidelines.',
      icon: '✨',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    },
    {
      id: 5,
      title: 'Interaction Design',
      description: 'Crafting meaningful interactions and animations that enhance user experience.',
      icon: '⚡',
      features: ['Animation', 'Micro-interactions', 'User Flows'],
    },
    {
      id: 6,
      title: 'Design Consulting',
      description: 'Strategic design consultation to elevate your digital products and services.',
      icon: '💡',
      features: ['Audit', 'Strategy', 'Optimization'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section
      id="service"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
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
            Services
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Designing digital solutions<br />that empower your visions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            I create user-focused designs and products that blend creativity, function, and innovation to deliver real value.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
