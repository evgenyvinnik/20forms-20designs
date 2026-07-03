import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing info saved!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="billingName" type="text" label="Billing name" required />
      <TextInput name="address" type="text" label="Street address" required />
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
      >
        <TextInput name="city" type="text" label="City" required />
        <TextInput name="zip" type="text" label="ZIP code" required />
      </div>
      <Button type="submit" variant="primary">
        Save billing info
      </Button>
    </form>
  )
}

export default BillingInfoForm
