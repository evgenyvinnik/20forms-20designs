import { useState } from 'react'
import { Button, Checkbox } from '@heroui/react'

export default function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Consent saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Checkbox defaultSelected isDisabled name="necessary">
        Essential cookies required for site operation
      </Checkbox>
      <Checkbox defaultSelected name="analytics">
        Allow anonymous analytics tracking
      </Checkbox>
      <Checkbox name="marketing">
        Receive promotional updates and newsletters
      </Checkbox>
      <Button type="submit" color="primary" shadow>
        Save consent settings
      </Button>
    </form>
  )
}
