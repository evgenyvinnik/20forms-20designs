import {
  Box,
  FormControl,
  TextInput,
  Textarea,
  Select,
  Checkbox,
  Button,
} from '@primer/react'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
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
          id="primer-contact-fullname"
          name="fullName"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Email address</FormControl.Label>
        <TextInput id="primer-contact-email" name="email" type="email" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Topic</FormControl.Label>
        <Select id="primer-contact-topic" name="topic" block>
          <Select.Option value="">Select topic</Select.Option>
          <Select.Option value="support">Support</Select.Option>
          <Select.Option value="sales">Sales</Select.Option>
          <Select.Option value="feedback">Feedback</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormControl.Label>Message</FormControl.Label>
        <Textarea id="primer-contact-message" name="message" rows={4} block />
      </FormControl>

      <FormControl>
        <Checkbox id="primer-contact-consent" name="consent" />
        <FormControl.Label>Allow follow-up communication</FormControl.Label>
      </FormControl>

      <Button type="submit" variant="primary" block>
        Submit inquiry
      </Button>
    </Box>
  )
}

export default ContactInquiryForm
