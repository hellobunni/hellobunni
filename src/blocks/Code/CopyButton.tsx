'use client'
import { Button } from '@/components/button'
import { CopyIcon } from '@payloadcms/ui/icons/Copy'
import { useState } from 'react'

export function CopyButton({ code }: { code: string }) {
  const [isCopied, setIsCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleCopy = async () => {
    if (isCopied || isLoading) return

    setIsLoading(true)
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Failed to copy code:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex justify-end align-middle">
      <Button
        variant="secondary"
        size="sm"
        icon={<CopyIcon />}
        iconPosition="right"
        loading={isLoading}
        disabled={isCopied}
        onClick={handleCopy}
        ariaLabel={isCopied ? 'Code copied to clipboard' : 'Copy code to clipboard'}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </Button>
    </div>
  )
}
