'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SECTIONS = [
  { n: '01', label: 'Home',     href: '/' },
  { n: '02', label: 'About',    href: '/about' },
  { n: '03', label: 'Projects', href: '/projects' },
  { n: '04', label: 'Contact',  href: '/contact' },
]

interface NavBarProps {
  onThemeToggle: () => void
}

export default function NavBar({ onThemeToggle }: NavBarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop: browser tab bar */}
      <nav
        className="nav-desktop"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          alignItems: 'flex-end',
          paddingLeft: '32px',
          paddingRight: '32px',
          height: '36px',
          borderBottom: '1px solid var(--border)',
          backgroundColor: 'var(--surface)',
          overflow: 'visible',
        }}
      >
        {SECTIONS.map((s) => {
          const isActive = pathname === s.href
          return (
            <Link
              key={s.href}
              href={s.href}
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '12px',
                letterSpacing: '0.02em',
                textDecoration: 'none',
                display: 'inline-block',
                border: '1px solid var(--border)',
                borderBottom: isActive ? '1px solid var(--bg)' : '1px solid var(--border)',
                borderRadius: '4px 4px 0 0',
                backgroundColor: isActive ? 'var(--bg)' : 'var(--surface)',
                color: isActive ? 'var(--fg)' : 'var(--fg-secondary)',
                padding: '3px 10px 4px',
                marginRight: '2px',
                marginBottom: '-1px',
                position: 'relative',
                zIndex: isActive ? 1 : 0,
                transition: 'color 100ms ease',
              }}
            >
              {s.n} {s.label}
            </Link>
          )
        })}

        <button
          onClick={onThemeToggle}
          title="Toggle theme (M)"
          style={{
            marginLeft: 'auto',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '13px',
            cursor: 'pointer',
            border: 'none',
            background: 'none',
            color: 'var(--fg-secondary)',
            padding: '0 4px',
            outline: 'none',
          }}
        >
          ◐
        </button>
      </nav>

      {/* Mobile: bottom tab bar */}
      <nav
        className="nav-mobile"
        style={{
          position: 'fixed',
          bottom: 0, left: 0, right: 0,
          zIndex: 50,
          flexDirection: 'row',
          alignItems: 'stretch',
          height: '52px',
          borderTop: '1px solid var(--border)',
          backgroundColor: 'var(--surface)',
        }}
      >
        {SECTIONS.map((s) => {
          const isActive = pathname === s.href
          return (
            <Link
              key={s.href}
              href={s.href}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px',
                textDecoration: 'none',
                backgroundColor: isActive ? 'var(--bg)' : 'transparent',
                borderTop: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                transition: 'color 100ms ease',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '10px',
                color: isActive ? 'var(--accent)' : 'var(--fg-secondary)',
              }}>
                {s.n}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '11px',
                color: isActive ? 'var(--fg)' : 'var(--fg-secondary)',
              }}>
                {s.label}
              </span>
            </Link>
          )
        })}
      </nav>
    </>
  )
}
