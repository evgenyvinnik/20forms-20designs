import {
  Button,
  Field,
  Input,
  Stack,
  Checkbox,
  NativeSelect,
} from '@chakra-ui/react'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input id="chakra-newsletter-email" name="email" type="email" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Frequency</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              id="chakra-newsletter-frequency"
              name="frequency"
            >
              <option value="">Select frequency</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
        <Checkbox.Root name="agree">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Receive product updates</Checkbox.Label>
        </Checkbox.Root>
        <Button type="submit" colorPalette="blue">
          Subscribe
        </Button>
      </Stack>
    </form>
  )
}

export default NewsletterSubscriptionForm
