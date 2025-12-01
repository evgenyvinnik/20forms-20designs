import {
  Box,
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
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
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

      <Box as="fieldset" sx={{ border: 0, p: 0, m: 0 }}>
        <Text as="legend" sx={{ fontWeight: 'bold', mb: 2 }}>
          Communication channels
        </Text>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
        </Box>
      </Box>

      <Box as="fieldset" sx={{ border: 0, p: 0, m: 0 }}>
        <Text as="legend" sx={{ fontWeight: 'bold', mb: 2 }}>
          Privacy options
        </Text>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
        </Box>
      </Box>

      <FormControl>
        <FormControl.Label>Additional notes</FormControl.Label>
        <Textarea id="primer-privacy-notes" name="notes" rows={3} block />
      </FormControl>

      <Button type="submit" variant="primary" block>
        Save preferences
      </Button>
    </Box>
  )
}

export default PrivacyConsentForm
