import { useEffect, useMemo, useState } from 'react'
import type { ThemeId } from '../data/themes'

const STORAGE_KEY = 'judy-namecard-theme'

/**
 * Detects the default theme using the current system color preference.
 */
function getSystemTheme(): ThemeId {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Reads the persisted theme selection from localStorage when available.
 */
function getInitialTheme(): ThemeId {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const savedTheme = window.localStorage.getItem(STORAGE_KEY)

  if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'gradient') {
    return savedTheme
  }

  return getSystemTheme()
}

/**
 * Manages theme selection, persistence, and the document-level data attribute.
 */
export function useTheme() {
  const [theme, setTheme] = useState<ThemeId>(() => getInitialTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const themeState = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )

  return themeState
}
