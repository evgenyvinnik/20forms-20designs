import AdvancedSearchForm from './AdvancedSearchForm.jsx'
import AppointmentRequestForm from './AppointmentRequestForm.jsx'
import BillingInfoForm from './BillingInfoForm.jsx'
import CheckoutPaymentForm from './CheckoutPaymentForm.jsx'
import ContactInquiryForm from './ContactInquiryForm.jsx'
import CustomerFeedbackForm from './CustomerFeedbackForm.jsx'
import EventRegistrationForm from './EventRegistrationForm.jsx'
import JobApplicationForm from './JobApplicationForm.jsx'
import NewsletterSubscriptionForm from './NewsletterSubscriptionForm.jsx'
import OnboardingWizardForm from './OnboardingWizardForm.jsx'
import OrderTrackingForm from './OrderTrackingForm.jsx'
import PasswordChangeForm from './PasswordChangeForm.jsx'
import PasswordResetForm from './PasswordResetForm.jsx'
import PrivacyConsentForm from './PrivacyConsentForm.jsx'
import ProfileUpdateForm from './ProfileUpdateForm.jsx'
import ShippingAddressForm from './ShippingAddressForm.jsx'
import SupportTicketForm from './SupportTicketForm.jsx'
import TwoFactorAuthForm from './TwoFactorAuthForm.jsx'
import UserLoginForm from './UserLoginForm.jsx'
import UserRegistrationForm from './UserRegistrationForm.jsx'

export const formComponents = {
  'User registration / sign up': UserRegistrationForm,
  'User login / sign in': UserLoginForm,
  'Password reset / forgot password request': PasswordResetForm,
  'Two-factor authentication code entry': TwoFactorAuthForm,
  'Contact or support inquiry': ContactInquiryForm,
  'Newsletter or marketing subscription': NewsletterSubscriptionForm,
  'Profile information update': ProfileUpdateForm,
  'Account security and password change': PasswordChangeForm,
  'Billing information capture': BillingInfoForm,
  'Shipping address capture': ShippingAddressForm,
  'Checkout with payment details': CheckoutPaymentForm,
  'Order tracking lookup': OrderTrackingForm,
  'Appointment or booking request': AppointmentRequestForm,
  'Event registration / RSVP': EventRegistrationForm,
  'Job application submission': JobApplicationForm,
  'Customer feedback or satisfaction survey': CustomerFeedbackForm,
  'Support ticket submission': SupportTicketForm,
  'Multi-step onboarding wizard': OnboardingWizardForm,
  'Advanced search with filters': AdvancedSearchForm,
  'Privacy, consent, and communication preferences': PrivacyConsentForm,
}

export default formComponents
