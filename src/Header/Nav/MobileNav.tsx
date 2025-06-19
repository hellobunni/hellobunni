import React from 'react'
import clsx from 'clsx'
import { CMSLink, CMSLinkType } from '@/components/Link'
import { Button } from '@/components/button'
import Link from 'next/link'
import { PiRabbit } from 'react-icons/pi'
import { IoMdClose } from 'react-icons/io'

interface MobileNavProps {
  navItems: MobileNavItem[]
  onClose: () => void
  className?: string
}

export type MobileNavItem = {
  id: string
  link: {
    type?: 'custom' | 'reference' | null
    newTab?: boolean | null
    reference?: {
      relationTo: 'pages' | 'posts'
      value: string | number
    } | null
    url?: string | null
    label?: string | null
  }
}

const MobileNav = ({ navItems, onClose, className }: MobileNavProps) => {
  console.log(navItems)
  return (
    <nav
      aria-label="Sidebar"
      className={clsx(
        `absolute top-0 left-0 w-full h-screen bg-white flex flex-1 flex-col px-4 py-9 z-50`,
        className,
      )}
    >
      <div className="flex flex-row justify-between items-center mb-20">
        <Link href="/">
          <PiRabbit size={45} />
        </Link>
        <Button
          variant="link"
          size="sm"
          icon={<IoMdClose size={28} />}
          onClick={onClose}
          ariaLabel="Close mobile menu"
        />
      </div>

      <ul role="list" className="-mx-2 space-y-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <CMSLink
              {...item.link}
              appearance="link"
              className="text-sm/6 p-2 pl-3 font-semibold"
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileNav
