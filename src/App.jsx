import { useMemo, useState, Suspense } from 'react'

import Layout from './components/Layout'
import MuiPreview from './components/MuiPreview'
import ReactNoCssPreview from './components/ReactNoCssPreview'
import SelectionColumn from './components/SelectionColumn'
import FormGroupedPreviews from './components/FormGroupedPreviews'
import styles from './styles'

import { reactNoCssFormComponents } from './component-libraries/react-no-css/lazy.js'
import { muiFormComponents } from './component-libraries/mui/lazy.js'
import { radixUiFormComponents } from './component-libraries/radix-ui/lazy.js'
import RadixUiPreview from './components/RadixUiPreview'

const plannedForms = [
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

const componentLibraries = [
  {
    name: 'MUI',
    directory: 'mui',
    website: 'https://mui.com',
    repo: 'https://github.com/mui/material-ui',
  },
  {
    name: 'Chakra UI',
    directory: 'chakra-ui',
    website: 'https://chakra-ui.com',
    repo: 'https://github.com/chakra-ui/chakra-ui',
  },
  {
    name: 'Ant Design',
    directory: 'ant-design',
    website: 'https://ant.design',
    repo: 'https://github.com/ant-design/ant-design',
  },
  {
    name: 'Fluent UI',
    directory: 'fluent-ui',
    website: 'https://developer.microsoft.com/en-us/fluentui',
    repo: 'https://github.com/microsoft/fluentui',
  },
  {
    name: 'React Bootstrap',
    directory: 'react-bootstrap',
    website: 'https://react-bootstrap.github.io',
    repo: 'https://github.com/react-bootstrap/react-bootstrap',
  },
  {
    name: 'Semantic UI React',
    directory: 'semantic-ui-react',
    website: 'https://react.semantic-ui.com',
    repo: 'https://github.com/Semantic-Org/Semantic-UI-React',
  },
  {
    name: 'Evergreen',
    directory: 'evergreen',
    website: 'https://evergreen.segment.com',
    repo: 'https://github.com/segmentio/evergreen',
  },
  {
    name: 'Blueprint',
    directory: 'blueprint',
    website: 'https://blueprintjs.com',
    repo: 'https://github.com/palantir/blueprint',
  },
  {
    name: 'Grommet',
    directory: 'grommet',
    website: 'https://v2.grommet.io',
    repo: 'https://github.com/grommet/grommet',
  },
  {
    name: 'Carbon Design System',
    directory: 'carbon-design-system',
    website: 'https://carbondesignsystem.com',
    repo: 'https://github.com/carbon-design-system/carbon',
  },
  {
    name: 'Mantine',
    directory: 'mantine',
    website: 'https://mantine.dev',
    repo: 'https://github.com/mantinedev/mantine',
  },
  {
    name: 'PrimeReact',
    directory: 'primereact',
    website: 'https://primereact.org',
    repo: 'https://github.com/primefaces/primereact',
  },
  {
    name: 'KendoReact',
    directory: 'kendo-react',
    website: 'https://www.telerik.com/kendo-react-ui',
    repo: 'https://github.com/telerik/kendo-react',
  },
  {
    name: 'HeroUI',
    directory: 'heroui',
    website: 'https://heroui.com',
    repo: 'https://github.com/heroui-inc/heroui',
  },
  {
    name: 'NextUI',
    directory: 'nextui',
    website: 'https://nextui.org',
    repo: 'https://github.com/nextui-org/nextui',
  },
  {
    name: 'Gravity UI',
    directory: 'gravity-ui',
    website: 'https://gravity-ui.com',
    repo: 'https://github.com/gravity-ui/uikit',
  },
  {
    name: 'Geist UI',
    directory: 'geist-ui',
    website: 'https://geist-ui.dev',
    repo: 'https://github.com/geist-org/geist-ui',
  },
  {
    name: 'shadcn/ui',
    directory: 'shadcn-ui',
    website: 'https://ui.shadcn.com',
    repo: 'https://github.com/shadcn-ui/ui',
  },
  {
    name: 'Radix UI',
    directory: 'radix-ui',
    website: 'https://www.radix-ui.com',
    repo: 'https://github.com/radix-ui/primitives',
  },
  {
    name: 'Headless UI',
    directory: 'headless-ui',
    website: 'https://headlessui.com',
    repo: 'https://github.com/tailwindlabs/headlessui',
  },
  {
    name: 'daisyUI',
    directory: 'daisyui',
    website: 'https://daisyui.com',
    repo: 'https://github.com/saadeghi/daisyui',
  },
  {
    name: 'Cloudscape Design System',
    directory: 'cloudscape-design',
    website: 'https://cloudscape.design',
    repo: 'https://github.com/cloudscape-design/components',
  },
  {
    name: 'Base Web',
    directory: 'base-web',
    website: 'https://baseweb.design',
    repo: 'https://github.com/uber/baseweb',
  },
  {
    name: 'Shopify Polaris',
    directory: 'shopify-polaris',
    website: 'https://polaris.shopify.com',
    repo: 'https://github.com/Shopify/polaris',
  },
  {
    name: 'Elastic UI (EUI)',
    directory: 'elastic-ui',
    website: 'https://eui.elastic.co',
    repo: 'https://github.com/elastic/eui',
  },
  {
    name: 'Zendesk Garden',
    directory: 'zendesk-garden',
    website: 'https://garden.zendesk.com',
    repo: 'https://github.com/zendesk/garden',
  },
  {
    name: 'PatternFly',
    directory: 'patternfly',
    website: 'https://www.patternfly.org',
    repo: 'https://github.com/patternfly/patternfly-react',
  },
  {
    name: 'Atlassian Atlaskit',
    directory: 'atlassian-atlaskit',
    website: 'https://atlassian.design/components',
    repo: 'https://bitbucket.org/atlassian/atlassian-frontend',
  },
  {
    name: 'React Spectrum',
    directory: 'react-spectrum',
    website: 'https://react-spectrum.adobe.com',
    repo: 'https://github.com/adobe/react-spectrum',
  },
  {
    name: 'React Aria / React Stately',
    directory: 'react-aria',
    website: 'https://react-spectrum.adobe.com/react-aria',
    repo: 'https://github.com/adobe/react-spectrum',
  },
  {
    name: 'Pinterest Gestalt',
    directory: 'gestalt',
    website: 'https://gestalt.pinterest.systems',
    repo: 'https://github.com/pinterest/gestalt',
  },
  {
    name: 'VMware Clarity',
    directory: 'clarity',
    website: 'https://clarity.design',
    repo: 'https://github.com/vmware/clarity',
  },
  {
    name: 'Salesforce Lightning Design System React',
    directory: 'lightning-design-system-react',
    website: 'https://react.lightningdesignsystem.com',
    repo: 'https://github.com/salesforce/design-system-react',
  },
  {
    name: 'Orbit by Kiwi.com',
    directory: 'orbit',
    website: 'https://orbit.kiwi',
    repo: 'https://github.com/kiwicom/orbit',
  },
  {
    name: 'RSuite',
    directory: 'rsuite',
    website: 'https://rsuitejs.com',
    repo: 'https://github.com/rsuite/rsuite',
  },
  {
    name: 'Semi Design',
    directory: 'semi-design',
    website: 'https://semi.design',
    repo: 'https://github.com/DouyinFE/semi-design',
  },
  {
    name: 'Arco Design',
    directory: 'arco-design',
    website: 'https://arco.design',
    repo: 'https://github.com/arco-design/arco-design',
  },
  {
    name: 'Ionic React',
    directory: 'ionic-react',
    website: 'https://ionicframework.com/react',
    repo: 'https://github.com/ionic-team/ionic-framework',
  },
  {
    name: 'Braid Design System',
    directory: 'braid-design-system',
    website: 'https://seek-oss.github.io/braid-design-system',
    repo: 'https://github.com/seek-oss/braid-design-system',
  },
  {
    name: 'Primer React',
    directory: 'primer-react',
    website: 'https://primer.style/react',
    repo: 'https://github.com/primer/react',
  },
  {
    name: 'FAST Design',
    directory: 'fast-design',
    website: 'https://www.fast.design',
    repo: 'https://github.com/microsoft/fast',
  },
  {
    name: 'Shoelace',
    directory: 'shoelace',
    website: 'https://shoelace.style',
    repo: 'https://github.com/shoelace-style/shoelace',
  },
  {
    name: 'U.S. Web Design System',
    directory: 'uswds',
    website: 'https://designsystem.digital.gov',
    repo: 'https://github.com/uswds/uswds',
  },
  {
    name: 'Ariakit',
    directory: 'ariakit',
    website: 'https://ariakit.org',
    repo: 'https://github.com/ariakit/ariakit',
  },
  {
    name: 'Tremor',
    directory: 'tremor',
    website: 'https://www.tremor.so',
    repo: 'https://github.com/tremorlabs/tremor',
  },
  {
    name: 'Rebass',
    directory: 'rebass',
    website: 'https://rebassjs.org',
    repo: 'https://github.com/rebassjs/rebass',
  },
  {
    name: 'React + No CSS',
    directory: 'react-no-css',
    website: 'https://react.dev',
    repo: 'https://github.com/facebook/react',
  },
]

function App() {
  const [selectedForms, setSelectedForms] = useState([])
  const [selectedLibraries, setSelectedLibraries] = useState([])

  const [previewGroupBy, setPreviewGroupBy] = useState('library')

  const previewImplementations = useMemo(
    () => ({
      MUI: {
        title: 'MUI previews',
        description: 'MUI form implementations rendered when MUI is selected.',
        components: muiFormComponents,
      },
      'React + No CSS': {
        title: 'React + No CSS previews',
        description:
          'Plain HTML forms rendered when React + No CSS is selected.',
        components: reactNoCssFormComponents,
      },
      'Radix UI': {
        title: 'Radix UI previews',
        description:
          'Radix UI form implementations rendered when Radix UI is selected.',
        components: radixUiFormComponents,
      },
    }),
    []
  )

  const formItems = useMemo(
    () => plannedForms.map((form) => ({ value: form, label: form })),
    []
  )

  const componentLibraryItems = useMemo(
    () =>
      componentLibraries.map((library) => ({
        value: library.name,
        label: (
          <span>
            {library.name} (
            <a href={library.website} target="_blank" rel="noreferrer">
              website
            </a>
            ) /{' '}
            <a href={library.repo} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </span>
        ),
      })),
    []
  )

  const selectedReactNoCssForms = useMemo(
    () => selectedForms.filter((form) => reactNoCssFormComponents[form]),
    [selectedForms]
  )

  const reactNoCssSelected = selectedLibraries.includes('React + No CSS')

  const selectedMuiForms = useMemo(
    () => selectedForms.filter((form) => muiFormComponents[form]),
    [selectedForms]
  )

  const muiSelected = selectedLibraries.includes('MUI')

  const selectedRadixUiForms = useMemo(
    () => selectedForms.filter((form) => radixUiFormComponents[form]),
    [selectedForms]
  )

  const radixUiSelected = selectedLibraries.includes('Radix UI')

  const toggleSelection = (value, selected, setter) => {
    const exists = selected.includes(value)
    const nextSelection = exists
      ? selected.filter((entry) => entry !== value)
      : [...selected, value]
    setter(nextSelection)
  }

  return (
    <Layout>
      <div style={styles.selectorRow}>
        <SelectionColumn
          title="Forms"
          items={formItems}
          selectedItems={selectedForms}
          onToggleItem={(form) =>
            toggleSelection(form, selectedForms, setSelectedForms)
          }
          onSelectAll={() =>
            setSelectedForms(formItems.map((item) => item.value))
          }
          onSelectNone={() => setSelectedForms([])}
        />
        <SelectionColumn
          title="Component libraries"
          items={componentLibraryItems}
          selectedItems={selectedLibraries}
          onToggleItem={(library) =>
            toggleSelection(library, selectedLibraries, setSelectedLibraries)
          }
          onSelectAll={() =>
            setSelectedLibraries(
              componentLibraryItems.map((item) => item.value)
            )
          }
          onSelectNone={() => setSelectedLibraries([])}
          twoColumnLayout
        />
      </div>

      <div style={styles.previewToggleRow}>
        <span style={styles.previewToggleLabel}>Group previews by:</span>
        <label style={styles.radioRow}>
          <input
            type="radio"
            name="preview-group-by"
            value="library"
            checked={previewGroupBy === 'library'}
            onChange={() => setPreviewGroupBy('library')}
          />
          <span>Design system</span>
        </label>
        <label style={styles.radioRow}>
          <input
            type="radio"
            name="preview-group-by"
            value="form"
            checked={previewGroupBy === 'form'}
            onChange={() => setPreviewGroupBy('form')}
          />
          <span>Form name</span>
        </label>
      </div>

      {previewGroupBy === 'library' ? (
        <Suspense fallback={<div>Loading...</div>}>
          <MuiPreview
            selectedForms={selectedMuiForms}
            isLibrarySelected={muiSelected}
            formComponents={muiFormComponents}
          />

          <ReactNoCssPreview
            selectedForms={selectedReactNoCssForms}
            isLibrarySelected={reactNoCssSelected}
            formComponents={reactNoCssFormComponents}
          />

          <RadixUiPreview
            selectedForms={selectedRadixUiForms}
            isLibrarySelected={radixUiSelected}
            formComponents={radixUiFormComponents}
          />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <FormGroupedPreviews
            selectedForms={selectedForms}
            selectedLibraries={selectedLibraries}
            implementations={previewImplementations}
          />
        </Suspense>
      )}
    </Layout>
  )
}

export default App
