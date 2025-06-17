'use client'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { PiRabbit } from 'react-icons/pi'
import type { Header } from '@/payload-types'
import { useTheme } from '@/providers/Theme'

import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const { theme } = useTheme()

  console.log(theme)

  return (
    <header
      data-theme={theme || 'light'}
      className={clsx(
        'container-2xl relative z-20 mx-auto transition-colors duration-300 ease-in-out px-4 pt-4',
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black',
      )}
    >
      <div className="py-2 flex justify-between">
        <Link href="/">
          <PiRabbit size={45} />
        </Link>

        <HeaderNav data={data} />
      </div>
    </header>
  )
}
