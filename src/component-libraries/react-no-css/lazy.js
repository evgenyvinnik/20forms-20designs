import { lazy } from 'react'

export const reactNoCssFormComponents = {
  'User registration / sign up': lazy(() => import('./UserRegistrationForm.jsx')),
  'User login / sign in': lazy(() => import('./UserLoginForm.jsx')),
  'Password reset / forgot password request': lazy(() => import('./PasswordResetForm.jsx')),
  'Two-factor authentication code entry': lazy(() => import('./TwoFactorAuthForm.jsx')),
  'Contact or support inquiry': lazy(() => import('./ContactInquiryForm.jsx')),
  'Newsletter or marketing subscription': lazy(() => import('./NewsletterSubscriptionForm.jsx')),
  'Profile information update': lazy(() => import('./ProfileUpdateForm.jsx')),
  'Account security and password change': lazy(() => import('./PasswordChangeForm.jsx')),
  'Billing information capture': lazy(() => import('./BillingInfoForm.jsx')),
  'Shipping address capture': lazy(() => import('./ShippingAddressForm.jsx')),
  'Checkout with payment details': lazy(() => import('./CheckoutPaymentForm.jsx')),
  'Order tracking lookup': lazy(() => import('./OrderTrackingForm.jsx')),
  'Appointment or booking request': lazy(() => import('./AppointmentRequestForm.jsx')),
  'Event registration / RSVP': lazy(() => import('./EventRegistrationForm.jsx')),
  'Job application submission': lazy(() => import('./JobApplicationForm.jsx')),
  'Customer feedback or satisfaction survey': lazy(() => import('./CustomerFeedbackForm.jsx')),
  'Support ticket submission': lazy(() => import('./SupportTicketForm.jsx')),
  'Multi-step onboarding wizard': lazy(() => import('./OnboardingWizardForm.jsx')),
  'Advanced search with filters': lazy(() => import('./AdvancedSearchForm.jsx')),
  'Privacy, consent, and communication preferences': lazy(() => import('./PrivacyConsentForm.jsx')),
}
