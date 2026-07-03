import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <CheckboxInput
        name="necessary"
        label="Essential cookies required for site operation"
        defaultChecked
        disabled
      />
      <CheckboxInput
        name="analytics"
        label="Allow anonymous analytics tracking"
        defaultChecked
      />
      <CheckboxInput
        name="marketing"
        label="Receive promotional updates and newsletters"
      />
      <Button type="submit" variant="primary">
        Save consent settings
      </Button>
    </form>
  )
}

export default PrivacyConsentForm
