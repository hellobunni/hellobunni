'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Button } from '@/components/button'
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

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    closed: {
      opacity: 1,
      y: '0%',
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  const mobileMenuVariant = {
    opened: {
      y: '0%',
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: '-100%',
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  }

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  }

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  }

  const liVariant = {
    opened: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.65,
        ease: 'easeOut',
      },
    },
    closed: {
      opacity: 0,
      y: '100%',
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  }

  const fadeInStart = { opacity: 0 }
  const fadeInEnd = { opacity: 1 }
  const fadeInTransition = { duration: 1 }
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
      <Button
        variant="link"
        size="sm"
        icon={<AiOutlineMenu size={22} />}
        onClick={toggleMobileNav}
        ariaLabel="Toggle mobile menu"
        className="block sm:hidden"
      />
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
