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

export interface Library {
  id: LibraryId;
  label: string;
  website: string;
  repo: string;
  supportsTheme: boolean;
}

export interface Form {
  id: FormId;
  label: string;
}

export const LIBRARIES: Library[] = [
  {
    id: 'mui',
    label: 'MUI',
    website: 'https://mui.com',
    repo: 'https://github.com/mui/material-ui',
    supportsTheme: true,
  },
  {
    id: 'react-bootstrap',
    label: 'React Bootstrap',
    website: 'https://react-bootstrap.github.io',
    repo: 'https://github.com/react-bootstrap/react-bootstrap',
    supportsTheme: true,
  },
  {
    id: 'evergreen',
    label: 'Evergreen',
    website: 'https://evergreen.segment.com',
    repo: 'https://github.com/segmentio/evergreen',
    supportsTheme: true,
  },
  {
    id: 'blueprint',
    label: 'Blueprint',
    website: 'https://blueprintjs.com',
    repo: 'https://github.com/palantir/blueprint',
    supportsTheme: true,
  },
  {
    id: 'radix-ui',
    label: 'Radix UI',
    website: 'https://www.radix-ui.com',
    repo: 'https://github.com/radix-ui/primitives',
    supportsTheme: true,
  },
  {
    id: 'gravity-ui',
    label: 'Gravity UI',
    website: 'https://gravity-ui.com',
    repo: 'https://github.com/gravity-ui/uikit',
    supportsTheme: true,
  },
  {
    id: 'react-no-css',
    label: 'React + No CSS',
    website: 'https://react.dev',
    repo: 'https://github.com/facebook/react',
    supportsTheme: false,
  },
  {
    id: 'cloudscape',
    label: 'Cloudscape',
    website: 'https://cloudscape.design',
    repo: 'https://github.com/cloudscape-design/components',
    supportsTheme: true,
  },
];

export const FORMS: Form[] = [
  { id: 'user-registration', label: 'User Registration' },
  { id: 'user-login', label: 'User Login' },
  { id: 'password-reset', label: 'Password Reset' },
  { id: 'two-factor-auth', label: 'Two-Factor Auth' },
  { id: 'contact-inquiry', label: 'Contact Inquiry' },
  { id: 'newsletter-subscription', label: 'Newsletter Subscription' },
  { id: 'profile-update', label: 'Profile Update' },
  { id: 'password-change', label: 'Password Change' },
  { id: 'billing-info', label: 'Billing Info' },
  { id: 'shipping-address', label: 'Shipping Address' },
  { id: 'checkout-payment', label: 'Checkout Payment' },
  { id: 'order-tracking', label: 'Order Tracking' },
  { id: 'appointment-request', label: 'Appointment Request' },
  { id: 'event-registration', label: 'Event Registration' },
  { id: 'job-application', label: 'Job Application' },
  { id: 'customer-feedback', label: 'Customer Feedback' },
  { id: 'support-ticket', label: 'Support Ticket' },
  { id: 'onboarding-wizard', label: 'Onboarding Wizard' },
  { id: 'advanced-search', label: 'Advanced Search' },
  { id: 'privacy-consent', label: 'Privacy Consent' },
];

export const buildIframeSrc = (
  lib: LibraryId,
  form: FormId,
  theme: 'light' | 'dark' = 'light'
): string => {
  // Use the base URL from Vite, fallback to root
  const base = (typeof import.meta !== 'undefined' && (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL) || '/20forms-20designs/';
  return `${base}${lib}-${form}/index.html?theme=${theme}`;
};

