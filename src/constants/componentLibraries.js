import { reactNoCssFormComponents } from '../component-libraries/react-no-css/lazy.js'
import { muiFormComponents } from '../component-libraries/mui/lazy.js'
import { chakraUiFormComponents } from '../component-libraries/chakra-ui/lazy.js'
import { reactBootstrapFormComponents } from '../component-libraries/react-bootstrap/lazy.js'
import { radixUiFormComponents } from '../component-libraries/radix-ui/lazy.js'
import { daisyUiFormComponents } from '../component-libraries/daisyui/lazy.js'
import { shadcnUiFormComponents } from '../component-libraries/shadcn-ui/lazy.js'
import { evergreenFormComponents } from '../component-libraries/evergreen/lazy.js'
import { gravityUiFormComponents } from '../component-libraries/gravity-ui/lazy.js'
import { blueprintFormComponents } from '../component-libraries/blueprint/lazy.js'

export const componentLibraries = [
  {
    name: 'MUI',
    directory: 'mui',
    website: 'https://mui.com',
    repo: 'https://github.com/mui/material-ui',
    implemented: true,
  },
  {
    name: 'Chakra UI',
    directory: 'chakra-ui',
    website: 'https://chakra-ui.com',
    repo: 'https://github.com/chakra-ui/chakra-ui',
    implemented: true,
  },
  {
    name: 'Ant Design',
    directory: 'ant-design',
    website: 'https://ant.design',
    repo: 'https://github.com/ant-design/ant-design',
    implemented: false,
  },
  {
    name: 'Fluent UI',
    directory: 'fluent-ui',
    website: 'https://developer.microsoft.com/en-us/fluentui',
    repo: 'https://github.com/microsoft/fluentui',
    implemented: false,
  },
  {
    name: 'React Bootstrap',
    directory: 'react-bootstrap',
    website: 'https://react-bootstrap.github.io',
    repo: 'https://github.com/react-bootstrap/react-bootstrap',
    implemented: true,
  },
  {
    name: 'Semantic UI React',
    directory: 'semantic-ui-react',
    website: 'https://react.semantic-ui.com',
    repo: 'https://github.com/Semantic-Org/Semantic-UI-React',
    implemented: false,
  },
  {
    name: 'Evergreen',
    directory: 'evergreen',
    website: 'https://evergreen.segment.com',
    repo: 'https://github.com/segmentio/evergreen',
    implemented: true,
  },
  {
    name: 'Blueprint',
    directory: 'blueprint',
    website: 'https://blueprintjs.com',
    repo: 'https://github.com/palantir/blueprint',
    implemented: true,
  },
  {
    name: 'Grommet',
    directory: 'grommet',
    website: 'https://v2.grommet.io',
    repo: 'https://github.com/grommet/grommet',
    implemented: false,
  },
  {
    name: 'Carbon Design System',
    directory: 'carbon-design-system',
    website: 'https://carbondesignsystem.com',
    repo: 'https://github.com/carbon-design-system/carbon',
    implemented: false,
  },
  {
    name: 'Mantine',
    directory: 'mantine',
    website: 'https://mantine.dev',
    repo: 'https://github.com/mantinedev/mantine',
    implemented: false,
  },
  {
    name: 'PrimeReact',
    directory: 'primereact',
    website: 'https://primereact.org',
    repo: 'https://github.com/primefaces/primereact',
    implemented: false,
  },
  {
    name: 'KendoReact',
    directory: 'kendo-react',
    website: 'https://www.telerik.com/kendo-react-ui',
    repo: 'https://github.com/telerik/kendo-react',
    implemented: false,
  },
  {
    name: 'HeroUI',
    directory: 'heroui',
    website: 'https://heroui.com',
    repo: 'https://github.com/heroui-inc/heroui',
    implemented: false,
  },
  {
    name: 'NextUI',
    directory: 'nextui',
    website: 'https://nextui.org',
    repo: 'https://github.com/nextui-org/nextui',
    implemented: false,
  },
  {
    name: 'Gravity UI',
    directory: 'gravity-ui',
    website: 'https://gravity-ui.com',
    repo: 'https://github.com/gravity-ui/uikit',
    implemented: true,
  },
  {
    name: 'Geist UI',
    directory: 'geist-ui',
    website: 'https://geist-ui.dev',
    repo: 'https://github.com/geist-org/geist-ui',
    implemented: false,
  },
  {
    name: 'shadcn/ui',
    directory: 'shadcn-ui',
    website: 'https://ui.shadcn.com',
    repo: 'https://github.com/shadcn-ui/ui',
    implemented: true,
  },
  {
    name: 'Radix UI',
    directory: 'radix-ui',
    website: 'https://www.radix-ui.com',
    repo: 'https://github.com/radix-ui/primitives',
    implemented: true,
  },
  {
    name: 'Headless UI',
    directory: 'headless-ui',
    website: 'https://headlessui.com',
    repo: 'https://github.com/tailwindlabs/headlessui',
    implemented: false,
  },
  {
    name: 'daisyUI',
    directory: 'daisyui',
    website: 'https://daisyui.com',
    repo: 'https://github.com/saadeghi/daisyui',
    implemented: true,
  },
  {
    name: 'Cloudscape Design System',
    directory: 'cloudscape-design',
    website: 'https://cloudscape.design',
    repo: 'https://github.com/cloudscape-design/components',
    implemented: false,
  },
  {
    name: 'Base Web',
    directory: 'base-web',
    website: 'https://baseweb.design',
    repo: 'https://github.com/uber/baseweb',
    implemented: false,
  },
  {
    name: 'Shopify Polaris',
    directory: 'shopify-polaris',
    website: 'https://polaris.shopify.com',
    repo: 'https://github.com/Shopify/polaris',
    implemented: false,
  },
  {
    name: 'Elastic UI (EUI)',
    directory: 'elastic-ui',
    website: 'https://eui.elastic.co',
    repo: 'https://github.com/elastic/eui',
    implemented: false,
  },
  {
    name: 'Zendesk Garden',
    directory: 'zendesk-garden',
    website: 'https://garden.zendesk.com',
    repo: 'https://github.com/zendesk/garden',
    implemented: false,
  },
  {
    name: 'PatternFly',
    directory: 'patternfly',
    website: 'https://www.patternfly.org',
    repo: 'https://github.com/patternfly/patternfly-react',
    implemented: false,
  },
  {
    name: 'Atlassian Atlaskit',
    directory: 'atlassian-atlaskit',
    website: 'https://atlassian.design/components',
    repo: 'https://bitbucket.org/atlassian/atlassian-frontend',
    implemented: false,
  },
  {
    name: 'React Spectrum',
    directory: 'react-spectrum',
    website: 'https://react-spectrum.adobe.com',
    repo: 'https://github.com/adobe/react-spectrum',
    implemented: false,
  },
  {
    name: 'React Aria / React Stately',
    directory: 'react-aria',
    website: 'https://react-spectrum.adobe.com/react-aria',
    repo: 'https://github.com/adobe/react-spectrum',
    implemented: false,
  },
  {
    name: 'Pinterest Gestalt',
    directory: 'gestalt',
    website: 'https://gestalt.pinterest.systems',
    repo: 'https://github.com/pinterest/gestalt',
    implemented: false,
  },
  {
    name: 'VMware Clarity',
    directory: 'clarity',
    website: 'https://clarity.design',
    repo: 'https://github.com/vmware/clarity',
    implemented: false,
  },
  {
    name: 'Salesforce Lightning Design System React',
    directory: 'lightning-design-system-react',
    website: 'https://react.lightningdesignsystem.com',
    repo: 'https://github.com/salesforce/design-system-react',
    implemented: false,
  },
  {
    name: 'Orbit by Kiwi.com',
    directory: 'orbit',
    website: 'https://orbit.kiwi',
    repo: 'https://github.com/kiwicom/orbit',
    implemented: false,
  },
  {
    name: 'RSuite',
    directory: 'rsuite',
    website: 'https://rsuitejs.com',
    repo: 'https://github.com/rsuite/rsuite',
    implemented: false,
  },
  {
    name: 'Semi Design',
    directory: 'semi-design',
    website: 'https://semi.design',
    repo: 'https://github.com/DouyinFE/semi-design',
    implemented: false,
  },
  {
    name: 'Arco Design',
    directory: 'arco-design',
    website: 'https://arco.design',
    repo: 'https://github.com/arco-design/arco-design',
    implemented: false,
  },
  {
    name: 'Ionic React',
    directory: 'ionic-react',
    website: 'https://ionicframework.com/react',
    repo: 'https://github.com/ionic-team/ionic-framework',
    implemented: false,
  },
  {
    name: 'Braid Design System',
    directory: 'braid-design-system',
    website: 'https://seek-oss.github.io/braid-design-system',
    repo: 'https://github.com/seek-oss/braid-design-system',
    implemented: false,
  },
  {
    name: 'Primer React',
    directory: 'primer-react',
    website: 'https://primer.style/react',
    repo: 'https://github.com/primer/react',
    implemented: false,
  },
  {
    name: 'FAST Design',
    directory: 'fast-design',
    website: 'https://www.fast.design',
    repo: 'https://github.com/microsoft/fast',
    implemented: false,
  },
  {
    name: 'Shoelace',
    directory: 'shoelace',
    website: 'https://shoelace.style',
    repo: 'https://github.com/shoelace-style/shoelace',
    implemented: false,
  },
  {
    name: 'U.S. Web Design System',
    directory: 'uswds',
    website: 'https://designsystem.digital.gov',
    repo: 'https://github.com/uswds/uswds',
    implemented: false,
  },
  {
    name: 'Ariakit',
    directory: 'ariakit',
    website: 'https://ariakit.org',
    repo: 'https://github.com/ariakit/ariakit',
    implemented: false,
  },
  {
    name: 'Tremor',
    directory: 'tremor',
    website: 'https://www.tremor.so',
    repo: 'https://github.com/tremorlabs/tremor',
    implemented: false,
  },
  {
    name: 'Rebass',
    directory: 'rebass',
    website: 'https://rebassjs.org',
    repo: 'https://github.com/rebassjs/rebass',
    implemented: false,
  },
  {
    name: 'React + No CSS',
    directory: 'react-no-css',
    website: 'https://react.dev',
    repo: 'https://github.com/facebook/react',
    implemented: true,
  },
  {
    name: 'Flowbite React',
    directory: 'flowbite-react',
    website: 'https://flowbite-react.com',
    repo: 'https://github.com/themesberg/flowbite-react',
    implemented: false,
  },
  {
    name: 'Material Tailwind',
    directory: 'material-tailwind',
    website: 'https://www.material-tailwind.com',
    repo: 'https://github.com/creativetimofficial/material-tailwind',
    implemented: false,
  },
  {
    name: 'Tamagui',
    directory: 'tamagui',
    website: 'https://tamagui.dev',
    repo: 'https://github.com/tamagui/tamagui',
    implemented: false,
  },
  {
    name: 'Refine',
    directory: 'refine',
    website: 'https://refine.dev',
    repo: 'https://github.com/refinedev/refine',
    implemented: false,
  },
]

const createLookup = (key) =>
  componentLibraries.reduce((lookup, library) => {
    lookup[library[key]] = library
    return lookup
  }, {})

export const componentLibrariesByName = createLookup('name')
export const componentLibrariesByDirectory = createLookup('directory')



export const implementedComponentsByLibrary = {
  MUI: muiFormComponents,
  'Chakra UI': chakraUiFormComponents,
  'React Bootstrap': reactBootstrapFormComponents,
  Evergreen: evergreenFormComponents,
  Blueprint: blueprintFormComponents,
  'React + No CSS': reactNoCssFormComponents,
  'Radix UI': radixUiFormComponents,
  daisyUI: daisyUiFormComponents,
  'shadcn/ui': shadcnUiFormComponents,
  'Gravity UI': gravityUiFormComponents,
}

export const previewCopyOverrides = {
  'React + No CSS': {
    description: 'Plain HTML forms rendered when React + No CSS is selected.',
  },
  daisyUI: {
    title: 'DaisyUI previews',
    description: 'DaisyUI form implementations rendered when DaisyUI is selected.',
  },
  Evergreen: {
    description:
      'Evergreen UI form implementations rendered when Evergreen is selected.',
  },
  Blueprint: {
    description:
      'Blueprint UI form implementations rendered when Blueprint is selected.',
  },
}

export const librariesByName = Object.fromEntries(
  Object.entries(componentLibrariesByName).map(([name, library]) => {
    const components = implementedComponentsByLibrary[name]
    const copyOverrides = previewCopyOverrides[name] || {}

    const implementation = components
      ? {
          title: copyOverrides.title ?? `${name} previews`,
          description:
            copyOverrides.description ??
            `${name} form implementations rendered when ${name} is selected.`,
          components,
        }
      : undefined

    return [name, { ...library, implementation }]
  })
)

export const previewImplementations = Object.fromEntries(
  Object.entries(librariesByName)
    .filter(([, library]) => library.implementation?.components)
    .map(([name, library]) => [name, library.implementation])
)