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

function fixFormComponent(formName) {
  const pascalCaseName = toPascalCase(formName)
  const formPath = path.join(
    appsDir,
    `arco-design-${formName}`,
    'src',
    'form',
    `${pascalCaseName}Form.jsx`
  )

  if (!fs.existsSync(formPath)) {
    console.error(`Form not found: ${formPath}`)
    return
  }

  let content = fs.readFileSync(formPath, 'utf-8')

  // Fix checkboxes: Remove type="checkbox" and wrap label text as children
  content = content.replace(
    /<Checkbox ([^>]*)type="checkbox"([^>]*)\/>\s*([^<\n]+)/g,
    (match, before, after, labelText) => {
      const attrs = (before + after).trim()
      return `<Checkbox ${attrs}>\n          ${labelText.trim()}\n        </Checkbox>`
    }
  )

  // Fix standalone Buttons to use Arco Button
  content = content.replace(
    /<button\s+type="button"([^>]*)>\s*([^<]+)\s*<\/button>/g,
    (match, attrs, text) => {
      return `<Button htmlType="button"${attrs}>\n          ${text.trim()}\n        </Button>`
    }
  )

  // Wrap button groups in a div with spacing
  content = content.replace(
    /(\s+)<Button type="primary" htmlType="submit">(.*?)<\/Button>\s*<Button/g,
    (match, indent, submitText) => {
      return `${indent}<div style={{ marginTop: '12px' }}>\n${indent}  <Button type="primary" htmlType="submit" style={{ marginRight: '8px' }}>\n${indent}    ${submitText}\n${indent}  </Button>\n${indent}  <Button`
    }
  )

  // Close the button group div
  content = content.replace(
    /<\/Button>\s*<\/form>/g,
    '</Button>\n      </div>\n    </form>'
  )

  // Fix Select components to use Arco's Select with Option
  content = content.replace(
    /<Select\s+([^>]*)>([\s\S]*?)<\/Select>/g,
    (match, attrs, options) => {
      // Extract option elements
      const optionMatches = [
        ...options.matchAll(/<option value="([^"]*)"[^>]*>([^<]+)<\/option>/g),
      ]

      if (optionMatches.length === 0) return match

      const arcoOptions = optionMatches
        .map(([, value, text]) => {
          return `        <Select.Option value="${value}">${text.trim()}</Select.Option>`
        })
        .join('\n')

      return `<Select ${attrs}>\n${arcoOptions}\n        </Select>`
    }
  )

  // Add proper spacing to form fields
  content = content.replace(
    /(<div>\s*<label)/g,
    "<div style={{ marginBottom: '12px' }}>\n        <label style={{ display: 'block', marginBottom: '4px' }}"
  )

  // Add full width to inputs
  content = content.replace(/<Input ([^>]*?)\/>/g, (match, attrs) => {
    if (!attrs.includes('style=')) {
      return `<Input ${attrs} style={{ width: '100%' }} />`
    }
    return match
  })

  content = content.replace(/<Input\.Password ([^>]*?)\/>/g, (match, attrs) => {
    if (!attrs.includes('style=')) {
      return `<Input.Password ${attrs} style={{ width: '100%' }} />`
    }
    return match
  })

  content = content.replace(/<Select ([^>]*?)>/g, (match, attrs) => {
    if (!attrs.includes('style=')) {
      return `<Select ${attrs} style={{ width: '100%' }}>`
    }
    return match
  })

  content = content.replace(/<DatePicker ([^>]*?)\/>/g, (match, attrs) => {
    if (!attrs.includes('style=')) {
      return `<DatePicker ${attrs} style={{ width: '100%' }} />`
    }
    return match
  })

  content = content.replace(/<Textarea ([^>]*?)\/>/g, (match, attrs) => {
    if (!attrs.includes('style=')) {
      return `<Textarea ${attrs} style={{ width: '100%' }} />`
    }
    return match
  })

  fs.writeFileSync(formPath, content)
  console.log(`✓ Fixed ${formName}`)
}

console.log('Fixing Arco Design forms...\n')

FORMS.forEach((formName) => {
  fixFormComponent(formName)
})

console.log('\n✓ All Arco Design forms fixed!')
