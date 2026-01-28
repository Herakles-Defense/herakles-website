'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface TimelineItemProps {
  number: string
  title: string
  description: string | React.ReactNode
  icon?: LucideIcon
  isLast?: boolean
}

export default function TimelineItem({
  number,
  title,
  description,
  icon: Icon,
  isLast = false
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline Line + Node */}
      <div className="relative flex flex-col items-center">
        {/* Node Circle */}
        <div className="relative z-10 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-primary to-orange-hover shadow-lg ring-4 ring-black-secondary">
          {Icon ? (
            <Icon size={24} className="text-white" />
          ) : (
            <span className="text-lg md:text-xl font-bold text-white">{number}</span>
          )}
        </div>

        {/* Vertical Line (only if not last) */}
        {!isLast && (
          <div className="absolute top-12 md:top-14 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-primary/60 to-transparent" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-12 md:pb-16">
        <div className="glass-card hover:border-orange-primary/50 transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-bold text-white-primary mb-4">
            {title}
          </h3>
          <div className="text-white-secondary leading-relaxed">
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
