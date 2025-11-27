import { useMemo, useState } from 'react'

import AdvancedSearchForm from './component-libraries/vanilla-js/AdvancedSearchForm.jsx'
import AppointmentRequestForm from './component-libraries/vanilla-js/AppointmentRequestForm.jsx'
import BillingInfoForm from './component-libraries/vanilla-js/BillingInfoForm.jsx'
import CheckoutPaymentForm from './component-libraries/vanilla-js/CheckoutPaymentForm.jsx'
import ContactInquiryForm from './component-libraries/vanilla-js/ContactInquiryForm.jsx'
import CustomerFeedbackForm from './component-libraries/vanilla-js/CustomerFeedbackForm.jsx'
import EventRegistrationForm from './component-libraries/vanilla-js/EventRegistrationForm.jsx'
import JobApplicationForm from './component-libraries/vanilla-js/JobApplicationForm.jsx'
import NewsletterSubscriptionForm from './component-libraries/vanilla-js/NewsletterSubscriptionForm.jsx'
import OnboardingWizardForm from './component-libraries/vanilla-js/OnboardingWizardForm.jsx'
import OrderTrackingForm from './component-libraries/vanilla-js/OrderTrackingForm.jsx'
import PasswordChangeForm from './component-libraries/vanilla-js/PasswordChangeForm.jsx'
import PasswordResetForm from './component-libraries/vanilla-js/PasswordResetForm.jsx'
import PrivacyConsentForm from './component-libraries/vanilla-js/PrivacyConsentForm.jsx'
import ProfileUpdateForm from './component-libraries/vanilla-js/ProfileUpdateForm.jsx'
import ShippingAddressForm from './component-libraries/vanilla-js/ShippingAddressForm.jsx'
import SupportTicketForm from './component-libraries/vanilla-js/SupportTicketForm.jsx'
import TwoFactorAuthForm from './component-libraries/vanilla-js/TwoFactorAuthForm.jsx'
import UserLoginForm from './component-libraries/vanilla-js/UserLoginForm.jsx'
import UserRegistrationForm from './component-libraries/vanilla-js/UserRegistrationForm.jsx'

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
  { name: 'MUI', directory: 'mui' },
  { name: 'Chakra UI', directory: 'chakra-ui' },
  { name: 'Ant Design', directory: 'ant-design' },
  { name: 'Fluent UI', directory: 'fluent-ui' },
  { name: 'React Bootstrap', directory: 'react-bootstrap' },
  { name: 'Semantic UI React', directory: 'semantic-ui-react' },
  { name: 'Evergreen', directory: 'evergreen' },
  { name: 'Blueprint', directory: 'blueprint' },
  { name: 'Grommet', directory: 'grommet' },
  { name: 'Carbon Design System', directory: 'carbon-design-system' },
  { name: 'Mantine', directory: 'mantine' },
  { name: 'PrimeReact', directory: 'primereact' },
  { name: 'NextUI', directory: 'nextui' },
  { name: 'Geist UI', directory: 'geist-ui' },
  { name: 'shadcn/ui', directory: 'shadcn-ui' },
  { name: 'Radix UI', directory: 'radix-ui' },
  { name: 'Headless UI', directory: 'headless-ui' },
  { name: 'daisyUI', directory: 'daisyui' },
  { name: 'Cloudscape Design System', directory: 'cloudscape-design' },
  { name: 'Shopify Polaris', directory: 'shopify-polaris' },
  { name: 'Elastic UI (EUI)', directory: 'elastic-ui' },
  { name: 'Zendesk Garden', directory: 'zendesk-garden' },
  { name: 'Base Web', directory: 'base-web' },
  { name: 'PatternFly', directory: 'patternfly' },
  { name: 'Atlassian Atlaskit', directory: 'atlassian-atlaskit' },
  { name: 'React Spectrum', directory: 'react-spectrum' },
  { name: 'Pinterest Gestalt', directory: 'gestalt' },
  { name: 'VMware Clarity', directory: 'clarity' },
  {
    name: 'Salesforce Lightning Design System React',
    directory: 'lightning-design-system-react',
  },
  { name: 'Orbit by Kiwi.com', directory: 'orbit' },
  { name: 'RSuite', directory: 'rsuite' },
  { name: 'Semi Design', directory: 'semi-design' },
  { name: 'Arco Design', directory: 'arco-design' },
  { name: 'Ionic React', directory: 'ionic-react' },
  { name: 'Braid Design System', directory: 'braid-design-system' },
  { name: 'Primer React', directory: 'primer-react' },
  { name: 'FAST Design', directory: 'fast-design' },
  { name: 'Shoelace', directory: 'shoelace' },
  { name: 'U.S. Web Design System', directory: 'uswds' },
  { name: 'Ariakit', directory: 'ariakit' },
  { name: 'Tremor', directory: 'tremor' },
  { name: 'Rebass', directory: 'rebass' },
  { name: 'Vanilla JS', directory: 'vanilla-js' },
]

const vanillaFormComponents = {
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

function CheckboxRow({ label, checked, onChange }) {
  return (
    <label style={styles.checkboxRow}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  )
}

function SelectionColumn({
  title,
  items,
  selectedItems,
  onToggleItem,
  onSelectAll,
  onSelectNone,
  twoColumnLayout = false,
}) {
  const allSelected = selectedItems.length === items.length
  const noneSelected = selectedItems.length === 0

  const listStyle = twoColumnLayout ? styles.twoColumnList : styles.singleColumnList

  return (
    <section>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>{title}</h2>
        <div style={styles.selectionActions}>
          <CheckboxRow label="Select all" checked={allSelected} onChange={onSelectAll} />
          <CheckboxRow label="Select none" checked={noneSelected} onChange={onSelectNone} />
        </div>
      </div>
      <div style={listStyle}>
        {items.map((item) => (
          <CheckboxRow
            key={item}
            label={item}
            checked={selectedItems.includes(item)}
            onChange={() => onToggleItem(item)}
          />
        ))}
      </div>
    </section>
  )
}

function Layout({ children }) {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>20 Forms, 20 Designs</h1>
        <p style={styles.subtitle}>
          Choose a form and a component library to see the pairing. Direct links to each design
          system sit inside the project folders for future builds.
        </p>
      </header>
      <main>{children}</main>
    </div>
  )
}

function App() {
  const [selectedForms, setSelectedForms] = useState([])
  const [selectedLibraries, setSelectedLibraries] = useState([])

  const combinations = useMemo(
    () =>
      selectedForms.flatMap((form) =>
        selectedLibraries.map((library) => ({ form, library })),
      ),
    [selectedForms, selectedLibraries],
  )

  const selectedVanillaForms = useMemo(
    () => selectedForms.filter((form) => vanillaFormComponents[form]),
    [selectedForms],
  )

  const vanillaSelected = selectedLibraries.includes('Vanilla JS')

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
          items={plannedForms}
          selectedItems={selectedForms}
          onToggleItem={(form) => toggleSelection(form, selectedForms, setSelectedForms)}
          onSelectAll={() => setSelectedForms(plannedForms)}
          onSelectNone={() => setSelectedForms([])}
        />
        <SelectionColumn
          title="Component libraries"
          items={componentLibraries.map((entry) => entry.name)}
          selectedItems={selectedLibraries}
          onToggleItem={(library) =>
            toggleSelection(library, selectedLibraries, setSelectedLibraries)
          }
          onSelectAll={() => setSelectedLibraries(componentLibraries.map((entry) => entry.name))}
          onSelectNone={() => setSelectedLibraries([])}
          twoColumnLayout
        />
      </div>

      <section style={styles.combosSection}>
        <h2 style={styles.sectionTitle}>Selected pairings</h2>
        {combinations.length === 0 ? (
          <p style={styles.placeholderText}>
            Choose at least one form and one component library to see the grid of implementations.
          </p>
        ) : (
          <div style={styles.comboGrid}>
            {combinations.map((combo) => (
              <div key={`${combo.form}-${combo.library}`} style={styles.comboCard}>
                <div style={styles.comboLabel}>{combo.form}</div>
                <div style={styles.comboSubLabel}>{combo.library}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {vanillaSelected && (
        <section style={styles.previewSection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Vanilla JS previews</h2>
            <p style={styles.previewHelper}>Plain HTML forms rendered when Vanilla JS is selected.</p>
          </div>

          {selectedVanillaForms.length === 0 ? (
            <p style={styles.placeholderText}>
              Select one or more forms to see their Vanilla JS implementations.
            </p>
          ) : (
            <div style={styles.previewGrid}>
              {selectedVanillaForms.map((form) => {
                const FormComponent = vanillaFormComponents[form]

                return (
                  <div key={`vanilla-${form}`} style={styles.previewCard}>
                    <div style={styles.comboLabel}>{form}</div>
                    <div style={styles.previewFormWrapper}>
                      <FormComponent />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>
      )}
    </Layout>
  )
}

const styles = {
  page: {
    padding: '24px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: '#1f2933',
  },
  header: {
    marginBottom: '24px',
  },
  title: {
    margin: '0 0 8px',
  },
  subtitle: {
    margin: 0,
    maxWidth: '760px',
    lineHeight: 1.4,
  },
  selectorRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    alignItems: 'start',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
  },
  sectionTitle: {
    margin: 0,
    fontSize: '1.1rem',
  },
  selectionActions: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.95rem',
  },
  singleColumnList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  twoColumnList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '8px 12px',
  },
  combosSection: {
    marginTop: '32px',
  },
  placeholderText: {
    margin: '12px 0',
  },
  comboGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  comboCard: {
    border: '1px solid #c1c7cd',
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    width: '260px',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '6px',
  },
  comboLabel: {
    fontWeight: 600,
    marginBottom: '4px',
  },
  comboSubLabel: {
    color: '#4a5565',
  },
  previewSection: {
    marginTop: '32px',
  },
  previewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '16px',
  },
  previewCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #c1c7cd',
    borderRadius: '10px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  previewFormWrapper: {
    border: '1px solid #e0e4ea',
    borderRadius: '8px',
    padding: '12px',
    backgroundColor: '#f9fafb',
    display: 'grid',
    gap: '10px',
  },
  previewHelper: {
    margin: 0,
    color: '#5b6675',
  },
}

export default App
