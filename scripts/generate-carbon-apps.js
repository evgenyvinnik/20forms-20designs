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
  "name": "@forms-comparison/carbon-${formId}",
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
    "@carbon/react": "^1.71.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.1",
    "sass": "^1.77.8",
    "vite": "^7.2.4"
  }
}
`

const viteConfigTemplate = (formId) => `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/20forms-20designs/carbon-${formId}/',
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
    <title>${title} - Carbon Design System</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html, body {
        font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
import { Theme } from '@carbon/react'
import FormComponent from './form/${componentName}'
import './styles.scss'

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('theme') === 'dark' ? 'g100' : 'white'
  })

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setCurrentTheme(event.data.theme === 'dark' ? 'g100' : 'white')
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <Theme theme={currentTheme}>
      <div className="app-container">
        <FormComponent />
      </div>
    </Theme>
  )
}

export default App
`

const stylesScssTemplate = `@use '@carbon/react';

.app-container {
  padding: 16px;
  min-height: 100vh;
  background: react.$background;
  color: react.$text-primary;
}
`

// Form templates
const formTemplates = {
  'user-login': `import { Form, TextInput, Button, Checkbox, Stack } from '@carbon/react'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-user-login-email"
          name="identifier"
          labelText="Email or username"
          required
        />
        <TextInput
          id="carbon-user-login-password"
          name="password"
          type="password"
          labelText="Password"
          required
        />
        <Checkbox
          id="carbon-user-login-remember"
          name="remember"
          labelText="Keep me signed in"
        />
        <Stack gap={4} orientation="horizontal">
          <Button type="submit">Sign in</Button>
          <Button
            kind="secondary"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </Stack>
      </Stack>
    </Form>
  )
}

export default UserLoginForm
`,

  'user-registration': `import { Form, TextInput, Button, Checkbox, Stack } from '@carbon/react'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-user-registration-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-user-registration-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <TextInput
          id="carbon-user-registration-username"
          name="username"
          labelText="Username"
          required
        />
        <TextInput
          id="carbon-user-registration-password"
          name="password"
          type="password"
          labelText="Password"
          required
        />
        <TextInput
          id="carbon-user-registration-confirm"
          name="confirmPassword"
          type="password"
          labelText="Confirm password"
          required
        />
        <Checkbox
          id="carbon-user-registration-terms"
          name="terms"
          labelText="I agree to the terms and conditions"
          required
        />
        <Button type="submit">Create account</Button>
      </Stack>
    </Form>
  )
}

export default UserRegistrationForm
`,

  'password-reset': `import { Form, TextInput, Button, Stack } from '@carbon/react'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <p>Request a password reset link via email.</p>
        <TextInput
          id="carbon-password-reset-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <Button type="submit">Send reset link</Button>
      </Stack>
    </Form>
  )
}

export default PasswordResetForm
`,

  'two-factor-auth': `import { Form, TextInput, Button, Stack } from '@carbon/react'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <p>Enter the code from your authenticator app or SMS.</p>
        <TextInput
          id="carbon-two-factor-code"
          name="code"
          labelText="Verification code"
          maxLength={6}
          required
        />
        <TextInput
          id="carbon-two-factor-backup"
          name="backupCode"
          labelText="Backup code (optional)"
        />
        <Stack gap={4} orientation="horizontal">
          <Button type="submit">Verify</Button>
          <Button
            kind="secondary"
            onClick={() => alert('A new code has been sent!')}
          >
            Resend code
          </Button>
        </Stack>
      </Stack>
    </Form>
  )
}

export default TwoFactorAuthForm
`,

  'contact-inquiry': `import { Form, TextInput, Select, SelectItem, TextArea, Button, Checkbox, Stack } from '@carbon/react'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-contact-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-contact-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <Select
          id="carbon-contact-topic"
          name="topic"
          labelText="Topic"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select topic" />
          <SelectItem value="support" text="Support" />
          <SelectItem value="sales" text="Sales" />
          <SelectItem value="feedback" text="Feedback" />
          <SelectItem value="other" text="Other" />
        </Select>
        <TextArea
          id="carbon-contact-message"
          name="message"
          labelText="Message"
          rows={4}
          required
        />
        <Checkbox
          id="carbon-contact-consent"
          name="consent"
          labelText="Allow follow-up communication"
        />
        <Button type="submit">Submit inquiry</Button>
      </Stack>
    </Form>
  )
}

export default ContactInquiryForm
`,

  'newsletter-subscription': `import { Form, TextInput, Select, SelectItem, Button, Checkbox, Stack } from '@carbon/react'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-newsletter-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <Select
          id="carbon-newsletter-frequency"
          name="frequency"
          labelText="Frequency"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select frequency" />
          <SelectItem value="weekly" text="Weekly" />
          <SelectItem value="monthly" text="Monthly" />
          <SelectItem value="quarterly" text="Quarterly" />
        </Select>
        <Checkbox
          id="carbon-newsletter-agree"
          name="agree"
          labelText="Receive product updates"
        />
        <Button type="submit">Subscribe</Button>
      </Stack>
    </Form>
  )
}

export default NewsletterSubscriptionForm
`,

  'profile-update': `import { Form, TextInput, TextArea, Button, Stack } from '@carbon/react'

function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-profile-first-name"
          name="firstName"
          labelText="First name"
          required
        />
        <TextInput
          id="carbon-profile-last-name"
          name="lastName"
          labelText="Last name"
          required
        />
        <TextInput
          id="carbon-profile-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <TextInput
          id="carbon-profile-phone"
          name="phone"
          type="tel"
          labelText="Phone number"
          required
        />
        <TextArea
          id="carbon-profile-bio"
          name="bio"
          labelText="Short bio"
          rows={3}
          required
        />
        <Button type="submit">Save changes</Button>
      </Stack>
    </Form>
  )
}

export default ProfileUpdateForm
`,

  'password-change': `import { Form, TextInput, Button, Checkbox, Stack } from '@carbon/react'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-password-change-current"
          name="currentPassword"
          type="password"
          labelText="Current password"
          required
        />
        <TextInput
          id="carbon-password-change-new"
          name="newPassword"
          type="password"
          labelText="New password"
          required
        />
        <TextInput
          id="carbon-password-change-confirm"
          name="confirmPassword"
          type="password"
          labelText="Confirm new password"
          required
        />
        <Checkbox
          id="carbon-password-change-logout"
          name="logoutOthers"
          labelText="Sign out of other devices"
        />
        <Button type="submit">Update password</Button>
      </Stack>
    </Form>
  )
}

export default PasswordChangeForm
`,

  'billing-info': `import { Form, TextInput, Select, SelectItem, Button, Stack } from '@carbon/react'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-billing-name"
          name="cardName"
          labelText="Name on card"
          required
        />
        <TextInput
          id="carbon-billing-card-number"
          name="cardNumber"
          labelText="Card number"
          maxLength={19}
          required
        />
        <TextInput
          id="carbon-billing-expiration"
          name="expiration"
          labelText="Expiration date"
          placeholder="MM/YY"
          required
        />
        <TextInput
          id="carbon-billing-cvc"
          name="cvc"
          labelText="Security code"
          maxLength={4}
          required
        />
        <TextInput
          id="carbon-billing-address"
          name="address"
          labelText="Billing address"
          required
        />
        <Select
          id="carbon-billing-country"
          name="country"
          labelText="Country"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select country" />
          <SelectItem value="US" text="United States" />
          <SelectItem value="CA" text="Canada" />
        </Select>
        <Button type="submit">Save billing details</Button>
      </Stack>
    </Form>
  )
}

export default BillingInfoForm
`,

  'shipping-address': `import { useState } from 'react'
import { Form, TextInput, Select, SelectItem, Button, Checkbox, Stack } from '@carbon/react'

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

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')
  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-shipping-full-name"
          name="fullName"
          labelText="Recipient name"
          required
        />
        <TextInput
          id="carbon-shipping-street"
          name="street"
          labelText="Street address"
          required
        />
        <TextInput
          id="carbon-shipping-street-2"
          name="street2"
          labelText="Apartment, suite, etc."
        />
        <TextInput
          id="carbon-shipping-city"
          name="city"
          labelText="City"
          required
        />
        <Select
          id="carbon-shipping-country"
          name="country"
          labelText="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <SelectItem value="US" text="United States" />
          <SelectItem value="CA" text="Canada" />
        </Select>
        <Select
          id="carbon-shipping-region"
          name="region"
          labelText="State / Province / Territory"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select an option" />
          {regionOptions.map((region) => (
            <SelectItem key={region} value={region} text={region} />
          ))}
        </Select>
        <TextInput
          id="carbon-shipping-postal"
          name="postalCode"
          labelText="Postal code"
          required
        />
        <Checkbox
          id="carbon-shipping-default"
          name="default"
          labelText="Use as default shipping address"
        />
        <Button type="submit">Save address</Button>
      </Stack>
    </Form>
  )
}

export default ShippingAddressForm
`,

  'checkout-payment': `import { Form, TextInput, Select, SelectItem, Button, Stack } from '@carbon/react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-checkout-email"
          name="email"
          type="email"
          labelText="Email for receipt"
          required
        />
        <Select
          id="carbon-checkout-shipping-method"
          name="shippingMethod"
          labelText="Shipping method"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select shipping" />
          <SelectItem value="standard" text="Standard" />
          <SelectItem value="express" text="Express" />
          <SelectItem value="overnight" text="Overnight" />
        </Select>
        <TextInput
          id="carbon-checkout-card-number"
          name="cardNumber"
          labelText="Card number"
          maxLength={19}
          required
        />
        <TextInput
          id="carbon-checkout-expiration"
          name="expiration"
          labelText="Expiration"
          placeholder="MM/YY"
          required
        />
        <TextInput
          id="carbon-checkout-cvc"
          name="cvc"
          labelText="CVC"
          maxLength={4}
          required
        />
        <TextInput
          id="carbon-checkout-promo"
          name="promoCode"
          labelText="Promo code"
        />
        <Button type="submit">Place order</Button>
      </Stack>
    </Form>
  )
}

export default CheckoutPaymentForm
`,

  'order-tracking': `import { Form, TextInput, Button, Stack } from '@carbon/react'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-order-tracking-number"
          name="orderNumber"
          labelText="Order number"
          required
        />
        <TextInput
          id="carbon-order-tracking-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <TextInput
          id="carbon-order-tracking-postal"
          name="postalCode"
          labelText="Postal code"
          required
        />
        <Button type="submit">Find order</Button>
      </Stack>
    </Form>
  )
}

export default OrderTrackingForm
`,

  'appointment-request': `import { Form, TextInput, TextArea, DatePicker, DatePickerInput, TimePicker, Button, Stack } from '@carbon/react'

function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment request submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-appointment-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-appointment-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <DatePicker datePickerType="single">
          <DatePickerInput
            id="carbon-appointment-date"
            name="date"
            labelText="Preferred date"
            placeholder="mm/dd/yyyy"
            required
          />
        </DatePicker>
        <TimePicker
          id="carbon-appointment-time"
          name="time"
          labelText="Preferred time"
          required
        />
        <TextArea
          id="carbon-appointment-reason"
          name="reason"
          labelText="Reason for visit"
          rows={3}
          required
        />
        <Button type="submit">Request appointment</Button>
      </Stack>
    </Form>
  )
}

export default AppointmentRequestForm
`,

  'event-registration': `import { Form, TextInput, Select, SelectItem, NumberInput, Button, Checkbox, Stack } from '@carbon/react'

function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-event-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-event-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <Select
          id="carbon-event-ticket"
          name="ticketType"
          labelText="Ticket type"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select ticket" />
          <SelectItem value="general" text="General admission" />
          <SelectItem value="vip" text="VIP" />
          <SelectItem value="student" text="Student" />
        </Select>
        <NumberInput
          id="carbon-event-guests"
          name="guestCount"
          label="Number of guests"
          min={0}
          max={20}
          value={0}
        />
        <Checkbox
          id="carbon-event-newsletter"
          name="newsletter"
          labelText="Notify me about future events"
        />
        <Button type="submit">Register</Button>
      </Stack>
    </Form>
  )
}

export default EventRegistrationForm
`,

  'job-application': `import { Form, TextInput, TextArea, Button, Checkbox, Stack } from '@carbon/react'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-job-full-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-job-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <TextInput
          id="carbon-job-phone"
          name="phone"
          type="tel"
          labelText="Phone number"
          required
        />
        <TextInput
          id="carbon-job-role"
          name="role"
          labelText="Role applied for"
          required
        />
        <TextInput
          id="carbon-job-resume"
          name="resume"
          type="url"
          labelText="Resume link"
          required
        />
        <TextArea
          id="carbon-job-cover-letter"
          name="coverLetter"
          labelText="Cover letter"
          rows={4}
          required
        />
        <Checkbox
          id="carbon-job-updates"
          name="updates"
          labelText="Keep me informed about future roles"
        />
        <Button type="submit">Submit application</Button>
      </Stack>
    </Form>
  )
}

export default JobApplicationForm
`,

  'customer-feedback': `import { Form, TextInput, Select, SelectItem, TextArea, Button, Checkbox, Stack } from '@carbon/react'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-feedback-name"
          name="name"
          labelText="Name"
          required
        />
        <TextInput
          id="carbon-feedback-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <Select
          id="carbon-feedback-rating"
          name="rating"
          labelText="Overall rating"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select rating" />
          <SelectItem value="excellent" text="Excellent" />
          <SelectItem value="good" text="Good" />
          <SelectItem value="average" text="Average" />
          <SelectItem value="poor" text="Poor" />
        </Select>
        <TextArea
          id="carbon-feedback-comments"
          name="comments"
          labelText="Comments"
          rows={4}
          required
        />
        <Checkbox
          id="carbon-feedback-followup"
          name="followUp"
          labelText="I would like a follow-up"
        />
        <Button type="submit">Send feedback</Button>
      </Stack>
    </Form>
  )
}

export default CustomerFeedbackForm
`,

  'support-ticket': `import { Form, TextInput, RadioButtonGroup, RadioButton, TextArea, FileUploader, Button, Stack } from '@carbon/react'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-ticket-subject"
          name="subject"
          labelText="Subject"
          required
        />
        <RadioButtonGroup
          legendText="Priority"
          name="priority"
          defaultSelected="low"
        >
          <RadioButton
            id="carbon-ticket-priority-low"
            labelText="Low"
            value="low"
          />
          <RadioButton
            id="carbon-ticket-priority-medium"
            labelText="Medium"
            value="medium"
          />
          <RadioButton
            id="carbon-ticket-priority-high"
            labelText="High"
            value="high"
          />
        </RadioButtonGroup>
        <TextArea
          id="carbon-ticket-description"
          name="description"
          labelText="Issue description"
          rows={4}
          required
        />
        <FileUploader
          id="carbon-ticket-attachments"
          name="attachments"
          labelTitle="Attachments"
          labelDescription="Upload any relevant files"
          buttonLabel="Add files"
          filenameStatus="edit"
          accept={['.jpg', '.png', '.pdf']}
          multiple
        />
        <Button type="submit">Submit ticket</Button>
      </Stack>
    </Form>
  )
}

export default SupportTicketForm
`,

  'onboarding-wizard': `import { Form, TextInput, Select, SelectItem, TextArea, Button, Checkbox, Stack } from '@carbon/react'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <section>
          <h3>Step 1: Account</h3>
          <Stack gap={4}>
            <TextInput
              id="carbon-onboarding-email"
              name="email"
              type="email"
              labelText="Work email"
              required
            />
            <TextInput
              id="carbon-onboarding-password"
              name="password"
              type="password"
              labelText="Password"
              required
            />
          </Stack>
        </section>
        <section>
          <h3>Step 2: Team</h3>
          <Stack gap={4}>
            <TextInput
              id="carbon-onboarding-team-name"
              name="teamName"
              labelText="Team name"
              required
            />
            <Select
              id="carbon-onboarding-size"
              name="teamSize"
              labelText="Team size"
              defaultValue=""
              required
            >
              <SelectItem value="" text="Select size" />
              <SelectItem value="1-5" text="1-5" />
              <SelectItem value="6-20" text="6-20" />
              <SelectItem value="21-50" text="21-50" />
              <SelectItem value="50+" text="50+" />
            </Select>
          </Stack>
        </section>
        <section>
          <h3>Step 3: Preferences</h3>
          <Stack gap={4}>
            <TextArea
              id="carbon-onboarding-goal"
              name="goal"
              labelText="Primary goal"
              rows={3}
              required
            />
            <Checkbox
              id="carbon-onboarding-updates"
              name="updates"
              labelText="Send me product tips"
            />
          </Stack>
        </section>
        <Stack gap={4} orientation="horizontal">
          <Button
            kind="secondary"
            onClick={() => alert('Back action placeholder')}
          >
            Back
          </Button>
          <Button type="submit">Finish setup</Button>
        </Stack>
      </Stack>
    </Form>
  )
}

export default OnboardingWizardForm
`,

  'advanced-search': `import { Form, TextInput, Select, SelectItem, DatePicker, DatePickerInput, Button, Checkbox, Stack } from '@carbon/react'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-search-query"
          name="query"
          labelText="Search query"
          required
        />
        <Select
          id="carbon-search-category"
          name="category"
          labelText="Category"
          defaultValue="all"
          required
        >
          <SelectItem value="all" text="All" />
          <SelectItem value="articles" text="Articles" />
          <SelectItem value="products" text="Products" />
          <SelectItem value="people" text="People" />
        </Select>
        <DatePicker datePickerType="single">
          <DatePickerInput
            id="carbon-search-date-from"
            name="dateFrom"
            labelText="Date from"
            placeholder="mm/dd/yyyy"
          />
        </DatePicker>
        <DatePicker datePickerType="single">
          <DatePickerInput
            id="carbon-search-date-to"
            name="dateTo"
            labelText="Date to"
            placeholder="mm/dd/yyyy"
          />
        </DatePicker>
        <Select
          id="carbon-search-sort"
          name="sort"
          labelText="Sort by"
          defaultValue="relevance"
          required
        >
          <SelectItem value="relevance" text="Relevance" />
          <SelectItem value="newest" text="Newest" />
          <SelectItem value="oldest" text="Oldest" />
        </Select>
        <Checkbox
          id="carbon-search-archived"
          name="includeArchived"
          labelText="Include archived"
        />
        <Button type="submit">Search</Button>
      </Stack>
    </Form>
  )
}

export default AdvancedSearchForm
`,

  'privacy-consent': `import { Form, TextInput, TextArea, Button, Checkbox, Stack, FormGroup } from '@carbon/react'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-privacy-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-privacy-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <FormGroup legendText="Communication channels">
          <Checkbox
            id="carbon-privacy-email-opt"
            name="emailOptIn"
            labelText="Email updates"
          />
          <Checkbox
            id="carbon-privacy-sms-opt"
            name="smsOptIn"
            labelText="SMS notifications"
          />
          <Checkbox
            id="carbon-privacy-phone-opt"
            name="phoneOptIn"
            labelText="Phone calls"
          />
        </FormGroup>
        <FormGroup legendText="Privacy options">
          <Checkbox
            id="carbon-privacy-analytics"
            name="analytics"
            labelText="Allow analytics cookies"
          />
          <Checkbox
            id="carbon-privacy-personalization"
            name="personalization"
            labelText="Allow personalized content"
          />
        </FormGroup>
        <TextArea
          id="carbon-privacy-notes"
          name="notes"
          labelText="Additional notes"
          rows={3}
        />
        <Button type="submit">Save preferences</Button>
      </Stack>
    </Form>
  )
}

export default PrivacyConsentForm
`,
}

// Generate apps
forms.forEach((formId) => {
  const appDir = path.join(appsDir, `carbon-${formId}`)
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
  fs.writeFileSync(path.join(srcDir, 'styles.scss'), stylesScssTemplate)
  fs.writeFileSync(
    path.join(formDir, `${formComponentNames[formId]}.jsx`),
    formTemplates[formId]
  )

  console.log(`✓ Created carbon-${formId}`)
})

console.log(`\nGenerated ${forms.length} Carbon Design System form apps.`)
