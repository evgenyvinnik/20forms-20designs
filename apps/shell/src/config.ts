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
  | 'nextui'

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
  MUI: 'mui',
  'React Bootstrap': 'react-bootstrap',
  Evergreen: 'evergreen',
  Blueprint: 'blueprint',
  'Radix UI': 'radix-ui',
  'Gravity UI': 'gravity-ui',
  'React + No CSS': 'react-no-css',
  'Cloudscape Design System': 'cloudscape',
  daisyUI: 'daisyui',
  'shadcn/ui': 'shadcn-ui',
  'Pinterest Gestalt': 'gestalt',
  'Shopify Polaris': 'polaris',
  'Chakra UI': 'chakra',
  'Elastic UI (EUI)': 'elastic-ui',
  NextUI: 'nextui',
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

// ALL component libraries (full list)
export const LIBRARIES: Library[] = [
  {
    name: 'MUI',
    directory: 'mui',
    website: 'https://mui.com',
    repo: 'https://github.com/mui/material-ui',
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
    name: 'Ant Design',
    directory: 'ant-design',
    website: 'https://ant.design',
    repo: 'https://github.com/ant-design/ant-design',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Fluent UI',
    directory: 'fluent-ui',
    website: 'https://developer.microsoft.com/en-us/fluentui',
    repo: 'https://github.com/microsoft/fluentui',
    implemented: false,
    supportsTheme: false,
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
    name: 'Semantic UI React',
    directory: 'semantic-ui-react',
    website: 'https://react.semantic-ui.com',
    repo: 'https://github.com/Semantic-Org/Semantic-UI-React',
    implemented: false,
    supportsTheme: false,
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
    name: 'Blueprint',
    directory: 'blueprint',
    website: 'https://blueprintjs.com',
    repo: 'https://github.com/palantir/blueprint',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Grommet',
    directory: 'grommet',
    website: 'https://v2.grommet.io',
    repo: 'https://github.com/grommet/grommet',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Carbon Design System',
    directory: 'carbon-design-system',
    website: 'https://carbondesignsystem.com',
    repo: 'https://github.com/carbon-design-system/carbon',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Mantine',
    directory: 'mantine',
    website: 'https://mantine.dev',
    repo: 'https://github.com/mantinedev/mantine',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'PrimeReact',
    directory: 'primereact',
    website: 'https://primereact.org',
    repo: 'https://github.com/primefaces/primereact',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'KendoReact',
    directory: 'kendo-react',
    website: 'https://www.telerik.com/kendo-react-ui',
    repo: 'https://github.com/telerik/kendo-react',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'HeroUI',
    directory: 'heroui',
    website: 'https://heroui.com',
    repo: 'https://github.com/heroui-inc/heroui',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'NextUI',
    directory: 'nextui',
    website: 'https://nextui.org',
    repo: 'https://github.com/nextui-org/nextui',
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
    name: 'Geist UI',
    directory: 'geist-ui',
    website: 'https://geist-ui.dev',
    repo: 'https://github.com/geist-org/geist-ui',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'shadcn/ui',
    directory: 'shadcn-ui',
    website: 'https://ui.shadcn.com',
    repo: 'https://github.com/shadcn-ui/ui',
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
    name: 'Headless UI',
    directory: 'headless-ui',
    website: 'https://headlessui.com',
    repo: 'https://github.com/tailwindlabs/headlessui',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'daisyUI',
    directory: 'daisyui',
    website: 'https://daisyui.com',
    repo: 'https://github.com/saadeghi/daisyui',
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
    name: 'Base Web',
    directory: 'base-web',
    website: 'https://baseweb.design',
    repo: 'https://github.com/uber/baseweb',
    implemented: false,
    supportsTheme: false,
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
    name: 'Elastic UI (EUI)',
    directory: 'elastic-ui',
    website: 'https://eui.elastic.co',
    repo: 'https://github.com/elastic/eui',
    implemented: true,
    supportsTheme: true,
  },
  {
    name: 'Zendesk Garden',
    directory: 'zendesk-garden',
    website: 'https://garden.zendesk.com',
    repo: 'https://github.com/zendesk/garden',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'PatternFly',
    directory: 'patternfly',
    website: 'https://www.patternfly.org',
    repo: 'https://github.com/patternfly/patternfly-react',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Atlassian Atlaskit',
    directory: 'atlassian-atlaskit',
    website: 'https://atlassian.design/components',
    repo: 'https://bitbucket.org/atlassian/atlassian-frontend',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'React Spectrum',
    directory: 'react-spectrum',
    website: 'https://react-spectrum.adobe.com',
    repo: 'https://github.com/adobe/react-spectrum',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'React Aria / React Stately',
    directory: 'react-aria',
    website: 'https://react-spectrum.adobe.com/react-aria',
    repo: 'https://github.com/adobe/react-spectrum',
    implemented: false,
    supportsTheme: false,
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
    name: 'VMware Clarity',
    directory: 'clarity',
    website: 'https://clarity.design',
    repo: 'https://github.com/vmware/clarity',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Salesforce Lightning Design System React',
    directory: 'lightning-design-system-react',
    website: 'https://react.lightningdesignsystem.com',
    repo: 'https://github.com/salesforce/design-system-react',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Orbit by Kiwi.com',
    directory: 'orbit',
    website: 'https://orbit.kiwi',
    repo: 'https://github.com/kiwicom/orbit',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'RSuite',
    directory: 'rsuite',
    website: 'https://rsuitejs.com',
    repo: 'https://github.com/rsuite/rsuite',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Semi Design',
    directory: 'semi-design',
    website: 'https://semi.design',
    repo: 'https://github.com/DouyinFE/semi-design',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Arco Design',
    directory: 'arco-design',
    website: 'https://arco.design',
    repo: 'https://github.com/arco-design/arco-design',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Ionic React',
    directory: 'ionic-react',
    website: 'https://ionicframework.com/react',
    repo: 'https://github.com/ionic-team/ionic-framework',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Braid Design System',
    directory: 'braid-design-system',
    website: 'https://seek-oss.github.io/braid-design-system',
    repo: 'https://github.com/seek-oss/braid-design-system',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Primer React',
    directory: 'primer-react',
    website: 'https://primer.style/react',
    repo: 'https://github.com/primer/react',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'FAST Design',
    directory: 'fast-design',
    website: 'https://www.fast.design',
    repo: 'https://github.com/microsoft/fast',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Web Awesome',
    directory: 'web-awesome',
    website: 'https://webawesome.com',
    repo: 'https://github.com/shoelace-style/webawesome',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'U.S. Web Design System',
    directory: 'uswds',
    website: 'https://designsystem.digital.gov',
    repo: 'https://github.com/uswds/uswds',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Ariakit',
    directory: 'ariakit',
    website: 'https://ariakit.org',
    repo: 'https://github.com/ariakit/ariakit',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Tremor',
    directory: 'tremor',
    website: 'https://www.tremor.so',
    repo: 'https://github.com/tremorlabs/tremor',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Rebass',
    directory: 'rebass',
    website: 'https://rebassjs.org',
    repo: 'https://github.com/rebassjs/rebass',
    implemented: false,
    supportsTheme: false,
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
    name: 'Flowbite React',
    directory: 'flowbite-react',
    website: 'https://flowbite-react.com',
    repo: 'https://github.com/themesberg/flowbite-react',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Material Tailwind',
    directory: 'material-tailwind',
    website: 'https://www.material-tailwind.com',
    repo: 'https://github.com/creativetimofficial/material-tailwind',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Tamagui',
    directory: 'tamagui',
    website: 'https://tamagui.dev',
    repo: 'https://github.com/tamagui/tamagui',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'CoreUI',
    directory: 'coreui',
    website: 'https://coreui.io/react',
    repo: 'https://github.com/coreui/coreui-react',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Gluestack UI',
    directory: 'gluestack-ui',
    website: 'https://gluestack.io/ui/docs',
    repo: 'https://github.com/gluestack/gluestack-ui',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Theme UI',
    directory: 'theme-ui',
    website: 'https://theme-ui.com',
    repo: 'https://github.com/system-ui/theme-ui',
    implemented: false,
    supportsTheme: false,
  },
  {
    name: 'Refine',
    directory: 'refine',
    website: 'https://refine.dev',
    repo: 'https://github.com/refinedev/refine',
    implemented: false,
    supportsTheme: false,
  },
]

// Get implemented libraries only
export const IMPLEMENTED_LIBRARIES = LIBRARIES.filter((lib) => lib.implemented)

// Build iframe URL
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
  return `${base}${libId}-${formId}/index.html?theme=${theme}`
}
