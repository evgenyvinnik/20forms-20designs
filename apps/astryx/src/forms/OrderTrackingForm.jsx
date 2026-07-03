import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="orderNumber" type="text" label="Order number" required />
      <TextInput
        name="email"
        type="email"
        label="Billing email address"
        required
      />
      <Button type="submit" variant="primary">
        Track order
      </Button>
    </form>
  )
}

export default OrderTrackingForm
