import '@cloudscape-design/global-styles/index.css'


import { useState, useEffect } from 'react'


// Import all form components
import AdvancedSearchForm from './forms/AdvancedSearchForm'
import AppointmentRequestForm from './forms/AppointmentRequestForm'
import BillingInfoForm from './forms/BillingInfoForm'
import CheckoutPaymentForm from './forms/CheckoutPaymentForm'
import ContactInquiryForm from './forms/ContactInquiryForm'
import CustomerFeedbackForm from './forms/CustomerFeedbackForm'
import EventRegistrationForm from './forms/EventRegistrationForm'
import JobApplicationForm from './forms/JobApplicationForm'
import NewsletterSubscriptionForm from './forms/NewsletterSubscriptionForm'
import OnboardingWizardForm from './forms/OnboardingWizardForm'
import OrderTrackingForm from './forms/OrderTrackingForm'
import PasswordChangeForm from './forms/PasswordChangeForm'
import PasswordResetForm from './forms/PasswordResetForm'
import PrivacyConsentForm from './forms/PrivacyConsentForm'
import ProfileUpdateForm from './forms/ProfileUpdateForm'
import ShippingAddressForm from './forms/ShippingAddressForm'
import SupportTicketForm from './forms/SupportTicketForm'
import TwoFactorAuthForm from './forms/TwoFactorAuthForm'
import UserLoginForm from './forms/UserLoginForm'
import UserRegistrationForm from './forms/UserRegistrationForm'

// Map form IDs to components
const FORM_COMPONENTS = {
  'advanced-search': AdvancedSearchForm,
  'appointment-request': AppointmentRequestForm,
  'billing-info': BillingInfoForm,
  'checkout-payment': CheckoutPaymentForm,
  'contact-inquiry': ContactInquiryForm,
  'customer-feedback': CustomerFeedbackForm,
  'event-registration': EventRegistrationForm,
  'job-application': JobApplicationForm,
  'newsletter-subscription': NewsletterSubscriptionForm,
  'onboarding-wizard': OnboardingWizardForm,
  'order-tracking': OrderTrackingForm,
  'password-change': PasswordChangeForm,
  'password-reset': PasswordResetForm,
  'privacy-consent': PrivacyConsentForm,
  'profile-update': ProfileUpdateForm,
  'shipping-address': ShippingAddressForm,
  'support-ticket': SupportTicketForm,
  'two-factor-auth': TwoFactorAuthForm,
  'user-login': UserLoginForm,
  'user-registration': UserRegistrationForm,
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
