import { useState } from 'react'
import { Box, Button, Checkbox, Flex, SelectList, TextField } from 'gestalt'

function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState('')
  const [agree, setAgree] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-newsletter-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <SelectList
          id="gestalt-newsletter-frequency"
          label="Frequency"
          onChange={({ value }) => setFrequency(value)}

          value={frequency}
        >
          {[
            { label: 'Weekly', value: 'weekly' },
            { label: 'Monthly', value: 'monthly' },
            { label: 'Quarterly', value: 'quarterly' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <Checkbox
          checked={agree}
          id="gestalt-newsletter-agree"
          label="Receive product updates"
          onChange={({ checked }) => setAgree(checked)}
        />
        <Box>
          <Button color="red" text="Subscribe" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default NewsletterSubscriptionForm
