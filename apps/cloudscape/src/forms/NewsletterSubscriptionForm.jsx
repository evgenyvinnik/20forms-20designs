import '@cloudscape-design/global-styles/index.css'
import { useState } from 'react'
import {
  Button,
  Checkbox,
  Container,
  FormField,
  Input,
  Select,
  SpaceBetween,
} from '@cloudscape-design/components'

function NewsletterSubscriptionForm() {
  const [selectedFrequency, setSelectedFrequency] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Email address">
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </FormField>
          <FormField label="Frequency">
            <Select
              name="frequency"
              placeholder="Select frequency"
              options={[
                { label: 'Weekly', value: 'weekly' },
                { label: 'Monthly', value: 'monthly' },
                { label: 'Quarterly', value: 'quarterly' },
              ]}
              selectedOption={selectedFrequency}
              onChange={({ detail }) =>
                setSelectedFrequency(detail.selectedOption)
              }
            />
          </FormField>
          <Checkbox name="agree">Receive product updates</Checkbox>
          <Button variant="primary" formAction="submit">
            Subscribe
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default NewsletterSubscriptionForm
