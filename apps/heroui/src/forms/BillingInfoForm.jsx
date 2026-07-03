import { useState } from 'react'
import { Input, Button } from '@heroui/react'

export default function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing info saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input
        label="Billing name"
        variant="bordered"
        isRequired
        name="billingName"
      />
      <Input
        label="Street address"
        variant="bordered"
        isRequired
        name="address"
      />
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Input label="City" variant="bordered" isRequired name="city" />
        <Input label="ZIP code" variant="bordered" isRequired name="zip" />
      </div>
      <Button type="submit" color="primary" shadow>
        Save billing info
      </Button>
    </form>
  )
}
