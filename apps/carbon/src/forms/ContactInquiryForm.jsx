import { Form, TextInput, Select, SelectItem, TextArea, Button, Checkbox, Stack } from '@carbon/react'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-contact-name"
          name="fullName"
          labelText="Full name"
          required
        />
        <TextInput
          id="carbon-contact-email"
          name="email"
          type="email"
          labelText="Email address"
          required
        />
        <Select
          id="carbon-contact-topic"
          name="topic"
          labelText="Topic"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select topic" />
          <SelectItem value="support" text="Support" />
          <SelectItem value="sales" text="Sales" />
          <SelectItem value="feedback" text="Feedback" />
          <SelectItem value="other" text="Other" />
        </Select>
        <TextArea
          id="carbon-contact-message"
          name="message"
          labelText="Message"
          rows={4}
          required
        />
        <Checkbox
          id="carbon-contact-consent"
          name="consent"
          labelText="Allow follow-up communication"
        />
        <Button type="submit">Submit inquiry</Button>
      </Stack>
    </Form>
  )
}

export default ContactInquiryForm
