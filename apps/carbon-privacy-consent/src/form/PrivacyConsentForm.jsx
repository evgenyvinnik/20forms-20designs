import { Form, TextInput, TextArea, Button, Checkbox, Stack, FormGroup } from '@carbon/react'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-privacy-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-privacy-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <FormGroup legendText="Communication channels">
          <Checkbox
            id="carbon-privacy-email-opt"
            name="emailOptIn"
            labelText="Email updates"
          />
          <Checkbox
            id="carbon-privacy-sms-opt"
            name="smsOptIn"
            labelText="SMS notifications"
          />
          <Checkbox
            id="carbon-privacy-phone-opt"
            name="phoneOptIn"
            labelText="Phone calls"
          />
        </FormGroup>
        <FormGroup legendText="Privacy options">
          <Checkbox
            id="carbon-privacy-analytics"
            name="analytics"
            labelText="Allow analytics cookies"
          />
          <Checkbox
            id="carbon-privacy-personalization"
            name="personalization"
            labelText="Allow personalized content"
          />
        </FormGroup>
        <TextArea
          id="carbon-privacy-notes"
          name="notes"
          labelText="Additional notes"
          rows={3}
        />
        <Button type="submit">Save preferences</Button>
      </Stack>
    </Form>
  )
}

export default PrivacyConsentForm
