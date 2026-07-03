import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="fullName" type="text" label="Full name" required />
      <TextInput name="email" type="email" label="Email address" required />
      <CheckboxInput name="emailUpdates" label="Email updates" defaultChecked />
      <CheckboxInput name="smsAlerts" label="SMS notifications" />
      <CheckboxInput name="phoneCalls" label="Phone calls" />
      <CheckboxInput
        name="analytics"
        label="Allow analytics cookies"
        defaultChecked
      />
      <CheckboxInput
        name="personalization"
        label="Allow personalized content"
      />
      <TextInput name="notes" label="Additional notes" multiline rows={3} />
      <Button type="submit" variant="primary">
        Save preferences
      </Button>
    </form>
  )
}

export default PrivacyConsentForm
