import {
  FormControl,
  TextInput,
  Textarea,
  Checkbox,
  Button,
  Text,
} from '@primer/react'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Preferences saved!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <FormControl required>
        <FormControl.Label>Full name</FormControl.Label>
        <TextInput
          id="primer-privacy-fullname"
          name="fullName"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Email address</FormControl.Label>
        <TextInput id="primer-privacy-email" name="email" type="email" block />
      </FormControl>

      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <Text as="legend" sx={{ fontWeight: 'bold', mb: 2 }}>
          Communication channels
        </Text>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <FormControl>
            <Checkbox id="primer-privacy-email-optin" name="emailOptIn" />
            <FormControl.Label>Email updates</FormControl.Label>
          </FormControl>
          <FormControl>
            <Checkbox id="primer-privacy-sms-optin" name="smsOptIn" />
            <FormControl.Label>SMS notifications</FormControl.Label>
          </FormControl>
          <FormControl>
            <Checkbox id="primer-privacy-phone-optin" name="phoneOptIn" />
            <FormControl.Label>Phone calls</FormControl.Label>
          </FormControl>
        </div>
      </fieldset>

      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <Text as="legend" sx={{ fontWeight: 'bold', mb: 2 }}>
          Privacy options
        </Text>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <FormControl>
            <Checkbox id="primer-privacy-analytics" name="analytics" />
            <FormControl.Label>Allow analytics cookies</FormControl.Label>
          </FormControl>
          <FormControl>
            <Checkbox
              id="primer-privacy-personalization"
              name="personalization"
            />
            <FormControl.Label>Allow personalized content</FormControl.Label>
          </FormControl>
        </div>
      </fieldset>

      <FormControl>
        <FormControl.Label>Additional notes</FormControl.Label>
        <Textarea id="primer-privacy-notes" name="notes" rows={3} block />
      </FormControl>

      <Button type="submit" variant="primary" block>
        Save preferences
      </Button>
    </form>
  )
}

export default PrivacyConsentForm
