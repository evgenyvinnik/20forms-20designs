#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const FORMS = [
  'user-registration',
  'user-login',
  'password-reset',
  'two-factor-auth',
  'contact-inquiry',
  'newsletter-subscription',
  'profile-update',
  'password-change',
  'billing-info',
  'shipping-address',
  'checkout-payment',
  'order-tracking',
  'appointment-request',
  'event-registration',
  'job-application',
  'customer-feedback',
  'support-ticket',
  'onboarding-wizard',
  'advanced-search',
  'privacy-consent',
]

const appsDir = path.join(__dirname, '..', 'apps')

function toPascalCase(str) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

function generatePackageJson(formName) {
  return {
    name: `@forms-comparison/arco-design-${formName}`,
    private: true,
    version: '1.0.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview',
    },
    dependencies: {
      '@arco-design/web-react': '^2.69.1',
      react: '^18.3.1',
      'react-dom': '^18.3.1',
    },
    devDependencies: {
      '@vitejs/plugin-react': '^5.1.1',
      vite: '^7.2.4',
    },
  }
}

function generateViteConfig() {
  return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
})
`
}

function generateIndexHtml(formName) {
  const pascalCaseName = toPascalCase(formName)
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pascalCaseName} - Arco Design</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`
}

function generateMainJsx() {
  return `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`
}

function generateAppJsx(formName) {
  const pascalCaseName = toPascalCase(formName)
  return `import '@arco-design/web-react/dist/css/arco.css'
import { useEffect } from 'react'
import ${pascalCaseName}Form from './form/${pascalCaseName}Form'

function App() {
  useEffect(() => {
    // Check URL for theme parameter
    const params = new URLSearchParams(window.location.search)
    const theme = params.get('theme')
    
    if (theme === 'dark') {
      document.body.setAttribute('arco-theme', 'dark')
      document.body.style.backgroundColor = 'var(--color-bg-1)'
      document.body.style.color = 'var(--color-text-1)'
    } else {
      document.body.removeAttribute('arco-theme')
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
    }
  }, [])

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <${pascalCaseName}Form />
    </div>
  )
}

export default App
`
}

function generateFormComponent(formName) {
  const reactNoCssDir = path.join(appsDir, `react-no-css-${formName}`)
  const reactNoCssFormPath = path.join(
    reactNoCssDir,
    'src',
    'form',
    `${toPascalCase(formName)}Form.jsx`
  )

  if (!fs.existsSync(reactNoCssFormPath)) {
    console.error(`React no-css form not found: ${reactNoCssFormPath}`)
    return null
  }

  const reactNoCssContent = fs.readFileSync(reactNoCssFormPath, 'utf-8')

  // Parse the react-no-css component to extract structure
  // Convert basic HTML elements to Arco Design components
  let arcoContent = reactNoCssContent

  // Replace imports
  arcoContent = arcoContent.replace(
    /^/,
    `import { Button, Input, Checkbox, Select, DatePicker, Radio, Textarea, InputNumber, TimePicker, Switch, Form } from '@arco-design/web-react'\n\n`
  )

  // Convert button elements to Arco Button
  arcoContent = arcoContent.replace(
    /<button\s+type="submit">(.*?)<\/button>/g,
    '<Button type="primary" htmlType="submit">$1</Button>'
  )
  arcoContent = arcoContent.replace(
    /<button\s+type="button"([^>]*)>(.*?)<\/button>/g,
    '<Button htmlType="button"$1>$2</Button>'
  )

  // Convert input elements to Arco Input (excluding checkbox and radio)
  arcoContent = arcoContent.replace(
    /<input\s+([^>]*type="text"[^>]*)\/>/g,
    (match, attrs) => {
      return `<Input ${attrs}/>`
    }
  )
  arcoContent = arcoContent.replace(
    /<input\s+([^>]*type="email"[^>]*)\/>/g,
    (match, attrs) => {
      return `<Input ${attrs}/>`
    }
  )
  arcoContent = arcoContent.replace(
    /<input\s+([^>]*type="password"[^>]*)\/>/g,
    (match, attrs) => {
      return `<Input.Password ${attrs}/>`
    }
  )
  arcoContent = arcoContent.replace(
    /<input\s+([^>]*type="tel"[^>]*)\/>/g,
    (match, attrs) => {
      return `<Input ${attrs}/>`
    }
  )
  arcoContent = arcoContent.replace(
    /<input\s+([^>]*type="url"[^>]*)\/>/g,
    (match, attrs) => {
      return `<Input ${attrs}/>`
    }
  )
  arcoContent = arcoContent.replace(
    /<input\s+([^>]*type="number"[^>]*)\/>/g,
    (match, attrs) => {
      return `<InputNumber ${attrs}/>`
    }
  )
  arcoContent = arcoContent.replace(
    /<input\s+([^>]*type="date"[^>]*)\/>/g,
    (match, attrs) => {
      return `<DatePicker ${attrs}/>`
    }
  )
  arcoContent = arcoContent.replace(
    /<input\s+([^>]*type="time"[^>]*)\/>/g,
    (match, attrs) => {
      return `<TimePicker ${attrs}/>`
    }
  )

  // Convert checkbox inputs
  arcoContent = arcoContent.replace(
    /<input\s+([^>]*type="checkbox"[^>]*)\/>/g,
    (match, attrs) => {
      return `<Checkbox ${attrs}/>`
    }
  )

  // Convert radio inputs
  arcoContent = arcoContent.replace(
    /<input\s+([^>]*type="radio"[^>]*)\/>/g,
    (match, attrs) => {
      return `<Radio ${attrs}/>`
    }
  )

  // Convert textarea
  arcoContent = arcoContent.replace(/<textarea\s+([^>]*)\/>/g, '<Textarea $1/>')
  arcoContent = arcoContent.replace(
    /<textarea\s+([^>]*)><\/textarea>/g,
    '<Textarea $1/>'
  )

  // Convert select elements
  arcoContent = arcoContent.replace(
    /<select\s+([^>]*)>([\s\S]*?)<\/select>/g,
    (match, attrs, options) => {
      // Keep the select as is for now - Arco Select needs different structure
      // We'll handle this in a simpler way
      return `<Select ${attrs}>${options}</Select>`
    }
  )

  return arcoContent
}

function createArcoApp(formName) {
  const appDir = path.join(appsDir, `arco-design-${formName}`)
  const srcDir = path.join(appDir, 'src')
  const formDir = path.join(srcDir, 'form')

  console.log(`Creating arco-design-${formName}...`)

  // Create directories
  if (!fs.existsSync(appDir)) {
    fs.mkdirSync(appDir, { recursive: true })
  }
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true })
  }
  if (!fs.existsSync(formDir)) {
    fs.mkdirSync(formDir, { recursive: true })
  }

  // Create package.json
  fs.writeFileSync(
    path.join(appDir, 'package.json'),
    JSON.stringify(generatePackageJson(formName), null, 2)
  )

  // Create vite.config.js
  fs.writeFileSync(path.join(appDir, 'vite.config.js'), generateViteConfig())

  // Create index.html
  fs.writeFileSync(path.join(appDir, 'index.html'), generateIndexHtml(formName))

  // Create main.jsx
  fs.writeFileSync(path.join(srcDir, 'main.jsx'), generateMainJsx())

  // Create App.jsx
  fs.writeFileSync(path.join(srcDir, 'App.jsx'), generateAppJsx(formName))

  // Create form component
  const formComponent = generateFormComponent(formName)
  if (formComponent) {
    const pascalCaseName = toPascalCase(formName)
    fs.writeFileSync(
      path.join(formDir, `${pascalCaseName}Form.jsx`),
      formComponent
    )
  }

  console.log(`✓ Created arco-design-${formName}`)
}

console.log('Generating Arco Design apps...\n')

FORMS.forEach((formName) => {
  createArcoApp(formName)
})

console.log('\n✓ All Arco Design apps generated successfully!')
console.log('\nNext steps:')
console.log('1. Run: npm install')
console.log(
  '2. Test an app: npm run dev --workspace=@forms-comparison/arco-design-user-login'
)
