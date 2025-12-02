import { useState, useEffect } from 'react'
import { ColorSchemeProvider, Box } from 'gestalt'

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
    <ColorSchemeProvider colorScheme={theme}>
      <Box color="default" padding={5}>
        <FormComponent />
      </Box>
    </ColorSchemeProvider>
  )
}

export default App
