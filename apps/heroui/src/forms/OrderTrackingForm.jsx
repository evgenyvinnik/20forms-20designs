import { useState } from 'react'
import { Input, Button } from '@heroui/react'

export default function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Tracking request sent!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input
        label="Order number"
        variant="bordered"
        isRequired
        name="orderNumber"
      />
      <Input
        label="Billing email address"
        variant="bordered"
        isRequired
        type="email"
        name="email"
      />
      <Button type="submit" color="primary" shadow>
        Track order
      </Button>
    </form>
  )
}
