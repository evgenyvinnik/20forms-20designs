import { Button, Checkbox, Stack, TextInput, Select } from '@mantine/core'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-newsletter-email"
          name="email"
          label="Email address"
          type="email"
          required
        />
        <Select
          id="mantine-newsletter-frequency"
          name="frequency"
          label="Frequency"
          placeholder="Select frequency"
          data={[
            { value: 'weekly', label: 'Weekly' },
            { value: 'monthly', label: 'Monthly' },
            { value: 'quarterly', label: 'Quarterly' },
          ]}
          required
        />
        <Checkbox name="agree" label="Receive product updates" />
        <Button type="submit">Subscribe</Button>
      </Stack>
    </form>
  )
}

export default NewsletterSubscriptionForm
