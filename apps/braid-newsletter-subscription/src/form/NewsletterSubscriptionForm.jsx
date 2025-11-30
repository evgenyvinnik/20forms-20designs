import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Dropdown, Checkbox, Button } from 'braid-design-system'

function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState('')
  const [agree, setAgree] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-newsletter-email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Dropdown
          id="braid-newsletter-frequency"
          label="Frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          placeholder="Select frequency"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </Dropdown>

        <Checkbox
          id="braid-newsletter-agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        >
          Receive product updates
        </Checkbox>

        <Box>
          <Button type="submit">Subscribe</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default NewsletterSubscriptionForm
