#!/usr/bin/env node

/**
 * This script generates all 360 mini-apps for the 18 new component libraries.
 * Each library gets 20 forms, following the same structure as existing implementations.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const appsDir = path.join(__dirname, '..', 'apps')

// Form definitions
const FORMS = [
  { id: 'user-login', name: 'UserLoginForm', title: 'User Login' },
  { id: 'user-registration', name: 'UserRegistrationForm', title: 'User Registration' },
  { id: 'password-reset', name: 'PasswordResetForm', title: 'Password Reset' },
  { id: 'two-factor-auth', name: 'TwoFactorAuthForm', title: 'Two-Factor Auth' },
  { id: 'contact-inquiry', name: 'ContactInquiryForm', title: 'Contact Inquiry' },
  { id: 'newsletter-subscription', name: 'NewsletterSubscriptionForm', title: 'Newsletter Subscription' },
  { id: 'profile-update', name: 'ProfileUpdateForm', title: 'Profile Update' },
  { id: 'password-change', name: 'PasswordChangeForm', title: 'Password Change' },
  { id: 'billing-info', name: 'BillingInfoForm', title: 'Billing Info' },
  { id: 'shipping-address', name: 'ShippingAddressForm', title: 'Shipping Address' },
  { id: 'checkout-payment', name: 'CheckoutPaymentForm', title: 'Checkout Payment' },
  { id: 'order-tracking', name: 'OrderTrackingForm', title: 'Order Tracking' },
  { id: 'appointment-request', name: 'AppointmentRequestForm', title: 'Appointment Request' },
  { id: 'event-registration', name: 'EventRegistrationForm', title: 'Event Registration' },
  { id: 'job-application', name: 'JobApplicationForm', title: 'Job Application' },
  { id: 'customer-feedback', name: 'CustomerFeedbackForm', title: 'Customer Feedback' },
  { id: 'support-ticket', name: 'SupportTicketForm', title: 'Support Ticket' },
  { id: 'onboarding-wizard', name: 'OnboardingWizardForm', title: 'Onboarding Wizard' },
  { id: 'advanced-search', name: 'AdvancedSearchForm', title: 'Advanced Search' },
  { id: 'privacy-consent', name: 'PrivacyConsentForm', title: 'Privacy Consent' },
]

// Library configurations with their specific dependencies and setup
const LIBRARIES = [
  {
    id: 'coreui',
    name: 'CoreUI',
    prefix: 'coreui',
    dependencies: {
      '@coreui/react': '^5.4.0',
      '@coreui/coreui': '^5.2.0',
    },
    supportsTheme: true,
  },
  {
    id: 'flowbite',
    name: 'Flowbite React',
    prefix: 'flowbite',
    dependencies: {
      'flowbite-react': '^0.10.2',
      'flowbite': '^2.5.2',
      'tailwindcss': '^3.4.17',
      'postcss': '^8.5.4',
      'autoprefixer': '^10.4.21',
    },
    supportsTheme: true,
    needsTailwind: true,
  },
  {
    id: 'fluent-ui',
    name: 'Fluent UI',
    prefix: 'fluentui',
    dependencies: {
      '@fluentui/react-components': '^9.56.0',
    },
    supportsTheme: true,
  },
  {
    id: 'grommet',
    name: 'Grommet',
    prefix: 'grommet',
    dependencies: {
      'grommet': '^2.39.0',
      'grommet-icons': '^4.13.0',
      'styled-components': '^6.1.18',
    },
    supportsTheme: true,
  },
  {
    id: 'headless-ui',
    name: 'Headless UI',
    prefix: 'headlessui',
    dependencies: {
      '@headlessui/react': '^2.2.4',
      'tailwindcss': '^3.4.17',
      'postcss': '^8.5.4',
      'autoprefixer': '^10.4.21',
    },
    supportsTheme: true,
    needsTailwind: true,
  },
  {
    id: 'mantine',
    name: 'Mantine',
    prefix: 'mantine',
    dependencies: {
      '@mantine/core': '^7.17.0',
      '@mantine/hooks': '^7.17.0',
      'postcss': '^8.5.4',
      'postcss-preset-mantine': '^1.17.0',
      'postcss-simple-vars': '^7.0.1',
    },
    supportsTheme: true,
    needsMantinePostcss: true,
  },
  {
    id: 'material-tailwind',
    name: 'Material Tailwind',
    prefix: 'materialtw',
    dependencies: {
      '@material-tailwind/react': '^2.1.10',
      'tailwindcss': '^3.4.17',
      'postcss': '^8.5.4',
      'autoprefixer': '^10.4.21',
    },
    supportsTheme: true,
    needsTailwind: true,
  },
  {
    id: 'patternfly',
    name: 'PatternFly',
    prefix: 'patternfly',
    dependencies: {
      '@patternfly/react-core': '^6.2.1',
      '@patternfly/react-icons': '^6.2.1',
    },
    supportsTheme: true,
  },
  {
    id: 'primer',
    name: 'Primer React',
    prefix: 'primer',
    dependencies: {
      '@primer/react': '^37.18.0',
      'styled-components': '^6.1.18',
    },
    supportsTheme: true,
  },
  {
    id: 'react-spectrum',
    name: 'React Spectrum',
    prefix: 'spectrum',
    dependencies: {
      '@adobe/react-spectrum': '^3.40.0',
    },
    supportsTheme: true,
  },
  {
    id: 'rsuite',
    name: 'RSuite',
    prefix: 'rsuite',
    dependencies: {
      'rsuite': '^5.78.0',
    },
    supportsTheme: true,
  },
  {
    id: 'lightning',
    name: 'Lightning Design System React',
    prefix: 'lightning',
    dependencies: {
      '@salesforce/design-system-react': '^0.10.59',
      '@salesforce-ux/design-system': '^2.26.6',
    },
    supportsTheme: true,
  },
  {
    id: 'semantic-ui',
    name: 'Semantic UI React',
    prefix: 'semanticui',
    dependencies: {
      'semantic-ui-react': '^2.1.5',
      'semantic-ui-css': '^2.5.0',
    },
    supportsTheme: true,
  },
  {
    id: 'semi',
    name: 'Semi Design',
    prefix: 'semi',
    dependencies: {
      '@douyinfe/semi-ui': '^2.75.1',
    },
    supportsTheme: true,
  },
  {
    id: 'theme-ui',
    name: 'Theme UI',
    prefix: 'themeui',
    dependencies: {
      'theme-ui': '^0.16.2',
      '@emotion/react': '^11.14.0',
    },
    supportsTheme: true,
  },
]

// Helper to generate package.json
function generatePackageJson(library, form) {
  const pkg = {
    name: `@forms-comparison/${library.id}-${form.id}`,
    private: true,
    version: '1.0.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview',
    },
    dependencies: {
      react: '^18.3.1',
      'react-dom': '^18.3.1',
      ...library.dependencies,
    },
    devDependencies: {
      '@vitejs/plugin-react': '^5.1.1',
      vite: '^7.2.4',
    },
  }
  return JSON.stringify(pkg, null, 2)
}

// Helper to generate vite.config.js
function generateViteConfig(library, form) {
  const base = `/20forms-20designs/${library.id}-${form.id}/`
  
  if (library.needsMantinePostcss) {
    return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '${base}',
  css: {
    postcss: {
      plugins: [
        require('postcss-preset-mantine')(),
        require('postcss-simple-vars')({
          variables: {
            'mantine-breakpoint-xs': '36em',
            'mantine-breakpoint-sm': '48em',
            'mantine-breakpoint-md': '62em',
            'mantine-breakpoint-lg': '75em',
            'mantine-breakpoint-xl': '88em',
          },
        }),
      ],
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    exclude: [],
  },
}))
`
  }

  return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '${base}',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    exclude: [],
  },
}))
`
}

// Helper to generate index.html
function generateIndexHtml(library, form) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${form.title} - ${library.name}</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html, body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`
}

// Helper to generate main.jsx
function generateMainJsx() {
  return `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Report height to parent window for auto-sizing iframes
let lastReportedHeight = 0

function reportHeight() {
  if (window.parent === window) return

  const root = document.getElementById('root')
  if (!root) return

  const height = root.scrollHeight

  if (Math.abs(height - lastReportedHeight) > 5) {
    lastReportedHeight = height
    window.parent.postMessage({ type: 'IFRAME_HEIGHT', height }, '*')
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

setTimeout(reportHeight, 200)
setTimeout(reportHeight, 500)
setTimeout(reportHeight, 1000)

window.addEventListener('load', () => setTimeout(reportHeight, 100))
`
}

// Helper to generate tailwind.config.js for Tailwind-based libraries
function generateTailwindConfig(library) {
  if (library.id === 'flowbite') {
    return `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
`
  }

  if (library.id === 'material-tailwind') {
    return `/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
})
`
  }

  return `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
`
}

// Helper to generate postcss.config.js
function generatePostcssConfig() {
  return `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`
}

// Helper to generate tailwind CSS file
function generateTailwindCss() {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;
`
}

// Generate location options file for shipping address
function generateLocationOptions() {
  return `export const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming',
]

export const CANADIAN_PROVINCES = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
  'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan',
  'Northwest Territories', 'Nunavut', 'Yukon',
]

export const COUNTRIES = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
]
`
}

// Import the form generators
import { generateAppJsx } from './form-generators/app-generator.mjs'
import { generateForm } from './form-generators/form-generator.mjs'

// Main function to generate all apps
async function generateAllApps() {
  console.log('Starting generation of new library apps...\n')

  let created = 0
  let skipped = 0

  for (const library of LIBRARIES) {
    console.log(`\nProcessing ${library.name}...`)

    for (const form of FORMS) {
      const appDir = path.join(appsDir, `${library.id}-${form.id}`)
      const srcDir = path.join(appDir, 'src')
      const formDir = path.join(srcDir, 'form')

      // Skip if directory already exists
      if (fs.existsSync(appDir)) {
        skipped++
        continue
      }

      // Create directories
      fs.mkdirSync(appDir, { recursive: true })
      fs.mkdirSync(srcDir, { recursive: true })
      fs.mkdirSync(formDir, { recursive: true })

      // Generate files
      fs.writeFileSync(path.join(appDir, 'package.json'), generatePackageJson(library, form))
      fs.writeFileSync(path.join(appDir, 'vite.config.js'), generateViteConfig(library, form))
      fs.writeFileSync(path.join(appDir, 'index.html'), generateIndexHtml(library, form))
      fs.writeFileSync(path.join(srcDir, 'main.jsx'), generateMainJsx())
      fs.writeFileSync(path.join(srcDir, 'App.jsx'), generateAppJsx(library, form))
      fs.writeFileSync(path.join(formDir, `${form.name}.jsx`), generateForm(library, form))

      // Generate Tailwind config for Tailwind-based libraries
      if (library.needsTailwind) {
        fs.writeFileSync(path.join(appDir, 'tailwind.config.js'), generateTailwindConfig(library))
        fs.writeFileSync(path.join(appDir, 'postcss.config.js'), generatePostcssConfig())
        fs.writeFileSync(path.join(srcDir, 'index.css'), generateTailwindCss())
      }

      // Generate location options for shipping address
      if (form.id === 'shipping-address') {
        fs.writeFileSync(path.join(formDir, 'locationOptions.js'), generateLocationOptions())
      }

      created++
    }
  }

  console.log(`\n\nGeneration complete!`)
  console.log(`Created: ${created} apps`)
  console.log(`Skipped (already exist): ${skipped} apps`)
}

// Run the generator
generateAllApps().catch(console.error)
