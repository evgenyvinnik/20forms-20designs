#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const appsDir = path.join(__dirname, '..', 'apps')

const forms = [
  'user-login',
  'user-registration',
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

const formComponentNames = {
  'user-login': 'UserLoginForm',
  'user-registration': 'UserRegistrationForm',
  'password-reset': 'PasswordResetForm',
  'two-factor-auth': 'TwoFactorAuthForm',
  'contact-inquiry': 'ContactInquiryForm',
  'newsletter-subscription': 'NewsletterSubscriptionForm',
  'profile-update': 'ProfileUpdateForm',
  'password-change': 'PasswordChangeForm',
  'billing-info': 'BillingInfoForm',
  'shipping-address': 'ShippingAddressForm',
  'checkout-payment': 'CheckoutPaymentForm',
  'order-tracking': 'OrderTrackingForm',
  'appointment-request': 'AppointmentRequestForm',
  'event-registration': 'EventRegistrationForm',
  'job-application': 'JobApplicationForm',
  'customer-feedback': 'CustomerFeedbackForm',
  'support-ticket': 'SupportTicketForm',
  'onboarding-wizard': 'OnboardingWizardForm',
  'advanced-search': 'AdvancedSearchForm',
  'privacy-consent': 'PrivacyConsentForm',
}

const formTitles = {
  'user-login': 'User Login',
  'user-registration': 'User Registration',
  'password-reset': 'Password Reset',
  'two-factor-auth': 'Two-Factor Auth',
  'contact-inquiry': 'Contact Inquiry',
  'newsletter-subscription': 'Newsletter Subscription',
  'profile-update': 'Profile Update',
  'password-change': 'Password Change',
  'billing-info': 'Billing Info',
  'shipping-address': 'Shipping Address',
  'checkout-payment': 'Checkout Payment',
  'order-tracking': 'Order Tracking',
  'appointment-request': 'Appointment Request',
  'event-registration': 'Event Registration',
  'job-application': 'Job Application',
  'customer-feedback': 'Customer Feedback',
  'support-ticket': 'Support Ticket',
  'onboarding-wizard': 'Onboarding Wizard',
  'advanced-search': 'Advanced Search',
  'privacy-consent': 'Privacy Consent',
}

// Templates
const packageJsonTemplate = (formId) => `{
  "name": "@forms-comparison/atlaskit-${formId}",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@atlaskit/button": "^20.3.0",
    "@atlaskit/checkbox": "^14.1.0",
    "@atlaskit/css-reset": "^6.11.0",
    "@atlaskit/form": "^10.6.0",
    "@atlaskit/primitives": "^13.5.0",
    "@atlaskit/radio": "^6.6.0",
    "@atlaskit/select": "^18.2.0",
    "@atlaskit/textarea": "^5.7.0",
    "@atlaskit/textfield": "^6.6.0",
    "@atlaskit/tokens": "^2.2.0",
    "@atlaskit/datetime-picker": "^15.3.0",
    "@atlaskit/heading": "^2.4.0",
    "@atlaskit/range": "^7.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.5.2",
    "vite": "^7.0.0"
  }
}
`

const viteConfigTemplate = (formId) => `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/20forms-20designs/atlaskit-${formId}/',
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

const indexHtmlTemplate = (formId, title) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} - Atlassian Atlaskit</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html, body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans', Ubuntu, 'Droid Sans', 'Helvetica Neue', sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`

const mainJsxTemplate = `import React from 'react'
import ReactDOM from 'react-dom/client'
import '@atlaskit/css-reset'
import App from './App'

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

const appJsxTemplate = (
  componentName
) => `import { useState, useEffect } from 'react'
import { setGlobalTheme } from '@atlaskit/tokens'
import { Box } from '@atlaskit/primitives'
import FormComponent from './form/${componentName}'
import './styles.css'

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    setGlobalTheme({
      colorMode: currentTheme,
    })
  }, [currentTheme])

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setCurrentTheme(event.data.theme === 'dark' ? 'dark' : 'light')
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <Box padding="space.200">
      <FormComponent />
    </Box>
  )
}

export default App
`

const stylesCssTemplate = `/* Atlaskit uses design tokens and CSS-in-JS, minimal custom CSS needed */
.app-container {
  min-height: 100vh;
}
`

// Form templates
const formTemplates = {
  'user-login': `import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack, Inline } from '@atlaskit/primitives'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-user-login-email">Email or username</Label>
          <Textfield
            id="atlaskit-user-login-email"
            name="identifier"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-user-login-password">Password</Label>
          <Textfield
            id="atlaskit-user-login-password"
            name="password"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="remember"
            label="Keep me signed in"
          />
        </Box>
        <Inline space="space.100">
          <Button type="submit" appearance="primary">Sign in</Button>
          <Button
            appearance="subtle"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </Inline>
      </Stack>
    </form>
  )
}

export default UserLoginForm
`,

  'user-registration': `import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-user-registration-name">Full name</Label>
          <Textfield
            id="atlaskit-user-registration-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-user-registration-email">Email address</Label>
          <Textfield
            id="atlaskit-user-registration-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-user-registration-username">Username</Label>
          <Textfield
            id="atlaskit-user-registration-username"
            name="username"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-user-registration-password">Password</Label>
          <Textfield
            id="atlaskit-user-registration-password"
            name="password"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-user-registration-confirm">Confirm password</Label>
          <Textfield
            id="atlaskit-user-registration-confirm"
            name="confirmPassword"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="terms"
            label="I agree to the terms and conditions"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Create account</Button>
      </Stack>
    </form>
  )
}

export default UserRegistrationForm
`,

  'password-reset': `import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Label } from '@atlaskit/form'
import { Box, Stack, Text } from '@atlaskit/primitives'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Text as="p">Request a password reset link via email.</Text>
        <Box>
          <Label htmlFor="atlaskit-password-reset-email">Email address</Label>
          <Textfield
            id="atlaskit-password-reset-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Send reset link</Button>
      </Stack>
    </form>
  )
}

export default PasswordResetForm
`,

  'two-factor-auth': `import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Label } from '@atlaskit/form'
import { Box, Stack, Inline, Text } from '@atlaskit/primitives'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Text as="p">Enter the code from your authenticator app or SMS.</Text>
        <Box>
          <Label htmlFor="atlaskit-two-factor-code">Verification code</Label>
          <Textfield
            id="atlaskit-two-factor-code"
            name="code"
            maxLength={6}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-two-factor-backup">Backup code (optional)</Label>
          <Textfield
            id="atlaskit-two-factor-backup"
            name="backupCode"
          />
        </Box>
        <Inline space="space.100">
          <Button type="submit" appearance="primary">Verify</Button>
          <Button
            appearance="subtle"
            onClick={() => alert('A new code has been sent!')}
          >
            Resend code
          </Button>
        </Inline>
      </Stack>
    </form>
  )
}

export default TwoFactorAuthForm
`,

  'contact-inquiry': `import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const topicOptions = [
  { label: 'Support', value: 'support' },
  { label: 'Sales', value: 'sales' },
  { label: 'Feedback', value: 'feedback' },
  { label: 'Other', value: 'other' },
]

function ContactInquiryForm() {
  const [topic, setTopic] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-contact-name">Full name</Label>
          <Textfield
            id="atlaskit-contact-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-contact-email">Email address</Label>
          <Textfield
            id="atlaskit-contact-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-contact-topic">Topic</Label>
          <Select
            inputId="atlaskit-contact-topic"
            name="topic"
            options={topicOptions}
            value={topic}
            onChange={setTopic}
            placeholder="Select topic"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-contact-message">Message</Label>
          <TextArea
            id="atlaskit-contact-message"
            name="message"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="consent"
            label="Allow follow-up communication"
          />
        </Box>
        <Button type="submit" appearance="primary">Submit inquiry</Button>
      </Stack>
    </form>
  )
}

export default ContactInquiryForm
`,

  'newsletter-subscription': `import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const frequencyOptions = [
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
]

function NewsletterSubscriptionForm() {
  const [frequency, setFrequency] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-newsletter-email">Email address</Label>
          <Textfield
            id="atlaskit-newsletter-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-newsletter-frequency">Frequency</Label>
          <Select
            inputId="atlaskit-newsletter-frequency"
            name="frequency"
            options={frequencyOptions}
            value={frequency}
            onChange={setFrequency}
            placeholder="Select frequency"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="agree"
            label="Receive product updates"
          />
        </Box>
        <Button type="submit" appearance="primary">Subscribe</Button>
      </Stack>
    </form>
  )
}

export default NewsletterSubscriptionForm
`,

  'profile-update': `import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-profile-first-name">First name</Label>
          <Textfield
            id="atlaskit-profile-first-name"
            name="firstName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-profile-last-name">Last name</Label>
          <Textfield
            id="atlaskit-profile-last-name"
            name="lastName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-profile-email">Email address</Label>
          <Textfield
            id="atlaskit-profile-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-profile-phone">Phone number</Label>
          <Textfield
            id="atlaskit-profile-phone"
            name="phone"
            type="tel"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-profile-bio">Short bio</Label>
          <TextArea
            id="atlaskit-profile-bio"
            name="bio"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Save changes</Button>
      </Stack>
    </form>
  )
}

export default ProfileUpdateForm
`,

  'password-change': `import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-password-change-current">Current password</Label>
          <Textfield
            id="atlaskit-password-change-current"
            name="currentPassword"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-password-change-new">New password</Label>
          <Textfield
            id="atlaskit-password-change-new"
            name="newPassword"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-password-change-confirm">Confirm new password</Label>
          <Textfield
            id="atlaskit-password-change-confirm"
            name="confirmPassword"
            type="password"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="logoutOthers"
            label="Sign out of other devices"
          />
        </Box>
        <Button type="submit" appearance="primary">Update password</Button>
      </Stack>
    </form>
  )
}

export default PasswordChangeForm
`,

  'billing-info': `import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const countryOptions = [
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
]

function BillingInfoForm() {
  const [country, setCountry] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-billing-name">Name on card</Label>
          <Textfield
            id="atlaskit-billing-name"
            name="cardName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-billing-card-number">Card number</Label>
          <Textfield
            id="atlaskit-billing-card-number"
            name="cardNumber"
            maxLength={19}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-billing-expiration">Expiration date</Label>
          <Textfield
            id="atlaskit-billing-expiration"
            name="expiration"
            placeholder="MM/YY"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-billing-cvc">Security code</Label>
          <Textfield
            id="atlaskit-billing-cvc"
            name="cvc"
            maxLength={4}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-billing-address">Billing address</Label>
          <Textfield
            id="atlaskit-billing-address"
            name="address"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-billing-country">Country</Label>
          <Select
            inputId="atlaskit-billing-country"
            name="country"
            options={countryOptions}
            value={country}
            onChange={setCountry}
            placeholder="Select country"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Save billing details</Button>
      </Stack>
    </form>
  )
}

export default BillingInfoForm
`,

  'shipping-address': `import { useState, useMemo } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming'
]

const CANADIAN_PROVINCES = [
  'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
  'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan',
  'Northwest Territories', 'Nunavut', 'Yukon'
]

const countryOptions = [
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
]

function ShippingAddressForm() {
  const [country, setCountry] = useState({ label: 'United States', value: 'US' })
  const [region, setRegion] = useState(null)

  const regionOptions = useMemo(() => {
    const regions = country?.value === 'CA' ? CANADIAN_PROVINCES : US_STATES
    return regions.map((r) => ({ label: r, value: r }))
  }, [country])

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-shipping-full-name">Recipient name</Label>
          <Textfield
            id="atlaskit-shipping-full-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-street">Street address</Label>
          <Textfield
            id="atlaskit-shipping-street"
            name="street"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-street-2">Apartment, suite, etc.</Label>
          <Textfield
            id="atlaskit-shipping-street-2"
            name="street2"
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-city">City</Label>
          <Textfield
            id="atlaskit-shipping-city"
            name="city"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-country">Country</Label>
          <Select
            inputId="atlaskit-shipping-country"
            name="country"
            options={countryOptions}
            value={country}
            onChange={(val) => {
              setCountry(val)
              setRegion(null)
            }}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-region">State / Province / Territory</Label>
          <Select
            inputId="atlaskit-shipping-region"
            name="region"
            options={regionOptions}
            value={region}
            onChange={setRegion}
            placeholder="Select an option"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-shipping-postal">Postal code</Label>
          <Textfield
            id="atlaskit-shipping-postal"
            name="postalCode"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="default"
            label="Use as default shipping address"
          />
        </Box>
        <Button type="submit" appearance="primary">Save address</Button>
      </Stack>
    </form>
  )
}

export default ShippingAddressForm
`,

  'checkout-payment': `import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const shippingOptions = [
  { label: 'Standard', value: 'standard' },
  { label: 'Express', value: 'express' },
  { label: 'Overnight', value: 'overnight' },
]

function CheckoutPaymentForm() {
  const [shipping, setShipping] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-checkout-email">Email for receipt</Label>
          <Textfield
            id="atlaskit-checkout-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-checkout-shipping-method">Shipping method</Label>
          <Select
            inputId="atlaskit-checkout-shipping-method"
            name="shippingMethod"
            options={shippingOptions}
            value={shipping}
            onChange={setShipping}
            placeholder="Select shipping"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-checkout-card-number">Card number</Label>
          <Textfield
            id="atlaskit-checkout-card-number"
            name="cardNumber"
            maxLength={19}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-checkout-expiration">Expiration</Label>
          <Textfield
            id="atlaskit-checkout-expiration"
            name="expiration"
            placeholder="MM/YY"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-checkout-cvc">CVC</Label>
          <Textfield
            id="atlaskit-checkout-cvc"
            name="cvc"
            maxLength={4}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-checkout-promo">Promo code</Label>
          <Textfield
            id="atlaskit-checkout-promo"
            name="promoCode"
          />
        </Box>
        <Button type="submit" appearance="primary">Place order</Button>
      </Stack>
    </form>
  )
}

export default CheckoutPaymentForm
`,

  'order-tracking': `import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-order-tracking-number">Order number</Label>
          <Textfield
            id="atlaskit-order-tracking-number"
            name="orderNumber"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-order-tracking-email">Email address</Label>
          <Textfield
            id="atlaskit-order-tracking-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-order-tracking-postal">Postal code</Label>
          <Textfield
            id="atlaskit-order-tracking-postal"
            name="postalCode"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Find order</Button>
      </Stack>
    </form>
  )
}

export default OrderTrackingForm
`,

  'appointment-request': `import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { DatePicker, TimePicker } from '@atlaskit/datetime-picker'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-appointment-name">Full name</Label>
          <Textfield
            id="atlaskit-appointment-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-appointment-email">Email address</Label>
          <Textfield
            id="atlaskit-appointment-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-appointment-date">Preferred date</Label>
          <DatePicker
            id="atlaskit-appointment-date"
            name="date"
            placeholder="Select a date"
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-appointment-time">Preferred time</Label>
          <TimePicker
            id="atlaskit-appointment-time"
            name="time"
            placeholder="Select a time"
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-appointment-reason">Reason for visit</Label>
          <TextArea
            id="atlaskit-appointment-reason"
            name="reason"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Request appointment</Button>
      </Stack>
    </form>
  )
}

export default AppointmentRequestForm
`,

  'event-registration': `import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import Range from '@atlaskit/range'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack, Text } from '@atlaskit/primitives'

const ticketOptions = [
  { label: 'General admission', value: 'general' },
  { label: 'VIP', value: 'vip' },
  { label: 'Student', value: 'student' },
]

function EventRegistrationForm() {
  const [ticket, setTicket] = useState(null)
  const [guestCount, setGuestCount] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-event-name">Full name</Label>
          <Textfield
            id="atlaskit-event-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-event-email">Email address</Label>
          <Textfield
            id="atlaskit-event-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-event-ticket">Ticket type</Label>
          <Select
            inputId="atlaskit-event-ticket"
            name="ticketType"
            options={ticketOptions}
            value={ticket}
            onChange={setTicket}
            placeholder="Select ticket"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-event-guests">Number of guests: {guestCount}</Label>
          <Range
            id="atlaskit-event-guests"
            min={0}
            max={20}
            value={guestCount}
            onChange={setGuestCount}
          />
        </Box>
        <Box>
          <Checkbox
            name="newsletter"
            label="Notify me about future events"
          />
        </Box>
        <Button type="submit" appearance="primary">Register</Button>
      </Stack>
    </form>
  )
}

export default EventRegistrationForm
`,

  'job-application': `import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-job-full-name">Full name</Label>
          <Textfield
            id="atlaskit-job-full-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-job-email">Email address</Label>
          <Textfield
            id="atlaskit-job-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-job-phone">Phone number</Label>
          <Textfield
            id="atlaskit-job-phone"
            name="phone"
            type="tel"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-job-role">Role applied for</Label>
          <Textfield
            id="atlaskit-job-role"
            name="role"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-job-resume">Resume link</Label>
          <Textfield
            id="atlaskit-job-resume"
            name="resume"
            type="url"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-job-cover-letter">Cover letter</Label>
          <TextArea
            id="atlaskit-job-cover-letter"
            name="coverLetter"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="updates"
            label="Keep me informed about future roles"
          />
        </Box>
        <Button type="submit" appearance="primary">Submit application</Button>
      </Stack>
    </form>
  )
}

export default JobApplicationForm
`,

  'customer-feedback': `import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const ratingOptions = [
  { label: 'Excellent', value: 'excellent' },
  { label: 'Good', value: 'good' },
  { label: 'Average', value: 'average' },
  { label: 'Poor', value: 'poor' },
]

function CustomerFeedbackForm() {
  const [rating, setRating] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-feedback-name">Name</Label>
          <Textfield
            id="atlaskit-feedback-name"
            name="name"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-feedback-email">Email address</Label>
          <Textfield
            id="atlaskit-feedback-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-feedback-rating">Overall rating</Label>
          <Select
            inputId="atlaskit-feedback-rating"
            name="rating"
            options={ratingOptions}
            value={rating}
            onChange={setRating}
            placeholder="Select rating"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-feedback-comments">Comments</Label>
          <TextArea
            id="atlaskit-feedback-comments"
            name="comments"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="followUp"
            label="I would like a follow-up"
          />
        </Box>
        <Button type="submit" appearance="primary">Send feedback</Button>
      </Stack>
    </form>
  )
}

export default CustomerFeedbackForm
`,

  'support-ticket': `import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { RadioGroup } from '@atlaskit/radio'
import { Label } from '@atlaskit/form'
import { Box, Stack, Text } from '@atlaskit/primitives'

const priorityOptions = [
  { name: 'priority', value: 'low', label: 'Low' },
  { name: 'priority', value: 'medium', label: 'Medium' },
  { name: 'priority', value: 'high', label: 'High' },
]

function SupportTicketForm() {
  const [priority, setPriority] = useState('low')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-ticket-subject">Subject</Label>
          <Textfield
            id="atlaskit-ticket-subject"
            name="subject"
            isRequired
          />
        </Box>
        <Box>
          <Text as="strong">Priority</Text>
          <RadioGroup
            name="priority"
            options={priorityOptions}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-ticket-description">Issue description</Label>
          <TextArea
            id="atlaskit-ticket-description"
            name="description"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-ticket-attachments">Attachments</Label>
          <input
            id="atlaskit-ticket-attachments"
            name="attachments"
            type="file"
            multiple
            style={{ display: 'block', marginTop: '8px' }}
          />
        </Box>
        <Button type="submit" appearance="primary">Submit ticket</Button>
      </Stack>
    </form>
  )
}

export default SupportTicketForm
`,

  'onboarding-wizard': `import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import Heading from '@atlaskit/heading'
import { Box, Stack, Inline } from '@atlaskit/primitives'

const teamSizeOptions = [
  { label: '1-5', value: '1-5' },
  { label: '6-20', value: '6-20' },
  { label: '21-50', value: '21-50' },
  { label: '50+', value: '50+' },
]

function OnboardingWizardForm() {
  const [teamSize, setTeamSize] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.300">
        <Box>
          <Heading size="small">Step 1: Account</Heading>
          <Stack space="space.200">
            <Box>
              <Label htmlFor="atlaskit-onboarding-email">Work email</Label>
              <Textfield
                id="atlaskit-onboarding-email"
                name="email"
                type="email"
                isRequired
              />
            </Box>
            <Box>
              <Label htmlFor="atlaskit-onboarding-password">Password</Label>
              <Textfield
                id="atlaskit-onboarding-password"
                name="password"
                type="password"
                isRequired
              />
            </Box>
          </Stack>
        </Box>
        <Box>
          <Heading size="small">Step 2: Team</Heading>
          <Stack space="space.200">
            <Box>
              <Label htmlFor="atlaskit-onboarding-team-name">Team name</Label>
              <Textfield
                id="atlaskit-onboarding-team-name"
                name="teamName"
                isRequired
              />
            </Box>
            <Box>
              <Label htmlFor="atlaskit-onboarding-size">Team size</Label>
              <Select
                inputId="atlaskit-onboarding-size"
                name="teamSize"
                options={teamSizeOptions}
                value={teamSize}
                onChange={setTeamSize}
                placeholder="Select size"
                isRequired
              />
            </Box>
          </Stack>
        </Box>
        <Box>
          <Heading size="small">Step 3: Preferences</Heading>
          <Stack space="space.200">
            <Box>
              <Label htmlFor="atlaskit-onboarding-goal">Primary goal</Label>
              <TextArea
                id="atlaskit-onboarding-goal"
                name="goal"
                isRequired
              />
            </Box>
            <Box>
              <Checkbox
                name="updates"
                label="Send me product tips"
              />
            </Box>
          </Stack>
        </Box>
        <Inline space="space.100">
          <Button
            appearance="subtle"
            onClick={() => alert('Back action placeholder')}
          >
            Back
          </Button>
          <Button type="submit" appearance="primary">Finish setup</Button>
        </Inline>
      </Stack>
    </form>
  )
}

export default OnboardingWizardForm
`,

  'advanced-search': `import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { DatePicker } from '@atlaskit/datetime-picker'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const categoryOptions = [
  { label: 'All', value: 'all' },
  { label: 'Articles', value: 'articles' },
  { label: 'Products', value: 'products' },
  { label: 'People', value: 'people' },
]

const sortOptions = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
]

function AdvancedSearchForm() {
  const [category, setCategory] = useState({ label: 'All', value: 'all' })
  const [sort, setSort] = useState({ label: 'Relevance', value: 'relevance' })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-search-query">Search query</Label>
          <Textfield
            id="atlaskit-search-query"
            name="query"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-search-category">Category</Label>
          <Select
            inputId="atlaskit-search-category"
            name="category"
            options={categoryOptions}
            value={category}
            onChange={setCategory}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-search-date-from">Date from</Label>
          <DatePicker
            id="atlaskit-search-date-from"
            name="dateFrom"
            placeholder="Select a date"
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-search-date-to">Date to</Label>
          <DatePicker
            id="atlaskit-search-date-to"
            name="dateTo"
            placeholder="Select a date"
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-search-sort">Sort by</Label>
          <Select
            inputId="atlaskit-search-sort"
            name="sort"
            options={sortOptions}
            value={sort}
            onChange={setSort}
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="includeArchived"
            label="Include archived"
          />
        </Box>
        <Button type="submit" appearance="primary">Search</Button>
      </Stack>
    </form>
  )
}

export default AdvancedSearchForm
`,

  'privacy-consent': `import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack, Text } from '@atlaskit/primitives'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-privacy-name">Full name</Label>
          <Textfield
            id="atlaskit-privacy-name"
            name="fullName"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-privacy-email">Email address</Label>
          <Textfield
            id="atlaskit-privacy-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Text as="strong">Communication channels</Text>
          <Stack space="space.100">
            <Checkbox
              name="emailOptIn"
              label="Email updates"
            />
            <Checkbox
              name="smsOptIn"
              label="SMS notifications"
            />
            <Checkbox
              name="phoneOptIn"
              label="Phone calls"
            />
          </Stack>
        </Box>
        <Box>
          <Text as="strong">Privacy options</Text>
          <Stack space="space.100">
            <Checkbox
              name="analytics"
              label="Allow analytics cookies"
            />
            <Checkbox
              name="personalization"
              label="Allow personalized content"
            />
          </Stack>
        </Box>
        <Box>
          <Label htmlFor="atlaskit-privacy-notes">Additional notes</Label>
          <TextArea
            id="atlaskit-privacy-notes"
            name="notes"
          />
        </Box>
        <Button type="submit" appearance="primary">Save preferences</Button>
      </Stack>
    </form>
  )
}

export default PrivacyConsentForm
`,
}

// Generate apps
forms.forEach((formId) => {
  const appDir = path.join(appsDir, `atlaskit-${formId}`)
  const srcDir = path.join(appDir, 'src')
  const formDir = path.join(srcDir, 'form')

  // Create directories
  fs.mkdirSync(formDir, { recursive: true })

  // Write files
  fs.writeFileSync(
    path.join(appDir, 'package.json'),
    packageJsonTemplate(formId)
  )
  fs.writeFileSync(
    path.join(appDir, 'vite.config.js'),
    viteConfigTemplate(formId)
  )
  fs.writeFileSync(
    path.join(appDir, 'index.html'),
    indexHtmlTemplate(formId, formTitles[formId])
  )
  fs.writeFileSync(path.join(srcDir, 'main.jsx'), mainJsxTemplate)
  fs.writeFileSync(
    path.join(srcDir, 'App.jsx'),
    appJsxTemplate(formComponentNames[formId])
  )
  fs.writeFileSync(path.join(srcDir, 'styles.css'), stylesCssTemplate)
  fs.writeFileSync(
    path.join(formDir, `${formComponentNames[formId]}.jsx`),
    formTemplates[formId]
  )

  console.log(`✓ Created atlaskit-${formId}`)
})

console.log(`\nGenerated ${forms.length} Atlassian Atlaskit form apps.`)
