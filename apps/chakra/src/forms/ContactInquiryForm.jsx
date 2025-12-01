import {
  Button,
  Field,
  Input,
  Stack,
  Textarea,
  Checkbox,
  NativeSelect,
} from '@chakra-ui/react'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Full name</Field.Label>
          <Input id="chakra-contact-name" name="fullName" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Email address</Field.Label>
          <Input id="chakra-contact-email" name="email" type="email" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Topic</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field id="chakra-contact-topic" name="topic">
              <option value="">Select topic</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
        <Field.Root required>
          <Field.Label>Message</Field.Label>
          <Textarea id="chakra-contact-message" name="message" rows={4} />
        </Field.Root>
        <Checkbox.Root name="consent">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Allow follow-up communication</Checkbox.Label>
        </Checkbox.Root>
        <Button type="submit" colorPalette="blue">
          Submit inquiry
        </Button>
      </Stack>
    </form>
  )
}

export default ContactInquiryForm
