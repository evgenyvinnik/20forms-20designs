import { Box, FormControl, TextInput, Select, Checkbox, Button } from '@primer/react'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Subscription successful!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>Email address</FormControl.Label>
        <TextInput
          id="primer-newsletter-email"
          name="email"
          type="email"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Frequency</FormControl.Label>
        <Select id="primer-newsletter-frequency" name="frequency" block>
          <Select.Option value="">Select frequency</Select.Option>
          <Select.Option value="weekly">Weekly</Select.Option>
          <Select.Option value="monthly">Monthly</Select.Option>
          <Select.Option value="quarterly">Quarterly</Select.Option>
        </Select>
      </FormControl>

      <FormControl>
        <Checkbox id="primer-newsletter-agree" name="agree" />
        <FormControl.Label>Receive product updates</FormControl.Label>
      </FormControl>

      <Button type="submit" variant="primary" block>
        Subscribe
      </Button>
    </Box>
  )
}

export default NewsletterSubscriptionForm
