import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="orderNumber" type="text" label="Order number" required />
      <TextInput name="email" type="email" label="Email address" required />
      <TextInput name="postalCode" type="text" label="Postal code" required />
      <Button type="submit" variant="primary">
        Find order
      </Button>
    </form>
  )
}

export default OrderTrackingForm
