import {
  Button,
  Checkbox,
  Stack,
  TextInput,
  Textarea,
  Select,
} from '@mantine/core'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-contact-name"
          name="fullName"
          label="Full name"
          type="text"
          required
        />
        <TextInput
          id="mantine-contact-email"
          name="email"
          label="Email address"
          type="email"
          required
        />
        <Select
          id="mantine-contact-topic"
          name="topic"
          label="Topic"
          placeholder="Select topic"
          data={[
            { value: 'support', label: 'Support' },
            { value: 'sales', label: 'Sales' },
            { value: 'feedback', label: 'Feedback' },
            { value: 'other', label: 'Other' },
          ]}
          required
        />
        <Textarea
          id="mantine-contact-message"
          name="message"
          label="Message"
          rows={4}
          required
        />
        <Checkbox name="consent" label="Allow follow-up communication" />
        <Button type="submit">Submit inquiry</Button>
      </Stack>
    </form>
  )
}

export default ContactInquiryForm
