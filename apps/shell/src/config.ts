// Library ID for implemented libraries (used for iframe URLs)
export type LibraryId =
  | 'mui'
  | 'react-bootstrap'
  | 'evergreen'
  | 'blueprint'
  | 'radix-ui'
  | 'gravity-ui'
  | 'react-no-css'
  | 'cloudscape'
  | 'daisyui'
  | 'shadcn-ui'
  | 'gestalt'
  | 'polaris'
  | 'chakra'
  | 'elastic-ui'
  | 'zendesk-garden'
  | 'tamagui'
  | 'uswds'
  | 'antd'
  | 'primereact'
  | 'webawesome'
  | 'arco-design'
  | 'carbon'
  | 'ariakit'
  | 'baseweb'
  | 'atlaskit'
  | 'braid'
  | 'fluent-ui'
  | 'mantine'
  | 'coreui'
  | 'grommet'
  | 'flowbite-react'
  | 'semantic-ui'
  | 'primer'
  | 'rsuite'
  | 'patternfly'
  | 'theme-ui'
  | 'slds'
  | 'material-tailwind'
  | 'react-spectrum'
  | 'orbit'
  | 'semi-design'
  | 'headlessui'

// Form ID for iframe URLs
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
  | 'privacy-consent'

export interface Library {
  name: string
  directory: string
  website: string
  repo: string
  implemented: boolean
  supportsTheme: boolean
}

export interface Form {
  id: FormId
  name: string
  label: string
}

// Map from library name to library ID (for iframe URLs)
export const LIBRARY_NAME_TO_ID: Record<string, LibraryId | undefined> = {
  'Ant Design': 'antd',
  'Arco Design': 'arco-design',
  Ariakit: 'ariakit',
  'Atlassian Atlaskit': 'atlaskit',
  'Base Web': 'baseweb',
  Blueprint: 'blueprint',
  'Braid Design System': 'braid',
  'Carbon Design System': 'carbon',
  'Chakra UI': 'chakra',
  'Cloudscape Design System': 'cloudscape',
  CoreUI: 'coreui',
  DaisyUI: 'daisyui',
  'Elastic UI (EUI)': 'elastic-ui',
  Evergreen: 'evergreen',
  'Flowbite React': 'flowbite-react',
  'Fluent UI': 'fluent-ui',
  'Gravity UI': 'gravity-ui',
  Grommet: 'grommet',
  'Headless UI': 'headlessui',
  Mantine: 'mantine',
  'Material Tailwind': 'material-tailwind',
  MUI: 'mui',
  'Orbit by Kiwi.com': 'orbit',
  PatternFly: 'patternfly',
  'Pinterest Gestalt': 'gestalt',
  PrimeReact: 'primereact',
  'Primer React': 'primer',
  'Radix UI': 'radix-ui',
  'React + No CSS': 'react-no-css',
  'React Bootstrap': 'react-bootstrap',
  'React Spectrum': 'react-spectrum',
  RSuite: 'rsuite',
  'Salesforce Lightning Design System React': 'slds',
  'Semantic UI React': 'semantic-ui',
  'Semi Design': 'semi-design',
  'Shadcn/ui': 'shadcn-ui',
  'Shopify Polaris': 'polaris',
  Tamagui: 'tamagui',
  'Theme UI': 'theme-ui',
  'U.S. Web Design System': 'uswds',
  'Web Awesome': 'webawesome',
  'Zendesk Garden': 'zendesk-garden',
}

// Map from form name to form ID (for iframe URLs)
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
}

// All forms
export const FORMS: string[] = [
  'User registration / sign up',
  'User login / sign in',
  'Password reset / forgot password request',
  'Two-factor authentication code entry',
  'Contact or support inquiry',
  'Newsletter or marketing subscription',
  'Profile information update',
  'Account security and password change',
  'Billing information capture',
  'Shipping address capture',
  'Checkout with payment details',
  'Order tracking lookup',
  'Appointment or booking request',
  'Event registration / RSVP',
  'Job application submission',
  'Customer feedback or satisfaction survey',
  'Support ticket submission',
  'Multi-step onboarding wizard',
  'Advanced search with filters',
  'Privacy, consent, and communication preferences',
]

// ALL component libraries (full list) - sorted alphabetically
export const LIBRARIES: Library[] = [
  {
    name: 'Ant Design',
    directory: 'antd',
    website: 'https://ant.design',
    repo: 'https://github.com/ant-design/ant-design',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Arco Design',
    directory: 'arco-design',
    website: 'https://arco.design',
    repo: 'https://github.com/arco-design/arco-design',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Ariakit',
    directory: 'ariakit',
    website: 'https://ariakit.org',
    repo: 'https://github.com/ariakit/ariakit',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Atlassian Atlaskit',
    directory: 'atlaskit',
    website: 'https://atlassian.design/components',
    repo: 'https://bitbucket.org/atlassian/atlassian-frontend',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Base Web',
    directory: 'base-web',
    website: 'https://baseweb.design',
    repo: 'https://github.com/uber/baseweb',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Blueprint',
    directory: 'blueprint',
    website: 'https://blueprintjs.com',
    repo: 'https://github.com/palantir/blueprint',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Braid Design System',
    directory: 'braid-design-system',
    website: 'https://seek-oss.github.io/braid-design-system',
    repo: 'https://github.com/seek-oss/braid-design-system',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Carbon Design System',
    directory: 'carbon',
    website: 'https://carbondesignsystem.com',
    repo: 'https://github.com/carbon-design-system/carbon',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Chakra UI',
    directory: 'chakra-ui',
    website: 'https://chakra-ui.com',
    repo: 'https://github.com/chakra-ui/chakra-ui',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Cloudscape Design System',
    directory: 'cloudscape-design',
    website: 'https://cloudscape.design',
    repo: 'https://github.com/cloudscape-design/components',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'CoreUI',
    directory: 'coreui',
    website: 'https://coreui.io/react',
    repo: 'https://github.com/coreui/coreui-react',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'DaisyUI',
    directory: 'daisyui',
    website: 'https://daisyui.com',
    repo: 'https://github.com/saadeghi/daisyui',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Elastic UI (EUI)',
    directory: 'elastic-ui',
    website: 'https://eui.elastic.co',
    repo: 'https://github.com/elastic/eui',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Evergreen',
    directory: 'evergreen',
    website: 'https://evergreen.segment.com',
    repo: 'https://github.com/segmentio/evergreen',
    implemented: true,
    supportsTheme: false,
  },
  {
    name: 'Flowbite React',
    directory: 'flowbite-react',
    website: 'https://flowbite-react.com',
    repo: 'https://github.com/themesberg/flowbite-react',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Fluent UI',
    directory: 'fluent-ui',
    website: 'https://developer.microsoft.com/en-us/fluentui',
    repo: 'https://github.com/microsoft/fluentui',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Gravity UI',
    directory: 'gravity-ui',
    website: 'https://gravity-ui.com',
    repo: 'https://github.com/gravity-ui/uikit',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Grommet',
    directory: 'grommet',
    website: 'https://v2.grommet.io',
    repo: 'https://github.com/grommet/grommet',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Headless UI',
    directory: 'headless-ui',
    website: 'https://headlessui.com',
    repo: 'https://github.com/tailwindlabs/headlessui',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Mantine',
    directory: 'mantine',
    website: 'https://mantine.dev',
    repo: 'https://github.com/mantinedev/mantine',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Material Tailwind',
    directory: 'material-tailwind',
    website: 'https://www.material-tailwind.com',
    repo: 'https://github.com/creativetimofficial/material-tailwind',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'MUI',
    directory: 'mui',
    website: 'https://mui.com',
    repo: 'https://github.com/mui/material-ui',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Orbit by Kiwi.com',
    directory: 'orbit',
    website: 'https://orbit.kiwi',
    repo: 'https://github.com/kiwicom/orbit',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'PatternFly',
    directory: 'patternfly',
    website: 'https://www.patternfly.org',
    repo: 'https://github.com/patternfly/patternfly-react',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Pinterest Gestalt',
    directory: 'gestalt',
    website: 'https://gestalt.pinterest.systems',
    repo: 'https://github.com/pinterest/gestalt',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'PrimeReact',
    directory: 'primereact',
    website: 'https://primereact.org',
    repo: 'https://github.com/primefaces/primereact',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Primer React',
    directory: 'primer-react',
    website: 'https://primer.style/react',
    repo: 'https://github.com/primer/react',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Radix UI',
    directory: 'radix-ui',
    website: 'https://www.radix-ui.com',
    repo: 'https://github.com/radix-ui/primitives',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'React + No CSS',
    directory: 'react-no-css',
    website: 'https://react.dev',
    repo: 'https://github.com/facebook/react',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'React Bootstrap',
    directory: 'react-bootstrap',
    website: 'https://react-bootstrap.github.io',
    repo: 'https://github.com/react-bootstrap/react-bootstrap',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'React Spectrum',
    directory: 'react-spectrum',
    website: 'https://react-spectrum.adobe.com',
    repo: 'https://github.com/adobe/react-spectrum',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'RSuite',
    directory: 'rsuite',
    website: 'https://rsuitejs.com',
    repo: 'https://github.com/rsuite/rsuite',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Salesforce Lightning Design System React',
    directory: 'slds',
    website: 'https://design-system-react-site.herokuapp.com',
    repo: 'https://github.com/salesforce/design-system-react',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Semantic UI React',
    directory: 'semantic-ui',
    website: 'https://react.semantic-ui.com',
    repo: 'https://github.com/Semantic-Org/Semantic-UI-React',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Semi Design',
    directory: 'semi',
    website: 'https://semi.design',
    repo: 'https://github.com/DouyinFE/semi-design',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Shadcn/ui',
    directory: 'shadcn-ui',
    website: 'https://ui.shadcn.com',
    repo: 'https://github.com/shadcn-ui/ui',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Shopify Polaris',
    directory: 'polaris',
    website: 'https://polaris.shopify.com',
    repo: 'https://github.com/Shopify/polaris',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Tamagui',
    directory: 'tamagui',
    website: 'https://tamagui.dev',
    repo: 'https://github.com/tamagui/tamagui',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Theme UI',
    directory: 'theme-ui',
    website: 'https://theme-ui.com',
    repo: 'https://github.com/system-ui/theme-ui',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'U.S. Web Design System',
    directory: 'uswds',
    website: 'https://designsystem.digital.gov',
    repo: 'https://github.com/uswds/uswds',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Web Awesome',
    directory: 'webawesome',
    website: 'https://webawesome.com',
    repo: 'https://github.com/AmazeeLabs/webawesome',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Zendesk Garden',
    directory: 'zendesk-garden',
    website: 'https://garden.zendesk.com',
    repo: 'https://github.com/zendesk/garden',
    implemented: true,
    supportsTheme: true,
  },
]

// Get implemented libraries only
export const IMPLEMENTED_LIBRARIES = LIBRARIES.filter((lib) => lib.implemented)

// Libraries that have been consolidated into a single app with form parameter
// All 43 design systems are now consolidated
const CONSOLIDATED_LIBRARIES: Set<LibraryId> = new Set([
  'mui',
  'chakra',
  'antd',
  'react-bootstrap',
  'evergreen',
  'blueprint',
  'radix-ui',
  'gravity-ui',
  'react-no-css',
  'cloudscape',
  'daisyui',
  'shadcn-ui',
  'gestalt',
  'polaris',
  'elastic-ui',
  'zendesk-garden',
  'tamagui',
  'uswds',
  'primereact',
  'webawesome',
  'arco-design',
  'carbon',
  'ariakit',
  'baseweb',
  'atlaskit',
  'braid',
  'fluent-ui',
  'mantine',
  'coreui',
  'grommet',
  'flowbite-react',
  'semantic-ui',
  'primer',
  'rsuite',
  'patternfly',
  'theme-ui',
  'slds',
  'material-tailwind',
  'react-spectrum',
  'orbit',
  'semi-design',
  'headlessui',
  'react-no-css',
])

// Build iframe URL
// For consolidated apps: /<library>/index.html?form=<form-id>&theme=<theme>
// For legacy apps: /<library>-<form>/index.html?theme=<theme>
export const buildIframeSrc = (
  libraryName: string,
  formName: string,
  theme: 'light' | 'dark' = 'light'
): string => {
  const libId = LIBRARY_NAME_TO_ID[libraryName]
  const formId = FORM_NAME_TO_ID[formName]

  if (!libId || !formId) {
    return ''
  }

  const base = import.meta.env.BASE_URL || '/20forms-20designs/'

  // Check if this library has been consolidated
  if (CONSOLIDATED_LIBRARIES.has(libId)) {
    return `${base}${libId}/index.html?form=${formId}&theme=${theme}`
  }

  // Legacy format for non-consolidated apps
  return `${base}${libId}-${formId}/index.html?theme=${theme}`
}
