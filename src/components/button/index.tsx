'use client'

import { motion } from 'motion/react'
import clsx from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

// 🎨 Design System Types - These define our button's personality!
type Variant = 'primary' | 'secondary' | 'link'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  children?: ReactNode
  variant?: Variant
  size?: Size
  /**
   * 🎯 Accessibility helper: Provides context for screen readers
   * Use this when the button text alone doesn't convey the action
   */
  ariaLabel?: string
  /**
   * 🎭 Loading state - shows spinner and disables interaction
   * Perfect for async operations like form submissions!
   */
  loading?: boolean
  /**
   * 🎪 Icon to display (optional)
   * Can be positioned before or after the text
   */
  icon?: ReactNode
  /**
   * 📍 Icon position - where should the icon appear?
   */
  iconPosition?: 'left' | 'right'
  /**
   * 🚫 Disabled state - overrides loading state
   */
  disabled?: boolean
}

// 🎨 Base styles that make our button look fabulous!
const baseStyles =
  'inline-flex items-center justify-center font-medium cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed rounded-md relative overflow-hidden'

// 📏 Size variations - from tiny to chonky!
const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm min-h-[32px]',
  md: 'px-4 py-2.5 text-base min-h-[40px]',
  lg: 'px-6 py-3 text-lg min-h-[48px]',
}

// 🎭 Visual personality types - each has its own style!
const variantStyles = {
  primary:
    'bg-periwinkle text-white hover:bg-ultra-violet shadow-sm hover:shadow-md active:shadow-inner',
  secondary:
    'border-2 border-periwinkle text-periwinkle hover:bg-primary/10 hover:border-periwinkle bg-transparent',
  link: 'text-space-cadet hover:text-space-cadet-2  p-0 bg-transparent border-none shadow-none',
}

// 🎪 Icon spacing - gives icons some breathing room!
const iconStyles = {
  left: 'mr-2',
  right: 'ml-2',
}

// 🎯 Loading spinner component - cute little spinner for async actions!
const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-xl">
    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
  </div>
)

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  loading = false,
  icon,
  iconPosition = 'left',
  ariaLabel,
  'aria-label': ariaLabelProp,
  onClick,
  onKeyDown,
  type,
  form,
  formAction,
  formMethod,
  formNoValidate,
  formTarget,
  name,
  value,
  id,
  title,
  ..._props // 🚫 Ignore other props to avoid conflicts
}: ButtonProps) => {
  // 🎯 Combine aria-label props for maximum accessibility
  const finalAriaLabel = ariaLabel || ariaLabelProp

  // 🚫 Disable button when loading or explicitly disabled
  const isDisabled = disabled || loading

  // 🎪 Determine if we should show icon
  const showIcon = icon && !loading

  return (
    <motion.button
      // 🎭 Smooth animations that feel delightful!
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: loading ? 1 : 1.02 }}
      // 🎯 Accessibility attributes for screen readers
      aria-label={finalAriaLabel}
      aria-disabled={isDisabled}
      aria-busy={loading}
      // 🎨 Visual styling with all our personality!
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        // 🎪 Icon positioning
        showIcon && iconPosition === 'left' && 'pl-3',
        showIcon && iconPosition === 'right' && 'pr-3',
        className,
      )}
      // 🚫 Disable interactions when loading or disabled
      disabled={isDisabled}
      // 🎯 Prevent focus when disabled (but allow programmatic focus)
      tabIndex={isDisabled ? -1 : undefined}
      // 🎪 Standard button props (only the ones we need!)
      onClick={onClick}
      onKeyDown={onKeyDown}
      type={type}
      form={form}
      formAction={formAction}
      formMethod={formMethod}
      formNoValidate={formNoValidate}
      formTarget={formTarget}
      name={name}
      value={value}
      id={id}
      title={title}
    >
      {/* 🎪 Left icon */}
      {showIcon && iconPosition === 'left' && (
        <span className={iconStyles.left} aria-hidden="true">
          {icon}
        </span>
      )}

      {/* 📝 Button text - hidden when loading for cleaner UX */}
      <span className={loading ? 'opacity-0' : 'opacity-100'}>{children}</span>

      {/* 🎪 Right icon */}
      {showIcon && iconPosition === 'right' && (
        <span className={iconStyles.right} aria-hidden="true">
          {icon}
        </span>
      )}

      {/* 🎯 Loading spinner overlay */}
      {loading && <LoadingSpinner />}
    </motion.button>
  )
}
