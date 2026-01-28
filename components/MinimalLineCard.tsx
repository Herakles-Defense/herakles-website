'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface MinimalLineCardProps {
  icon?: LucideIcon
  title: string
  description: string
  children?: ReactNode
  className?: string
  iconColor?: string
}

export default function MinimalLineCard({
  icon: Icon,
  title,
  description,
  children,
  className = '',
  iconColor = 'text-orange-primary'
}: MinimalLineCardProps) {
  return (
    <motion.div
      className={`p-8 border-l-2 border-gray-800 transition-all duration-300 hover:border-orange-primary ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="line-accent mb-4" />

      {Icon && (
        <div className={`mb-4 ${iconColor}`}>
          <Icon size={28} strokeWidth={1.5} />
        </div>
      )}

      <h3 className="text-2xl font-bold mb-3 text-white-primary">
        {title}
      </h3>

      <p className="text-white-secondary leading-relaxed">
        {description}
      </p>

      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </motion.div>
  )
}
