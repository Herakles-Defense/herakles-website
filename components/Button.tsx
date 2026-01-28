'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  href?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  href,
  onClick,
  disabled = false,
  loading = false,
  className = '',
  type = 'button'
}: ButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  // Variant classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost'
  }

  const buttonClasses = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    inline-flex items-center justify-center gap-2
    font-semibold rounded-lg
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
  `.trim()

  const iconMotion = {
    rest: { x: 0 },
    hover: { x: iconPosition === 'right' ? 4 : -4 }
  }

  const content = (
    <>
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {!loading && Icon && iconPosition === 'left' && (
        <motion.div variants={iconMotion}>
          <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
        </motion.div>
      )}

      <span>{children}</span>

      {!loading && Icon && iconPosition === 'right' && (
        <motion.div variants={iconMotion}>
          <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
        </motion.div>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          className={buttonClasses}
          whileHover="hover"
          initial="rest"
          whileTap={{ scale: 0.95 }}
        >
          {content}
        </motion.div>
      </Link>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      whileHover="hover"
      initial="rest"
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  )
}
