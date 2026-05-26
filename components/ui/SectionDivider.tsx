'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'default' | 'wave' | 'gradient'
}

export default function SectionDivider({ variant = 'default' }: SectionDividerProps) {
  if (variant === 'wave') {
    return (
      <div className="relative h-20 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </motion.defs>
          <motion.path
            d="M0,50 Q360,10 720,50 T1440,50 L1440,120 L0,120 Z"
            fill="url(#waveGradient)"
            animate={{ d: ['M0,50 Q360,10 720,50 T1440,50 L1440,120 L0,120 Z', 'M0,60 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z', 'M0,50 Q360,10 720,50 T1440,50 L1440,120 L0,120 Z'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'gradient') {
    return (
      <div className="relative h-1 my-12 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    )
  }

  return (
    <motion.div
      className="h-1 my-12 rounded-full bg-gradient-to-r from-transparent via-blue-300 to-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    />
  )
}
