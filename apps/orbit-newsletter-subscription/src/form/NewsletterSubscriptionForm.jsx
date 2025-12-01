import { InputField, Button, Stack, Select, Checkbox } from '@kiwicom/orbit-components'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  const frequencyOptions = [
    { label: 'Select frequency', value: '' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Quarterly', value: 'quarterly' },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <InputField label="Email address" name="email" type="email" required />
        <Select label="Frequency" name="frequency" options={frequencyOptions} required />
        <Checkbox label="Receive product updates" name="agree" />
        <Button type="primary" submit>
          Subscribe
        </Button>
      </Stack>
    </form>
  )
}

export default NewsletterSubscriptionForm
