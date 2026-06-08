export type ThemeId = 'light' | 'dark' | 'gradient'

export interface ThemeOption {
  id: ThemeId
  label: string
  description: string
}

export const themeOptions: ThemeOption[] = [
  {
    id: 'light',
    label: 'Light',
    description: 'Clean daylight surfaces',
  },
  {
    id: 'dark',
    label: 'Dark',
    description: 'Soft contrast for night browsing',
  },
  {
    id: 'gradient',
    label: 'Gradient',
    description: 'Calm color atmosphere',
  },
]
