'use client'
import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDarkMode } from '@/contexts/DarkModeContext'

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="h-9 w-9"
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4 text-yellow-500 transition-all" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700 transition-all" />
      )}
    </Button>
  )
}
