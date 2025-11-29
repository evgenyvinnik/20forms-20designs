import { ThemeMode } from '../store'

interface ThemeToggleRowProps {
  themeMode: ThemeMode
  setThemeMode: (theme: ThemeMode) => void
}

export function ThemeToggleRow({
  themeMode,
  setThemeMode,
}: ThemeToggleRowProps) {
  return (
    <div className="theme-toggle-row">
      <span className="toggle-label">Theme:</span>
      <label className="radio-row">
        <input
          type="radio"
          name="preview-theme"
          value="light"
          checked={themeMode === 'light'}
          onChange={() => setThemeMode('light')}
        />
        <span>Light theme</span>
      </label>
      <label className="radio-row">
        <input
          type="radio"
          name="preview-theme"
          value="dark"
          checked={themeMode === 'dark'}
          onChange={() => setThemeMode('dark')}
        />
        <span>Dark theme</span>
      </label>
    </div>
  )
}
