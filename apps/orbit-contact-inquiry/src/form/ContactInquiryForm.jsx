import { InputField, Button, Stack, Select, Textarea, Checkbox } from '@kiwicom/orbit-components'

function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
  }

  const topicOptions = [
    { label: 'Select topic', value: '' },
    { label: 'Support', value: 'support' },
    { label: 'Sales', value: 'sales' },
    { label: 'Feedback', value: 'feedback' },
    { label: 'Other', value: 'other' },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="Full name" name="fullName" type="text" required />
        <InputField label="Email address" name="email" type="email" required />
        <Select label="Topic" name="topic" options={topicOptions} required />
        <Textarea label="Message" name="message" rows={4} required />
        <Checkbox label="Allow follow-up communication" name="consent" />
        <Button type="primary" submit>
          Submit inquiry
        </Button>
      </Stack>
    </form>
  )
}

export default ContactInquiryForm
