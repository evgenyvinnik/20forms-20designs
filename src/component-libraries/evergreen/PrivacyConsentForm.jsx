import { Button, Checkbox, Pane, TextInputField, TextareaField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }
const checkboxGroupProps = { display: 'flex', flexDirection: 'column', gap: 8 }

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField id="evergreen-privacy-name" label="Full name" name="fullName" type="text" required />
      <TextInputField id="evergreen-privacy-email" label="Email address" name="email" type="email" required />
      <Pane {...checkboxGroupProps} aria-label="Communication channels" role="group">
        <strong>Communication channels</strong>
        <Checkbox label="Email updates" name="emailOptIn" />
        <Checkbox label="SMS notifications" name="smsOptIn" />
        <Checkbox label="Phone calls" name="phoneOptIn" />
      </Pane>
      <Pane {...checkboxGroupProps} aria-label="Privacy options" role="group">
        <strong>Privacy options</strong>
        <Checkbox label="Allow analytics cookies" name="analytics" />
        <Checkbox label="Allow personalized content" name="personalization" />
      </Pane>
      <TextareaField id="evergreen-privacy-notes" label="Additional notes" name="notes" rows={3} />
      <Button appearance="primary" type="submit">
        Save preferences
      </Button>
    </Pane>
  )
}

export default PrivacyConsentForm
