import { Box, Button, CheckBox, Form, FormField, Text, TextArea, TextInput } from 'grommet'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Full name"
        name="fullName"
        htmlFor="grommet-privacy-name"
        required
      >
        <TextInput
          id="grommet-privacy-name"
          name="fullName"
        />
      </FormField>

      <FormField
        label="Email address"
        name="email"
        htmlFor="grommet-privacy-email"
        required
      >
        <TextInput
          id="grommet-privacy-email"
          name="email"
          type="email"
        />
      </FormField>

      <Box margin={{ vertical: 'small' }}>
        <Text weight="bold" margin={{ bottom: 'small' }}>Communication channels</Text>
        <Box gap="small">
          <CheckBox
            name="emailOptIn"
            label="Email updates"
          />
          <CheckBox
            name="smsOptIn"
            label="SMS notifications"
          />
          <CheckBox
            name="phoneOptIn"
            label="Phone calls"
          />
        </Box>
      </Box>

      <Box margin={{ vertical: 'small' }}>
        <Text weight="bold" margin={{ bottom: 'small' }}>Privacy options</Text>
        <Box gap="small">
          <CheckBox
            name="analytics"
            label="Allow analytics cookies"
          />
          <CheckBox
            name="personalization"
            label="Allow personalized content"
          />
        </Box>
      </Box>

      <FormField
        label="Additional notes"
        name="notes"
        htmlFor="grommet-privacy-notes"
      >
        <TextArea
          id="grommet-privacy-notes"
          name="notes"
          rows={3}
        />
      </FormField>

      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Save preferences" />
      </Box>
    </Form>
  )
}

export default PrivacyConsentForm
