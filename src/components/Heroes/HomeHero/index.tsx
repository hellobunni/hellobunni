'use client'

import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react' // Or replace with another icon!
import React from 'react'
import { useTheme } from '@/providers/Theme'

export default function HomeHero() {
  const { theme } = useTheme()

  return (
    <section
      className={`min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-background text-foreground'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        <h1
          className={`text-6xl sm:text-8xl text-left sm:text-center font-bold tracking-tight mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-foreground'
          }`}
        >
          Hi, I'm{' '}
          <span className="relative inline-block">
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'linear',
              }}
              className="bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent font-extrabold bg-[length:200%_200%]"
            >
              Bunni
            </motion.span>{' '}
            <Sparkles className="inline-block w-6 h-6 text-violet-500 ml-1 animate-bounce" />
          </span>
        </h1>

        <p
          className={`max-w-xl mx-auto text-base sm:text-lg text-left sm:text-center ${
            theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'
          }`}
        >
          I build beautiful, performant interfaces with clean code, dreamy UX, and a touch of
          ✨magic.
        </p>
      </motion.div>
    </section>
  )
}
