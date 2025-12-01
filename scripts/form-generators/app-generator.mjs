/**
 * App.jsx generator for each library
 */

export function generateAppJsx(library, form) {
  switch (library.id) {
    case 'coreui':
      return generateCoreUIApp(library, form)
    case 'flowbite':
      return generateFlowbiteApp(library, form)
    case 'fluent-ui':
      return generateFluentUIApp(library, form)
    case 'gluestack-ui':
      return generateGluestackApp(library, form)
    case 'grommet':
      return generateGrommetApp(library, form)
    case 'headless-ui':
      return generateHeadlessUIApp(library, form)
    case 'mantine':
      return generateMantineApp(library, form)
    case 'material-tailwind':
      return generateMaterialTailwindApp(library, form)
    case 'orbit':
      return generateOrbitApp(library, form)
    case 'patternfly':
      return generatePatternFlyApp(library, form)
    case 'primer':
      return generatePrimerApp(library, form)
    case 'react-spectrum':
      return generateReactSpectrumApp(library, form)
    case 'rsuite':
      return generateRSuiteApp(library, form)
    case 'lightning':
      return generateLightningApp(library, form)
    case 'semantic-ui':
      return generateSemanticUIApp(library, form)
    case 'semi':
      return generateSemiApp(library, form)
    case 'theme-ui':
      return generateThemeUIApp(library, form)
    default:
      return generateDefaultApp(library, form)
  }
}

function generateCoreUIApp(library, form) {
  return `import { useState, useEffect } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-coreui-theme', theme)
  }, [theme])

  return (
    <div
      style={{
        padding: '16px',
        background: theme === 'dark' ? '#1e1e1e' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#1e1e1e',
        minHeight: '100vh',
      }}
    >
      <FormComponent />
    </div>
  )
}

export default App
`
}

function generateFlowbiteApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { Flowbite } from 'flowbite-react'
import './index.css'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <Flowbite>
      <div
        className={\`p-4 min-h-screen \${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}\`}
      >
        <FormComponent />
      </div>
    </Flowbite>
  )
}

export default App
`
}

function generateFluentUIApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { FluentProvider, webLightTheme, webDarkTheme } from '@fluentui/react-components'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <FluentProvider theme={theme === 'dark' ? webDarkTheme : webLightTheme}>
      <div
        style={{
          padding: '16px',
          background: theme === 'dark' ? '#1e1e1e' : '#ffffff',
          minHeight: '100vh',
        }}
      >
        <FormComponent />
      </div>
    </FluentProvider>
  )
}

export default App
`
}

function generateGluestackApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { GluestackUIProvider, Box, config } from '@gluestack-ui/themed'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <GluestackUIProvider config={config.theme} colorMode={theme}>
      <Box
        p="$4"
        bg={theme === 'dark' ? '$backgroundDark900' : '$backgroundLight0'}
        minHeight="100vh"
      >
        <FormComponent />
      </Box>
    </GluestackUIProvider>
  )
}

export default App
`
}

function generateGrommetApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { Grommet, Box, grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'
import FormComponent from './form/${form.name}'

const customTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#7D4CDB',
    },
  },
})

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <Grommet theme={customTheme} themeMode={theme} full>
      <Box
        pad="medium"
        background={theme === 'dark' ? 'dark-1' : 'light-1'}
        fill
      >
        <FormComponent />
      </Box>
    </Grommet>
  )
}

export default App
`
}

function generateHeadlessUIApp(library, form) {
  return `import { useState, useEffect } from 'react'
import './index.css'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div
      className={\`p-4 min-h-screen \${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}\`}
    >
      <FormComponent />
    </div>
  )
}

export default App
`
}

function generateMantineApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { MantineProvider, Box } from '@mantine/core'
import '@mantine/core/styles.css'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <MantineProvider forceColorScheme={theme}>
      <Box
        p="md"
        bg={theme === 'dark' ? 'dark.7' : 'white'}
        c={theme === 'dark' ? 'white' : 'dark'}
        mih="100vh"
      >
        <FormComponent />
      </Box>
    </MantineProvider>
  )
}

export default App
`
}

function generateMaterialTailwindApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { ThemeProvider } from '@material-tailwind/react'
import './index.css'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <ThemeProvider>
      <div
        className={\`p-4 min-h-screen \${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}\`}
      >
        <FormComponent theme={theme} />
      </div>
    </ThemeProvider>
  )
}

export default App
`
}

function generateOrbitApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { OrbitProvider, defaultTheme } from '@kiwicom/orbit-components'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <OrbitProvider theme={defaultTheme} useId={React.useId}>
      <div
        style={{
          padding: '16px',
          background: theme === 'dark' ? '#1e1e1e' : '#ffffff',
          color: theme === 'dark' ? '#ffffff' : '#1e1e1e',
          minHeight: '100vh',
        }}
      >
        <FormComponent />
      </div>
    </OrbitProvider>
  )
}

export default App
`
}

function generatePatternFlyApp(library, form) {
  return `import { useState, useEffect } from 'react'
import '@patternfly/react-core/dist/styles/base.css'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('pf-v5-theme-dark')
    } else {
      document.documentElement.classList.remove('pf-v5-theme-dark')
    }
  }, [theme])

  return (
    <div
      style={{
        padding: '16px',
        background: theme === 'dark' ? '#1e1e1e' : '#ffffff',
        minHeight: '100vh',
      }}
    >
      <FormComponent />
    </div>
  )
}

export default App
`
}

function generatePrimerApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { ThemeProvider, BaseStyles, Box } from '@primer/react'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <ThemeProvider colorMode={theme === 'dark' ? 'night' : 'day'}>
      <BaseStyles>
        <Box
          p={3}
          bg={theme === 'dark' ? 'canvas.default' : 'canvas.default'}
          minHeight="100vh"
        >
          <FormComponent />
        </Box>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
`
}

function generateReactSpectrumApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { Provider, defaultTheme, View } from '@adobe/react-spectrum'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <Provider theme={defaultTheme} colorScheme={theme}>
      <View padding="size-200" minHeight="100vh">
        <FormComponent />
      </View>
    </Provider>
  )
}

export default App
`
}

function generateRSuiteApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { CustomProvider } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <CustomProvider theme={theme}>
      <div
        style={{
          padding: '16px',
          background: theme === 'dark' ? '#1e1e1e' : '#ffffff',
          minHeight: '100vh',
        }}
      >
        <FormComponent />
      </div>
    </CustomProvider>
  )
}

export default App
`
}

function generateLightningApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { IconSettings } from '@salesforce/design-system-react'
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <IconSettings iconPath="/assets/icons">
      <div
        style={{
          padding: '16px',
          background: theme === 'dark' ? '#1e1e1e' : '#ffffff',
          color: theme === 'dark' ? '#ffffff' : '#1e1e1e',
          minHeight: '100vh',
        }}
      >
        <FormComponent />
      </div>
    </IconSettings>
  )
}

export default App
`
}

function generateSemanticUIApp(library, form) {
  return `import { useState, useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div
      className={theme === 'dark' ? 'inverted' : ''}
      style={{
        padding: '16px',
        background: theme === 'dark' ? '#1b1c1d' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : 'rgba(0,0,0,.87)',
        minHeight: '100vh',
      }}
    >
      <FormComponent inverted={theme === 'dark'} />
    </div>
  )
}

export default App
`
}

function generateSemiApp(library, form) {
  return `import { useState, useEffect } from 'react'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  useEffect(() => {
    document.body.setAttribute('theme-mode', theme)
  }, [theme])

  return (
    <div
      style={{
        padding: '16px',
        background: theme === 'dark' ? '#1e1e1e' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#1e1e1e',
        minHeight: '100vh',
      }}
    >
      <FormComponent />
    </div>
  )
}

export default App
`
}

function generateThemeUIApp(library, form) {
  return `import { useState, useEffect } from 'react'
import { ThemeUIProvider, Box } from 'theme-ui'
import FormComponent from './form/${form.name}'

const lightTheme = {
  colors: {
    text: '#1e1e1e',
    background: '#ffffff',
    primary: '#0070f3',
    secondary: '#6c757d',
    muted: '#f8f9fa',
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}

const darkTheme = {
  ...lightTheme,
  colors: {
    text: '#ffffff',
    background: '#1e1e1e',
    primary: '#0070f3',
    secondary: '#adb5bd',
    muted: '#2d2d2d',
  },
}

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <ThemeUIProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Box p={3} bg="background" color="text" sx={{ minHeight: '100vh' }}>
        <FormComponent />
      </Box>
    </ThemeUIProvider>
  )
}

export default App
`
}

function generateDefaultApp(library, form) {
  return `import { useState, useEffect } from 'react'
import FormComponent from './form/${form.name}'

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div
      style={{
        padding: '16px',
        background: theme === 'dark' ? '#1e1e1e' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#1e1e1e',
        minHeight: '100vh',
      }}
    >
      <FormComponent />
    </div>
  )
}

export default App
`
}
