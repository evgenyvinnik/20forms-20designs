import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Newsletter subscription submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="email" type="email" label="Email address" required />
      <Selector
        name="frequency"
        label="Frequency"
        defaultValue="weekly"
        options={[
          { value: 'weekly', label: 'Weekly' },
          { value: 'monthly', label: 'Monthly' },
          { value: 'quarterly', label: 'Quarterly' },
        ]}
        required
      />
      <CheckboxInput
        name="receiveUpdates"
        label="Receive product updates"
        defaultChecked
      />
      <Button type="submit" variant="primary">
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
