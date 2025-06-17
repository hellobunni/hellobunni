'use client'

import React, { useState } from 'react'

import type { Theme } from './types'

import { useTheme } from '..'
import { themeLocalStorageKey } from './types'

/**
 * ThemeSelector Component
 *
 * A simple toggle button that switches between light and dark themes.
 * Uses localStorage to persist the user's theme preference.
 *
 * Features:
 * - Toggles between light (☀️) and dark (🌙) themes
 * - Persists theme choice in localStorage
 * - Shows current theme with appropriate emoji icon
 * - Includes hover effects for better UX
 */
export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  // Track current theme state - only 'light' or 'dark' (no auto option)
  const [value, setValue] = useState<'light' | 'dark'>('light')

  /**
   * Updates the theme and local state
   * @param themeToSet - The theme to switch to ('light' or 'dark')
   */
  const onThemeChange = (themeToSet: 'light' | 'dark') => {
    setTheme(themeToSet)
    setValue(themeToSet)
  }

  /**
   * Toggles between light and dark themes
   * Called when the button is clicked
   */
  const toggleTheme = () => {
    const newTheme = value === 'light' ? 'dark' : 'light'
    onThemeChange(newTheme)
  }

  // Initialize theme from localStorage on component mount
  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    // Default to 'light' if no preference is stored
    const currentTheme = preference === 'dark' ? 'dark' : 'light'
    setValue(currentTheme)
    setTheme(currentTheme)
  }, [setTheme])

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-auto bg-transparent gap-2 pl-0 md:pl-3 border-none p-2 rounded transition-colors"
    >
      {/* Show moon emoji for dark mode, sun emoji for light mode */}
      {value === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
