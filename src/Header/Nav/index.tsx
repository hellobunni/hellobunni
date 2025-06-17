'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { useTheme } from '@/providers/Theme'
import { AiOutlineMenu } from 'react-icons/ai'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import clsx from 'clsx'
import MobileNav, { type MobileNavItem } from './MobileNav'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const { theme } = useTheme()
  const navItems = data?.navItems || []
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  console.log(navItems)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }

  return (
    <>
      <nav className="gap-3 items-center hidden sm:flex">
        {navItems.map(({ link }, i) => (
          <CMSLink {...link} appearance="link" key={i} />
        ))}
        <ThemeSelector />
      </nav>
      <button
        onClick={toggleMobileNav}
        className="p-2 hover:bg-gray-100 rounded-md transition-colors block sm:hidden"
        aria-label="Toggle mobile menu"
      >
        <AiOutlineMenu size={22} />
      </button>
      {isMobileNavOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMobileNav}
            aria-hidden="true"
          />
          <MobileNav navItems={navItems as MobileNavItem[]} onClose={closeMobileNav} />
        </>
      )}
    </>
  )
}
