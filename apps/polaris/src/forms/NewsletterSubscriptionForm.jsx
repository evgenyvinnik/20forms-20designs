import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Select,
  Checkbox,
  Button,
} from '@shopify/polaris'

function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

  const frequencyOptions = [
    { label: 'Select frequency', value: '' },
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Subscribed successfully!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <Select
          label="Email frequency"
          options={frequencyOptions}
          value={frequency}
          onChange={setFrequency}
        />
        <Checkbox
          label="I agree to receive marketing emails"
          checked={acceptTerms}
          onChange={setAcceptTerms}
        />
        <Button submit variant="primary">
          Subscribe
        </Button>
      </FormLayout>
    </form>
  )
}

export default NewsletterSubscriptionForm
