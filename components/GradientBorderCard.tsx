'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface GradientBorderCardProps {
  icon?: LucideIcon
  title: string
  description: string
  children?: ReactNode
  className?: string
  iconColor?: string
}

export default function GradientBorderCard({
  icon: Icon,
  title,
  description,
  children,
  className = '',
  iconColor = 'text-orange-primary'
}: GradientBorderCardProps) {
  return (
    <motion.div
      className={`relative rounded-xl p-[2px] group h-full ${className}`}
      style={{
        background: 'linear-gradient(135deg, var(--color-orange-primary), transparent)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="bg-black-secondary rounded-xl p-8 h-full flex flex-col">
        {Icon && (
          <div className={`mb-4 ${iconColor} transition-transform duration-300 group-hover:rotate-6`}>
            <Icon size={32} strokeWidth={1.5} />
          </div>
        )}

        <h3 className="text-2xl font-bold mb-3 text-white-primary">
          {title}
        </h3>

        <p className="text-white-secondary leading-relaxed flex-grow">
          {description}
        </p>

        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </motion.div>
  )
}
