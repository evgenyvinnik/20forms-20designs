#!/usr/bin/env node

/**
 * Consolidate Apps Script
 * 
 * This script consolidates multiple mini-apps (one per form) into a single app
 * per design system. Each consolidated app contains all 20 forms and uses a
 * URL parameter (?form=<form-id>) to determine which form to render.
 * 
 * Usage: node scripts/consolidate-apps.mjs [--library=<library-id>] [--all] [--dry-run]
 * 
 * Options:
 *   --library=<id>  Consolidate a specific library (e.g., --library=mui)
 *   --all           Consolidate all libraries
 *   --dry-run       Show what would be done without making changes
 * 
 * Example:
 *   node scripts/consolidate-apps.mjs --library=chakra
 *   node scripts/consolidate-apps.mjs --all
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '..')
const APPS_DIR = path.join(ROOT_DIR, 'apps')

// Form IDs and their corresponding component names
const FORMS = [
  { id: 'user-registration', component: 'UserRegistrationForm', file: 'UserRegistrationForm' },
  { id: 'user-login', component: 'UserLoginForm', file: 'UserLoginForm' },
  { id: 'password-reset', component: 'PasswordResetForm', file: 'PasswordResetForm' },
  { id: 'two-factor-auth', component: 'TwoFactorAuthForm', file: 'TwoFactorAuthForm' },
  { id: 'contact-inquiry', component: 'ContactInquiryForm', file: 'ContactInquiryForm' },
  { id: 'newsletter-subscription', component: 'NewsletterSubscriptionForm', file: 'NewsletterSubscriptionForm' },
  { id: 'profile-update', component: 'ProfileUpdateForm', file: 'ProfileUpdateForm' },
  { id: 'password-change', component: 'PasswordChangeForm', file: 'PasswordChangeForm' },
  { id: 'billing-info', component: 'BillingInfoForm', file: 'BillingInfoForm' },
  { id: 'shipping-address', component: 'ShippingAddressForm', file: 'ShippingAddressForm' },
  { id: 'checkout-payment', component: 'CheckoutPaymentForm', file: 'CheckoutPaymentForm' },
  { id: 'order-tracking', component: 'OrderTrackingForm', file: 'OrderTrackingForm' },
  { id: 'appointment-request', component: 'AppointmentRequestForm', file: 'AppointmentRequestForm' },
  { id: 'event-registration', component: 'EventRegistrationForm', file: 'EventRegistrationForm' },
  { id: 'job-application', component: 'JobApplicationForm', file: 'JobApplicationForm' },
  { id: 'customer-feedback', component: 'CustomerFeedbackForm', file: 'CustomerFeedbackForm' },
  { id: 'support-ticket', component: 'SupportTicketForm', file: 'SupportTicketForm' },
  { id: 'onboarding-wizard', component: 'OnboardingWizardForm', file: 'OnboardingWizardForm' },
  { id: 'advanced-search', component: 'AdvancedSearchForm', file: 'AdvancedSearchForm' },
  { id: 'privacy-consent', component: 'PrivacyConsentForm', file: 'PrivacyConsentForm' },
]

// Library configurations - maps library ID to its directory pattern and app template info
const LIBRARY_CONFIGS = {
  'mui': { dirPrefix: 'mui', name: 'MUI', appTemplate: 'mui-user-login' },
  'chakra': { dirPrefix: 'chakra', name: 'Chakra UI', appTemplate: 'chakra-user-login' },
  'antd': { dirPrefix: 'antd', name: 'Ant Design', appTemplate: 'antd-user-login' },
  'react-bootstrap': { dirPrefix: 'react-bootstrap', name: 'React Bootstrap', appTemplate: 'react-bootstrap-user-login' },
  'evergreen': { dirPrefix: 'evergreen', name: 'Evergreen', appTemplate: 'evergreen-user-login' },
  'blueprint': { dirPrefix: 'blueprint', name: 'Blueprint', appTemplate: 'blueprint-user-login' },
  'radix-ui': { dirPrefix: 'radix-ui', name: 'Radix UI', appTemplate: 'radix-ui-user-login' },
  'gravity-ui': { dirPrefix: 'gravity-ui', name: 'Gravity UI', appTemplate: 'gravity-ui-user-login' },
  'react-no-css': { dirPrefix: 'react-no-css', name: 'React + No CSS', appTemplate: 'react-no-css-user-login' },
  'cloudscape': { dirPrefix: 'cloudscape', name: 'Cloudscape', appTemplate: 'cloudscape-user-login' },
  'daisyui': { dirPrefix: 'daisyui', name: 'daisyUI', appTemplate: 'daisyui-user-login' },
  'shadcn-ui': { dirPrefix: 'shadcn-ui', name: 'shadcn/ui', appTemplate: 'shadcn-ui-user-login' },
  'gestalt': { dirPrefix: 'gestalt', name: 'Pinterest Gestalt', appTemplate: 'gestalt-user-login' },
  'polaris': { dirPrefix: 'polaris', name: 'Shopify Polaris', appTemplate: 'polaris-user-login' },
  'elastic-ui': { dirPrefix: 'elastic-ui', name: 'Elastic UI', appTemplate: 'elastic-ui-user-login' },
  'zendesk-garden': { dirPrefix: 'zendesk-garden', name: 'Zendesk Garden', appTemplate: 'zendesk-garden-user-login' },
  'tamagui': { dirPrefix: 'tamagui', name: 'Tamagui', appTemplate: 'tamagui-user-login' },
  'uswds': { dirPrefix: 'uswds', name: 'USWDS', appTemplate: 'uswds-user-login' },
  'primereact': { dirPrefix: 'primereact', name: 'PrimeReact', appTemplate: 'primereact-user-login' },
  'webawesome': { dirPrefix: 'webawesome', name: 'Web Awesome', appTemplate: 'webawesome-user-login' },
  'arco-design': { dirPrefix: 'arco-design', name: 'Arco Design', appTemplate: 'arco-design-user-login' },
  'carbon': { dirPrefix: 'carbon', name: 'Carbon', appTemplate: 'carbon-user-login' },
  'ariakit': { dirPrefix: 'ariakit', name: 'Ariakit', appTemplate: 'ariakit-user-login' },
  'baseweb': { dirPrefix: 'baseweb', name: 'Base Web', appTemplate: 'baseweb-user-login' },
  'atlaskit': { dirPrefix: 'atlaskit', name: 'Atlaskit', appTemplate: 'atlaskit-user-login' },
  'braid': { dirPrefix: 'braid', name: 'Braid', appTemplate: 'braid-user-login' },
  'fluent-ui': { dirPrefix: 'fluent-ui', name: 'Fluent UI', appTemplate: 'fluent-ui-user-login' },
  'mantine': { dirPrefix: 'mantine', name: 'Mantine', appTemplate: 'mantine-user-login' },
  'coreui': { dirPrefix: 'coreui', name: 'CoreUI', appTemplate: 'coreui-user-login' },
  'grommet': { dirPrefix: 'grommet', name: 'Grommet', appTemplate: 'grommet-user-login' },
  'flowbite-react': { dirPrefix: 'flowbite-react', name: 'Flowbite React', appTemplate: 'flowbite-react-user-login' },
  'semantic-ui': { dirPrefix: 'semantic-ui', name: 'Semantic UI', appTemplate: 'semantic-ui-user-login' },
  'primer': { dirPrefix: 'primer', name: 'Primer', appTemplate: 'primer-user-login' },
  'rsuite': { dirPrefix: 'rsuite', name: 'RSuite', appTemplate: 'rsuite-user-login' },
  'patternfly': { dirPrefix: 'patternfly', name: 'PatternFly', appTemplate: 'patternfly-user-login' },
  'theme-ui': { dirPrefix: 'theme-ui', name: 'Theme UI', appTemplate: 'theme-ui-user-login' },
  'slds': { dirPrefix: 'slds', name: 'SLDS', appTemplate: 'slds-user-login' },
  'material-tailwind': { dirPrefix: 'material-tailwind', name: 'Material Tailwind', appTemplate: 'material-tailwind-user-login' },
  'react-spectrum': { dirPrefix: 'react-spectrum', name: 'React Spectrum', appTemplate: 'react-spectrum-user-login' },
  'orbit': { dirPrefix: 'orbit', name: 'Orbit', appTemplate: 'orbit-user-login' },
  'semi-design': { dirPrefix: 'semi-design', name: 'Semi Design', appTemplate: 'semi-design-user-login' },
  'headlessui': { dirPrefix: 'headlessui', name: 'Headless UI', appTemplate: 'headlessui-user-login' },
}

/**
 * Get all mini-app directories for a library
 */
function getMiniAppDirs(libraryId) {
  const config = LIBRARY_CONFIGS[libraryId]
  if (!config) return []

  const prefix = config.dirPrefix
  return fs.readdirSync(APPS_DIR)
    .filter(dir => dir.startsWith(`${prefix}-`) && dir !== prefix)
    .filter(dir => {
      const appPath = path.join(APPS_DIR, dir)
      return fs.statSync(appPath).isDirectory()
    })
}

/**
 * Extract form component from a mini-app
 */
function extractFormComponent(miniAppDir) {
  const formDir = path.join(APPS_DIR, miniAppDir, 'src', 'form')
  if (!fs.existsSync(formDir)) return null

  const files = fs.readdirSync(formDir).filter(f => f.endsWith('.jsx') || f.endsWith('.tsx'))
  if (files.length === 0) return null

  const formFile = files[0]
  const formPath = path.join(formDir, formFile)
  const content = fs.readFileSync(formPath, 'utf-8')

  return {
    fileName: formFile,
    content,
    componentName: formFile.replace(/\.(jsx|tsx)$/, ''),
  }
}

/**
 * Extract the App.jsx template (for theme handling logic)
 */
function extractAppTemplate(miniAppDir) {
  const appPath = path.join(APPS_DIR, miniAppDir, 'src', 'App.jsx')
  const appPathTsx = path.join(APPS_DIR, miniAppDir, 'src', 'App.tsx')
  
  const actualPath = fs.existsSync(appPath) ? appPath : appPathTsx
  if (!fs.existsSync(actualPath)) return null

  return fs.readFileSync(actualPath, 'utf-8')
}

/**
 * Extract package.json to get dependencies
 */
function extractPackageJson(miniAppDir) {
  const pkgPath = path.join(APPS_DIR, miniAppDir, 'package.json')
  if (!fs.existsSync(pkgPath)) return null
  return JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
}

/**
 * Extract vite.config.js for the base configuration
 */
function extractViteConfig(miniAppDir) {
  const vitePath = path.join(APPS_DIR, miniAppDir, 'vite.config.js')
  if (!fs.existsSync(vitePath)) return null
  return fs.readFileSync(vitePath, 'utf-8')
}

/**
 * Copy additional files from form directory (like locationOptions.js)
 */
function copyAdditionalFormFiles(miniAppDir, targetFormsDir) {
  const formDir = path.join(APPS_DIR, miniAppDir, 'src', 'form')
  if (!fs.existsSync(formDir)) return []

  const copied = []
  const files = fs.readdirSync(formDir)
  for (const file of files) {
    // Skip the main form component
    if (file.match(/Form\.(jsx|tsx)$/)) continue
    
    const sourcePath = path.join(formDir, file)
    const targetPath = path.join(targetFormsDir, file)
    
    if (fs.statSync(sourcePath).isFile() && !fs.existsSync(targetPath)) {
      fs.copyFileSync(sourcePath, targetPath)
      copied.push(file)
    }
  }
  return copied
}

/**
 * Copy additional directories and files from the template src (like components/, lib/, *.css)
 */
function copyAdditionalSrcDirs(miniAppDir, targetSrcDir) {
  const srcDir = path.join(APPS_DIR, miniAppDir, 'src')
  if (!fs.existsSync(srcDir)) return []

  const copied = []
  const entries = fs.readdirSync(srcDir, { withFileTypes: true })
  
  for (const entry of entries) {
    // Skip main.jsx, App.jsx, and form/ directory (we handle those separately)
    if (entry.name === 'main.jsx' || entry.name === 'main.tsx' ||
        entry.name === 'App.jsx' || entry.name === 'App.tsx' ||
        entry.name === 'form' || entry.name === 'forms') {
      continue
    }
    
    const sourcePath = path.join(srcDir, entry.name)
    const targetPath = path.join(targetSrcDir, entry.name)
    
    if (entry.isDirectory() && !fs.existsSync(targetPath)) {
      // Recursively copy directory
      fs.cpSync(sourcePath, targetPath, { recursive: true })
      copied.push(entry.name + '/')
    } else if (entry.isFile() && !fs.existsSync(targetPath)) {
      fs.copyFileSync(sourcePath, targetPath)
      copied.push(entry.name)
    }
  }
  return copied
}

/**
 * Generate the consolidated App.jsx/tsx content
 */
function generateConsolidatedApp(appTemplate, forms, isTypeScript = false) {
  // Extract the theme handling and provider logic from the template
  const imports = []
  const componentImports = []

  // Parse the template to understand its structure
  // We'll generate a new App that imports all forms and routes based on URL param

  // Generate form imports
  for (const form of forms) {
    componentImports.push(`import ${form.component} from './forms/${form.file}'`)
  }

  // Generate the form components map
  const formMapEntries = forms.map(f => `  '${f.id}': ${f.component},`).join('\n')

  // Extract imports from template (everything before the function declaration)
  const importMatch = appTemplate.match(/^([\s\S]*?)(?=function\s+App|const\s+App)/m)
  const templateImports = importMatch ? importMatch[1].trim() : ''

  // Extract the theme provider wrapper from template
  // This is library-specific - we need to preserve it
  const providerMatch = appTemplate.match(/return\s*\(\s*([\s\S]*?)<FormComponent/m)
  let providerStart = ''
  let providerEnd = ''

  if (providerMatch) {
    // Extract the JSX before FormComponent
    providerStart = providerMatch[1].trim()
  }

  // Find the closing tags after FormComponent
  const closingMatch = appTemplate.match(/<FormComponent\s*\/>\s*([\s\S]*?)\s*\)\s*\}/)
  if (closingMatch) {
    providerEnd = closingMatch[1].trim()
  }

  // If we couldn't extract, use a simpler approach - just copy the template
  // and modify the import and form component reference
  
  // Build the new App content
  const ext = isTypeScript ? 'tsx' : 'jsx'
  
  return `${templateImports}

// Import all form components
${componentImports.join('\n')}

// Map form IDs to components
const FORM_COMPONENTS${isTypeScript ? ': Record<string, React.ComponentType>' : ''} = {
${formMapEntries}
}

function App() {
  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  const [formId, setFormId] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('form') || 'user-login'
  })

  // Listen for theme changes from parent
  useEffect(() => {
    const handleMessage = (event${isTypeScript ? ': MessageEvent' : ''}) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // Listen for URL changes (for SPA navigation if needed)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      setFormId(params.get('form') || 'user-login')
      setTheme(params.get('theme') === 'dark' ? 'dark' : 'light')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Get the form component based on the form ID
  const FormComponent = FORM_COMPONENTS[formId]

  // The rest of the render logic is library-specific
  // This will need to be customized per library based on its theme provider
`
}

/**
 * Consolidate a single library
 */
async function consolidateLibrary(libraryId, dryRun = false) {
  const config = LIBRARY_CONFIGS[libraryId]
  if (!config) {
    console.error(`❌ Unknown library: ${libraryId}`)
    return false
  }

  console.log(`\n📦 Consolidating ${config.name} (${libraryId})...`)

  // Get all mini-app directories for this library
  const miniAppDirs = getMiniAppDirs(libraryId)
  console.log(`   Found ${miniAppDirs.length} mini-apps`)

  if (miniAppDirs.length === 0) {
    console.log(`   ⚠️  No mini-apps found for ${libraryId}`)
    return false
  }

  // Create consolidated app directory
  const consolidatedDir = path.join(APPS_DIR, libraryId)
  const formsDir = path.join(consolidatedDir, 'src', 'forms')

  if (dryRun) {
    console.log(`   [DRY RUN] Would create: ${consolidatedDir}`)
  } else {
    fs.mkdirSync(formsDir, { recursive: true })
  }

  // Extract form components from each mini-app
  const forms = []
  const additionalFiles = new Set()

  for (const miniAppDir of miniAppDirs) {
    const formComponent = extractFormComponent(miniAppDir)
    if (formComponent) {
      // Determine form ID from directory name
      const formId = miniAppDir.replace(`${config.dirPrefix}-`, '')
      const formConfig = FORMS.find(f => f.id === formId)
      
      if (formConfig) {
        forms.push({
          ...formConfig,
          sourceDir: miniAppDir,
          content: formComponent.content,
          originalFileName: formComponent.fileName,
        })

        if (!dryRun) {
          // Copy the form component
          const targetPath = path.join(formsDir, formComponent.fileName)
          
          // Fix import paths if needed (e.g., ./locationOptions -> ./locationOptions)
          let content = formComponent.content
          // Imports from ./form/ need to be changed to ./
          content = content.replace(/from\s+['"]\.\/form\//g, "from './")
          
          fs.writeFileSync(targetPath, content)
        }

        // Copy additional files
        if (!dryRun) {
          const copied = copyAdditionalFormFiles(miniAppDir, formsDir)
          copied.forEach(f => additionalFiles.add(f))
        }
      }
    }
  }

  console.log(`   Extracted ${forms.length} form components`)
  if (additionalFiles.size > 0) {
    console.log(`   Copied ${additionalFiles.size} additional files: ${[...additionalFiles].join(', ')}`)
  }

  // Get template from one of the mini-apps
  const templateDir = config.appTemplate
  const appTemplate = extractAppTemplate(templateDir)
  const packageJson = extractPackageJson(templateDir)
  const viteConfig = extractViteConfig(templateDir)

  if (!appTemplate || !packageJson || !viteConfig) {
    console.log(`   ⚠️  Could not extract templates from ${templateDir}`)
    return false
  }

  // Copy additional directories (components, lib, etc.) from the template
  if (!dryRun) {
    const additionalSrcFiles = copyAdditionalSrcDirs(templateDir, path.join(consolidatedDir, 'src'))
    if (additionalSrcFiles.length > 0) {
      console.log(`   Copied ${additionalSrcFiles.length} additional src dirs/files: ${additionalSrcFiles.join(', ')}`)
    }
  }

  if (!dryRun) {
    // Generate consolidated package.json
    const consolidatedPkg = {
      ...packageJson,
      name: `@forms-comparison/${libraryId}`,
    }
    fs.writeFileSync(
      path.join(consolidatedDir, 'package.json'),
      JSON.stringify(consolidatedPkg, null, 2)
    )

    // Generate consolidated vite.config.js
    const consolidatedViteConfig = viteConfig.replace(
      /base:\s*['"][^'"]*['"]/,
      `base: '/20forms-20designs/${libraryId}/'`
    )
    fs.writeFileSync(
      path.join(consolidatedDir, 'vite.config.js'),
      consolidatedViteConfig
    )

    // Copy index.html
    const indexHtmlPath = path.join(APPS_DIR, templateDir, 'index.html')
    if (fs.existsSync(indexHtmlPath)) {
      const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8')
        .replace(/<title>.*<\/title>/, `<title>${config.name} Forms</title>`)
      fs.writeFileSync(path.join(consolidatedDir, 'index.html'), indexHtml)
    }

    // Copy main.jsx
    const mainPath = path.join(APPS_DIR, templateDir, 'src', 'main.jsx')
    const mainPathTsx = path.join(APPS_DIR, templateDir, 'src', 'main.tsx')
    const actualMainPath = fs.existsSync(mainPath) ? mainPath : mainPathTsx
    if (fs.existsSync(actualMainPath)) {
      const mainContent = fs.readFileSync(actualMainPath, 'utf-8')
      fs.writeFileSync(
        path.join(consolidatedDir, 'src', path.basename(actualMainPath)),
        mainContent
      )
    }

    // Generate consolidated App.jsx
    // For now, we'll create a simple router version
    // More complex libraries may need manual adjustment
    
    const isTypeScript = fs.existsSync(mainPathTsx)
    const appExt = isTypeScript ? 'tsx' : 'jsx'
    
    // Build App.jsx with form routing
    const formImports = forms.map(f => 
      `import ${f.component} from './forms/${f.file}'`
    ).join('\n')
    
    const formMapEntries = forms.map(f => 
      `  '${f.id}': ${f.component},`
    ).join('\n')

    // Extract CSS imports and other library-specific imports from the template
    // Handle multi-line imports by using regex
    const cssImportMatches = appTemplate.match(/import\s+['"][^'"]*\.(css|scss)['"]\s*;?/g) || []
    const cssImports = cssImportMatches
    
    // Extract library imports (everything from import to the next line with 'from')
    const libraryImportMatches = appTemplate.match(/import\s+[\s\S]*?\s+from\s+['"](?!react['"]|\.\/form)[^'"]+['"]\s*;?/g) || []
    const libraryImports = libraryImportMatches
      .filter(imp => !imp.includes("from 'react'") && !imp.includes('from "react"') && !imp.includes('./form/'))
      .map(imp => imp.trim())

    // Extract theme-related useEffect calls (the library-specific theme handling)
    // Look for useEffect blocks that handle theme
    const themeEffects = []
    const effectMatches = appTemplate.matchAll(/useEffect\s*\(\s*\(\)\s*=>\s*\{([\s\S]*?)\}\s*,\s*\[[^\]]*\]\s*\)/g)
    for (const match of effectMatches) {
      const effectBody = match[1]
      // Check if it's a theme-related effect (sets theme on body/document)
      if (effectBody.includes('document.body') || effectBody.includes('setAttribute')) {
        themeEffects.push(match[0])
      }
    }

    // Build the consolidated App
    let consolidatedApp = `${cssImports.join('\n')}
${cssImports.length > 0 ? '\n' : ''}import { useState, useEffect } from 'react'
${libraryImports.filter(l => !l.includes('useState') && !l.includes('useEffect')).join('\n')}

// Import all form components
${formImports}

// Map form IDs to components
const FORM_COMPONENTS = {
${formMapEntries}
}

function App() {
  const [formId, setFormId] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('form') || 'user-login'
  })

  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  // Apply theme on mount and when it changes
  useEffect(() => {
    // Check URL for theme parameter
    const params = new URLSearchParams(window.location.search)
    const urlTheme = params.get('theme')

    if (urlTheme === 'dark' || theme === 'dark') {
      document.body.classList.add('dark')
      document.body.style.backgroundColor = '#1a1a2e'
      document.body.style.color = '#ffffff'
    } else {
      document.body.classList.remove('dark')
      document.body.style.backgroundColor = ''
      document.body.style.color = ''
    }
  }, [theme])

  // Listen for theme changes from parent
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // Listen for URL changes
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      setFormId(params.get('form') || 'user-login')
      setTheme(params.get('theme') === 'dark' ? 'dark' : 'light')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Get the form component based on the form ID
  const FormComponent = FORM_COMPONENTS[formId]

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <FormComponent />
    </div>
  )
}

export default App
`

    fs.writeFileSync(path.join(consolidatedDir, 'src', `App.${appExt}`), consolidatedApp)
  }

  console.log(`   ✅ ${dryRun ? '[DRY RUN] Would create' : 'Created'} consolidated app at ${consolidatedDir}`)
  return true
}

/**
 * Update shell config to add library to consolidated list
 */
function updateShellConfig(libraryId, dryRun = false) {
  const configPath = path.join(APPS_DIR, 'shell', 'src', 'config.ts')
  let content = fs.readFileSync(configPath, 'utf-8')

  // Check if already in consolidated list
  if (content.includes(`'${libraryId}'`)) {
    console.log(`   ℹ️  ${libraryId} already in CONSOLIDATED_LIBRARIES`)
    return
  }

  // Add to the consolidated libraries set
  const setMatch = content.match(/(const CONSOLIDATED_LIBRARIES[^=]*=\s*new Set\s*\(\[\s*\n?)([^\]]*?)(\s*\]\s*\))/)
  if (setMatch) {
    const [fullMatch, start, entries, end] = setMatch
    const newEntries = entries.trim()
      ? `${entries.trimEnd()}\n  '${libraryId}',`
      : `  '${libraryId}',`
    
    const newContent = content.replace(fullMatch, `${start}${newEntries}\n${end}`)
    
    if (dryRun) {
      console.log(`   [DRY RUN] Would update shell config to add ${libraryId}`)
    } else {
      fs.writeFileSync(configPath, newContent)
      console.log(`   ✅ Updated shell config to add ${libraryId} to CONSOLIDATED_LIBRARIES`)
    }
  }
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const allLibraries = args.includes('--all')
  const libraryArg = args.find(a => a.startsWith('--library='))
  const specificLibrary = libraryArg ? libraryArg.split('=')[1] : null

  console.log('🔄 App Consolidation Script')
  console.log('=' .repeat(50))

  if (dryRun) {
    console.log('🏃 Running in DRY RUN mode - no changes will be made\n')
  }

  if (!allLibraries && !specificLibrary) {
    console.log('Usage: node scripts/consolidate-apps.mjs [--library=<id>] [--all] [--dry-run]')
    console.log('\nAvailable libraries:')
    Object.keys(LIBRARY_CONFIGS).forEach(id => {
      console.log(`  - ${id}`)
    })
    process.exit(1)
  }

  const libraries = allLibraries 
    ? Object.keys(LIBRARY_CONFIGS) 
    : [specificLibrary]

  let successCount = 0
  let failCount = 0

  for (const libraryId of libraries) {
    const success = await consolidateLibrary(libraryId, dryRun)
    if (success) {
      updateShellConfig(libraryId, dryRun)
      successCount++
    } else {
      failCount++
    }
  }

  console.log('\n' + '='.repeat(50))
  console.log(`✨ Consolidation complete!`)
  console.log(`   ✅ Successful: ${successCount}`)
  console.log(`   ❌ Failed: ${failCount}`)

  if (!dryRun && successCount > 0) {
    console.log('\n📝 Next steps:')
    console.log('   1. Run `npm install` in the workspace root')
    console.log('   2. Test the consolidated apps with `npm run dev:shell`')
    console.log('   3. Optionally remove old mini-app directories')
  }
}

main().catch(console.error)
