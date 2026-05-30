'use client'

import { useTheme } from './ThemeContext'
import LightSwitch from './LightSwitch'

export default function MobileThemeToggle() {
  const { isDark, toggle } = useTheme()
  return (
    <span className="nav-mobile">
      <LightSwitch isDark={isDark} onToggle={toggle} />
    </span>
  )
}
