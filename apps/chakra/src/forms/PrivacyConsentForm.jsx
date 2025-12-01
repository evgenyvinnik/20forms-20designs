import {
  Button,
  Field,
  Input,
  Stack,
  Textarea,
  Checkbox,
  Fieldset,
} from '@chakra-ui/react'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Full name</Field.Label>
          <Input id="chakra-privacy-name" name="fullName" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input id="chakra-privacy-email" name="email" type="email" />
        </Field.Root>
        <Fieldset.Root>
          <Fieldset.Legend>Communication channels</Fieldset.Legend>
          <Stack gap={2}>
            <Checkbox.Root name="emailOptIn">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Email updates</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root name="smsOptIn">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>SMS notifications</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root name="phoneOptIn">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Phone calls</Checkbox.Label>
            </Checkbox.Root>
          </Stack>
        </Fieldset.Root>
        <Fieldset.Root>
          <Fieldset.Legend>Privacy options</Fieldset.Legend>
          <Stack gap={2}>
            <Checkbox.Root name="analytics">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Allow analytics cookies</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root name="personalization">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Allow personalized content</Checkbox.Label>
            </Checkbox.Root>
          </Stack>
        </Fieldset.Root>
        <Field.Root>
          <Field.Label>Additional notes</Field.Label>
          <Textarea id="chakra-privacy-notes" name="notes" rows={3} />
        </Field.Root>
        <Button type="submit" colorPalette="blue">
          Save preferences
        </Button>
      </Stack>
    </form>
  )
}

export default PrivacyConsentForm
