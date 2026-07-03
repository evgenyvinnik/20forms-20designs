import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function NewsletterSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState('')
  const [agree, setAgree] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  const frequencyOptions = [
    { value: '', label: 'Select frequency' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
  ]

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-newsletter-email"
        name="email"
        type="email"
        label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Selector
        id="astryx-newsletter-frequency"
        name="frequency"
        label="Frequency"
        value={frequency}
        onChange={(val) => setFrequency(val)}
        options={frequencyOptions}
        placeholder="Select frequency"
      />

      <CheckboxInput
        name="agree"
        label="Receive product updates"
        checked={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />

      <Button type="submit" variant="primary">
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
