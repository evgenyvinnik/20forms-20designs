import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Textarea,
  Checkbox,
  Button,
  Fieldset,
} from '@trussworks/react-uswds'

function PrivacyConsentForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
    legend: { color: '#f0f0f0' },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-privacy-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Full name
        </Label>
        <TextInput
          id="uswds-privacy-name"
          name="fullName"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-privacy-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-privacy-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <Fieldset legend="Communication channels">
        <Checkbox
          id="uswds-privacy-email-opt"
          name="emailOptIn"
          label="Email updates"
        />
        <Checkbox
          id="uswds-privacy-sms-opt"
          name="smsOptIn"
          label="SMS notifications"
        />
        <Checkbox
          id="uswds-privacy-phone-opt"
          name="phoneOptIn"
          label="Phone calls"
        />
      </Fieldset>
      <Fieldset legend="Privacy options">
        <Checkbox
          id="uswds-privacy-analytics"
          name="analytics"
          label="Allow analytics cookies"
        />
        <Checkbox
          id="uswds-privacy-personalization"
          name="personalization"
          label="Allow personalized content"
        />
      </Fieldset>
      <FormGroup>
        <Label
          htmlFor="uswds-privacy-notes"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Additional notes
        </Label>
        <Textarea
          id="uswds-privacy-notes"
          name="notes"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <Button type="submit">Save preferences</Button>
    </Form>
  )
}

export default PrivacyConsentForm
