import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function NewsletterSubscriptionForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Subscribed to newsletter!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="email" type="email" label="Email address" required />
      <Selector
        name="frequency"
        label="Digest frequency"
        defaultValue="weekly"
        options={[
          { value: 'weekly', label: 'Weekly digest' },
          { value: 'monthly', label: 'Monthly summary' },
        ]}
      />
      <CheckboxInput
        name="productUpdates"
        label="Include product release notes"
        defaultChecked
      />
      <Button type="submit" variant="primary">
        Subscribe
      </Button>
    </form>
  )
}

export default NewsletterSubscriptionForm
