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
  const [agree, setAgree] = useState(false)

  const frequencyOptions = [
    { label: 'Select frequency', value: '' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Quarterly', value: 'quarterly' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
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
          label="Frequency"
          options={frequencyOptions}
          value={frequency}
          onChange={setFrequency}
          requiredIndicator
        />
        <Checkbox
          label="Receive product updates"
          checked={agree}
          onChange={setAgree}
        />
        <Button submit variant="primary">
          Subscribe
        </Button>
      </FormLayout>
    </form>
  )
}

export default NewsletterSubscriptionForm
