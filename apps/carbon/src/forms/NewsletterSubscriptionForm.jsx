import { Form, TextInput, Select, SelectItem, Button, Checkbox, Stack } from '@carbon/react'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-newsletter-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <Select
          id="carbon-newsletter-frequency"
          name="frequency"
          labelText="Frequency"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select frequency" />
          <SelectItem value="weekly" text="Weekly" />
          <SelectItem value="monthly" text="Monthly" />
          <SelectItem value="quarterly" text="Quarterly" />
        </Select>
        <Checkbox
          id="carbon-newsletter-agree"
          name="agree"
          labelText="Receive product updates"
        />
        <Button type="submit">Subscribe</Button>
      </Stack>
    </Form>
  )
}

export default NewsletterSubscriptionForm
