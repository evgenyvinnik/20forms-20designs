import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const frequencyOptions = [
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
]

function NewsletterSubscriptionForm() {
  const [frequency, setFrequency] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-newsletter-email">Email address</Label>
          <Textfield
            id="atlaskit-newsletter-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-newsletter-frequency">Frequency</Label>
          <Select
            inputId="atlaskit-newsletter-frequency"
            name="frequency"
            options={frequencyOptions}
            value={frequency}
            onChange={setFrequency}
            placeholder="Select frequency"
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="agree"
            label="Receive product updates"
          />
        </Box>
        <Button type="submit" appearance="primary">Subscribe</Button>
      </Stack>
    </form>
  )
}

export default NewsletterSubscriptionForm
