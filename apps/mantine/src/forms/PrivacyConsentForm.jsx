import {
  Button,
  Checkbox,
  Stack,
  TextInput,
  Textarea,
  Fieldset,
} from '@mantine/core'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-privacy-name"
          name="fullName"
          label="Full name"
          type="text"
          required
        />
        <TextInput
          id="mantine-privacy-email"
          name="email"
          label="Email address"
          type="email"
          required
        />
        <Fieldset legend="Communication channels">
          <Stack gap="xs">
            <Checkbox name="emailOptIn" label="Email updates" />
            <Checkbox name="smsOptIn" label="SMS notifications" />
            <Checkbox name="phoneOptIn" label="Phone calls" />
          </Stack>
        </Fieldset>
        <Fieldset legend="Privacy options">
          <Stack gap="xs">
            <Checkbox name="analytics" label="Allow analytics cookies" />
            <Checkbox
              name="personalization"
              label="Allow personalized content"
            />
          </Stack>
        </Fieldset>
        <Textarea
          id="mantine-privacy-notes"
          name="notes"
          label="Additional notes"
          rows={3}
        />
        <Button type="submit">Save preferences</Button>
      </Stack>
    </form>
  )
}

export default PrivacyConsentForm
