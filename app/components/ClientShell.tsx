'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import NavBar from './NavBar'
import KeyHintFooter from './KeyHintFooter'
import { ThemeContext } from './ThemeContext'

const ROUTES = ['/', '/about', '/projects', '/contact']

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [hintsVisible, setHintsVisible] = useState(true)
  const [isDark, setIsDark] = useState(false)

  const activeIdx = ROUTES.indexOf(pathname)

  const navigateTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(ROUTES.length - 1, idx))
    router.push(ROUTES[clamped])
  }

  const toggleTheme = () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    setIsDark(next === 'dark')
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      switch (e.key) {
        case 'ArrowRight': navigateTo(activeIdx + 1); break
        case 'ArrowLeft':  navigateTo(activeIdx - 1); break
        case '1': case '2': case '3': case '4':
          navigateTo(Number(e.key) - 1); break
        case 'm': case 'M': toggleTheme(); break
        case 'h': case 'H': setHintsVisible(v => !v); break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIdx])

  return (
    <ThemeContext.Provider value={{ isDark, toggle: toggleTheme }}>
      <NavBar onThemeToggle={toggleTheme} isDark={isDark} />
      <main style={{ paddingTop: '36px', paddingBottom: '80px' }}>
        {children}
      </main>
      <KeyHintFooter visible={hintsVisible} />
    </ThemeContext.Provider>
  )
}
