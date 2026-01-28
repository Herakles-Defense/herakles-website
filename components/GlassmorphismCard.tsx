'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface GlassmorphismCardProps {
  icon?: LucideIcon
  title: string
  description: string
  children?: ReactNode
  className?: string
  iconColor?: string
}

export default function GlassmorphismCard({
  icon: Icon,
  title,
  description,
  children,
  className = '',
  iconColor = 'text-orange-primary'
}: GlassmorphismCardProps) {
  return (
    <motion.div
      className={`glass-card group h-full flex flex-col ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {Icon && (
        <div className={`mb-4 ${iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <Icon size={32} strokeWidth={1.5} />
        </div>
      )}

      {children && (
        <div className="mb-4">
          {children}
        </div>
      )}

      <h3 className="text-2xl font-bold mb-3 text-white-primary">
        {title}
      </h3>

      <p className="text-white-secondary leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  )
}
