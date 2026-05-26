'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'outline'
  className?: string
}

export default function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const baseClass =
    variant === 'primary'
      ? 'btn-primary'
      : 'btn-outline'

  return (
    <motion.button
      className={`${baseClass} ${className} relative overflow-hidden group`}
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Ripple background */}
      <motion.span
        className={`absolute inset-0 ${
          variant === 'primary'
            ? 'bg-white opacity-0 group-hover:opacity-20'
            : 'bg-blue-50 opacity-0 group-hover:opacity-100'
        }`}
        initial={false}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  )
}
