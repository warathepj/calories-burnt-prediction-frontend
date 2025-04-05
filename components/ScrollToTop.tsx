'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop
    setIsVisible(scrolled > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    
    // Initial check
    toggleVisibility()
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-8 right-8 z-[9999]" style={{ position: 'fixed' }}>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="rounded-full p-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
          size="icon"
          variant="default"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}



