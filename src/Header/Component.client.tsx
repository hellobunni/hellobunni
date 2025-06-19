'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { AlignRight, Rabbit, X } from 'lucide-react'
import Link from 'next/link'
import { CMSLink } from '@/components/Link'

type HeaderNavProps = {
  links?: {
    id?: string | null
    link: {
      type?: 'custom' | 'reference' | null
      newTab?: boolean | null
      reference?: {
        relationTo: string
        value: {
          id: number
          title: string
          slug: string
        }
      } | null
      url?: string
      label?: string
    }
  }[]
  phone?: string
  email?: string
  logo?: string
}

export default function HeaderClient({ links, phone, email, logo }: HeaderNavProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const hideNavItemsVariant = {
    opened: { opacity: 0, y: '-100%', transition: { duration: 0.5, ease: 'easeInOut' } },
    closed: { opacity: 1, y: '0%', transition: { delay: 1.1, duration: 0.5, ease: 'easeInOut' } },
  } as const

  const mobileMenuVariant = {
    opened: { y: '0%', transition: { delay: 0.15, duration: 1.1, ease: 'easeInOut' } },
    closed: {
      y: '-100%',
      transition: { delay: 0.35, duration: 0.63, ease: 'easeInOut' },
    },
  } as const

  const fadeInVariant = {
    opened: { opacity: 1, transition: { delay: 1.2 } },
    closed: { opacity: 0 },
  } as const

  const ulVariant = {
    opened: { transition: { delayChildren: 1, staggerChildren: 0.18 } },
    closed: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
  } as const

  const liVariant = {
    opened: {
      opacity: 1,
      y: '0%',
      transition: { duration: 0.65, ease: 'easeOut' },
    },
    closed: {
      opacity: 0,
      y: '100%',
      transition: { duration: 0.25, ease: 'easeInOut' },
    },
  } as const

  return (
    <motion.nav
      initial="closed"
      animate={mobileNavOpen ? 'opened' : 'closed'}
      className="fixed top-0 left-0 z-50 w-full p-6 flex items-center justify-between bg-white shadow-md"
    >
      <motion.h1 variants={hideNavItemsVariant} className="text-2xl font-bold flex items-center">
        Bunni
        <Rabbit size={36} className="ml-2" />
      </motion.h1>

      <motion.div
        variants={hideNavItemsVariant}
        className="cursor-pointer text-sm uppercase tracking-wide"
        onClick={() => setMobileNavOpen(true)}
      >
        <AlignRight />
      </motion.div>

      <motion.div
        variants={mobileMenuVariant}
        className="fixed top-0 left-0 w-full h-screen bg-space-cadet text-white p-10 flex flex-col items-center justify-center space-y-6"
      >
        <motion.button
          variants={fadeInVariant}
          className="mb-8 uppercase tracking-wide text-xs border-2 border-white rounded-full px-7 py-2 hover:bg-white hover:border-none text-white hover:text-space-cadet flex flex-row items-center justify-center gap-x-1 cursor-pointer"
          onClick={() => setMobileNavOpen(false)}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <span>Close</span>
        </motion.button>

        <motion.ul
          variants={ulVariant}
          className="flex flex-col gap-6 text-2xl font-semibold uppercase text-center"
        >
          {links?.map((item, index) => {
            return (
              <motion.li key={item.id || index} whileTap={{ scale: 0.95 }}>
                <motion.div variants={liVariant}>
                  {item?.link?.type === 'reference' ? (
                    <Link href={`/${item?.link?.reference?.value?.slug}`}>{item?.link?.label}</Link>
                  ) : (
                    <CMSLink url={item?.link?.url || ''}>{item?.link?.label}</CMSLink>
                  )}
                </motion.div>
              </motion.li>
            )
          })}
        </motion.ul>

        <motion.div variants={fadeInVariant} className="mt-12 text-sm text-center space-y-2">
          <h5>hi@bunnidigital.com</h5>
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}
