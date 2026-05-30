'use client'

import { createContext, useContext } from 'react'

export const ThemeContext = createContext<{ isDark: boolean; toggle: () => void }>({
  isDark: false,
  toggle: () => {},
})

export const useTheme = () => useContext(ThemeContext)
