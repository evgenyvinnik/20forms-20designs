import { useMemo } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline'
import { Theme as RadixTheme } from '@radix-ui/themes'
import { GravityUiWrapper } from '@/component-libraries/gravity-ui/GravityUiWrapper'

const DaisyUiThemeWrapper = ({ themeMode, children }) => {
  const dataTheme = themeMode === 'dark' ? 'dark' : 'light'
  return (
    <div data-theme={dataTheme}>
      {children}
    </div>
  )
}

const RadixUiThemeWrapper = ({ themeMode, children }) => {
  const appearance = themeMode === 'dark' ? 'dark' : 'light'
  return <RadixTheme appearance={appearance}>{children}</RadixTheme>
}

const MuiThemeWrapper = ({ themeMode, children }) => {
  const appearance = themeMode === 'dark' ? 'dark' : 'light'
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: appearance },
      }),
    [appearance]
  )

  return (
    <MuiThemeProvider theme={theme}>
      <ScopedCssBaseline enableColorScheme>{children}</ScopedCssBaseline>
    </MuiThemeProvider>
  )
}

const gravityWrapper = ({ themeMode, children }) => (
  <GravityUiWrapper themeMode={themeMode}>{children}</GravityUiWrapper>
)

const BlueprintThemeWrapper = ({ themeMode, children }) => {
  const isDark = themeMode === 'dark'
  const className = isDark ? 'bp5-body bp5-dark' : 'bp5-body'
  const style = {
    backgroundColor: isDark ? '#252a31' : '#ffffff',
    borderRadius: '8px',
    padding: '4px',
  }
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

const ReactBootstrapThemeWrapper = ({ themeMode, children }) => {
  const appearance = themeMode === 'dark' ? 'dark' : 'light'
  // bg-body class uses Bootstrap's --bs-body-bg which adapts to the theme
  return (
    <div data-bs-theme={appearance} className="bg-body" style={{ borderRadius: '8px', padding: '4px' }}>
      {children}
    </div>
  )
}

const wrappers = {
  MUI: MuiThemeWrapper,
  'Radix UI': RadixUiThemeWrapper,
  daisyUI: DaisyUiThemeWrapper,
  'Gravity UI': gravityWrapper,
  Blueprint: BlueprintThemeWrapper,
  'React Bootstrap': ReactBootstrapThemeWrapper,
}

function LibraryThemeWrapper({ library, themeMode = 'light', children }) {
  const Wrapper = wrappers[library]
  if (!Wrapper) return children
  return <Wrapper themeMode={themeMode}>{children}</Wrapper>
}

const librarySupportsTheme = (library) => Boolean(wrappers[library])

export { LibraryThemeWrapper, librarySupportsTheme }
