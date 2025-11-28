import { Button, Checkbox, FormGroup, InputGroup, TextArea } from '@blueprintjs/core'
import { formStackStyles, sectionCardStyles } from './formStyles.js'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup label="Full name" labelFor="blueprint-privacy-name">
        <InputGroup
          id="blueprint-privacy-name"
          name="fullName"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Email address" labelFor="blueprint-privacy-email">
        <InputGroup
          id="blueprint-privacy-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>

      <div className="bp5-card" style={sectionCardStyles}>
        <h4 className="bp5-heading">Communication channels</h4>
        <Checkbox label="Email updates" name="emailOptIn" />
        <Checkbox label="SMS notifications" name="smsOptIn" />
        <Checkbox label="Phone calls" name="phoneOptIn" />
      </div>

      <div className="bp5-card" style={sectionCardStyles}>
        <h4 className="bp5-heading">Privacy options</h4>
        <Checkbox label="Allow analytics cookies" name="analytics" />
        <Checkbox label="Allow personalized content" name="personalization" />
      </div>

      <FormGroup label="Additional notes" labelFor="blueprint-privacy-notes">
        <TextArea
          id="blueprint-privacy-notes"
          name="notes"
          rows={3}
          fill
        />
      </FormGroup>
      <Button intent="primary" type="submit">
        Save preferences
      </Button>
    </form>
  )
}

export default PrivacyConsentForm
