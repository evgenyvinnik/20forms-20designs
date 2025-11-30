import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiCheckbox,
  EuiButton,
} from '@elastic/eui'

const frequencyOptions = [
  { value: '', text: 'Select frequency' },
  { value: 'weekly', text: 'Weekly' },
  { value: 'monthly', text: 'Monthly' },
  { value: 'quarterly', text: 'Quarterly' },
]

function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState('')
  const [productUpdates, setProductUpdates] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Frequency">
        <EuiSelect
          options={frequencyOptions}
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="productUpdates"
          label="Receive product updates"
          checked={productUpdates}
          onChange={(e) => setProductUpdates(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Subscribe
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default NewsletterSubscriptionForm
