// Shared types and utilities for the form comparison project

export type ThemeMode = 'light' | 'dark';

export type LibraryId =
  | 'mui'
  | 'react-bootstrap'
  | 'evergreen'
  | 'blueprint'
  | 'radix-ui'
  | 'gravity-ui'
  | 'react-no-css'
  | 'cloudscape';

export type FormId =
  | 'user-registration'
  | 'user-login'
  | 'password-reset'
  | 'two-factor-auth'
  | 'contact-inquiry'
  | 'newsletter-subscription'
  | 'profile-update'
  | 'password-change'
  | 'billing-info'
  | 'shipping-address'
  | 'checkout-payment'
  | 'order-tracking'
  | 'appointment-request'
  | 'event-registration'
  | 'job-application'
  | 'customer-feedback'
  | 'support-ticket'
  | 'onboarding-wizard'
  | 'advanced-search'
  | 'privacy-consent';

export interface LibraryConfig {
  id: LibraryId;
  name: string;
  directory: string;
  website: string;
  repo: string;
  supportsTheme: boolean;
}

export interface FormConfig {
  id: FormId;
  name: string;
  componentFile: string;
}

// Mapping from human-readable form names to form IDs
export const FORM_NAME_TO_ID: Record<string, FormId> = {
  'User registration / sign up': 'user-registration',
  'User login / sign in': 'user-login',
  'Password reset / forgot password request': 'password-reset',
  'Two-factor authentication code entry': 'two-factor-auth',
  'Contact or support inquiry': 'contact-inquiry',
  'Newsletter or marketing subscription': 'newsletter-subscription',
  'Profile information update': 'profile-update',
  'Account security and password change': 'password-change',
  'Billing information capture': 'billing-info',
  'Shipping address capture': 'shipping-address',
  'Checkout with payment details': 'checkout-payment',
  'Order tracking lookup': 'order-tracking',
  'Appointment or booking request': 'appointment-request',
  'Event registration / RSVP': 'event-registration',
  'Job application submission': 'job-application',
  'Customer feedback or satisfaction survey': 'customer-feedback',
  'Support ticket submission': 'support-ticket',
  'Multi-step onboarding wizard': 'onboarding-wizard',
  'Advanced search with filters': 'advanced-search',
  'Privacy, consent, and communication preferences': 'privacy-consent',
};

// Mapping from form IDs to component file names
export const FORM_ID_TO_COMPONENT: Record<FormId, string> = {
  'user-registration': 'UserRegistrationForm',
  'user-login': 'UserLoginForm',
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
};

// Mapping from form IDs to human-readable labels
export const FORM_ID_TO_LABEL: Record<FormId, string> = {
  'user-registration': 'User Registration',
  'user-login': 'User Login',
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
};

// Library configurations
export const LIBRARIES: LibraryConfig[] = [
  {
    id: 'mui',
    name: 'MUI',
    directory: 'mui',
    website: 'https://mui.com',
    repo: 'https://github.com/mui/material-ui',
    supportsTheme: true,
  },
  {
    id: 'react-bootstrap',
    name: 'React Bootstrap',
    directory: 'react-bootstrap',
    website: 'https://react-bootstrap.github.io',
    repo: 'https://github.com/react-bootstrap/react-bootstrap',
    supportsTheme: true,
  },
  {
    id: 'evergreen',
    name: 'Evergreen',
    directory: 'evergreen',
    website: 'https://evergreen.segment.com',
    repo: 'https://github.com/segmentio/evergreen',
    supportsTheme: true,
  },
  {
    id: 'blueprint',
    name: 'Blueprint',
    directory: 'blueprint',
    website: 'https://blueprintjs.com',
    repo: 'https://github.com/palantir/blueprint',
    supportsTheme: true,
  },
  {
    id: 'radix-ui',
    name: 'Radix UI',
    directory: 'radix-ui',
    website: 'https://www.radix-ui.com',
    repo: 'https://github.com/radix-ui/primitives',
    supportsTheme: true,
  },
  {
    id: 'gravity-ui',
    name: 'Gravity UI',
    directory: 'gravity-ui',
    website: 'https://gravity-ui.com',
    repo: 'https://github.com/gravity-ui/uikit',
    supportsTheme: true,
  },
  {
    id: 'react-no-css',
    name: 'React + No CSS',
    directory: 'react-no-css',
    website: 'https://react.dev',
    repo: 'https://github.com/facebook/react',
    supportsTheme: false,
  },
  {
    id: 'cloudscape',
    name: 'Cloudscape',
    directory: 'cloudscape-design',
    website: 'https://cloudscape.design',
    repo: 'https://github.com/cloudscape-design/components',
    supportsTheme: true,
  },
];

// All form IDs as an array
export const FORM_IDS: FormId[] = [
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
];

/**
 * Get theme from URL query parameters
 */
export function getThemeFromUrl(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  const params = new URLSearchParams(window.location.search);
  const theme = params.get('theme');
  return theme === 'dark' ? 'dark' : 'light';
}

