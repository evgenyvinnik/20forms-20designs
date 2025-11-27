import { useEffect } from 'react'
import { ThemeProvider } from '@gravity-ui/uikit'
import '@gravity-ui/uikit/styles/fonts.css'
import '@gravity-ui/uikit/styles/styles.css'

export const GravityUiWrapper = ({ children, themeMode = 'light' }) => {
  const selectedTheme = themeMode === 'dark' ? 'dark' : 'light'

  // Ensure Gravity UI theming stays scoped to this wrapper and does not
  // mutate the document body classes (which would flip the whole app).
  useEffect(() => {
    const body = document.body
    if (!body) return
    body.classList.forEach((cls) => {
      if (cls === 'root' || cls.startsWith('root_theme_')) {
        body.classList.remove(cls)
      }
    })
  }, [])

  return (
    <ThemeProvider theme={selectedTheme} scoped>
      {children}
    </ThemeProvider>
  )
}
