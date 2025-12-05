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

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'SET_THEME') {
        setTheme(event.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      setFormId(params.get('form') || 'user-login')
      setTheme(params.get('theme') === 'dark' ? 'dark' : 'light')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const FormComponent = FORM_COMPONENTS[formId] || FORM_COMPONENTS['user-login']

  return (
    <div className="min-h-screen bg-gray-50 p-4 dark:bg-gray-900">
      <FormComponent />
    </div>
  )
}

export default App
