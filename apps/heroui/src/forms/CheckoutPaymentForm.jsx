import { useState } from 'react'
import { Input, Button, Select, SelectItem } from '@heroui/react'

export default function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input
        label="Email for receipt"
        variant="bordered"
        isRequired
        type="email"
        name="email"
      />
      <Select
        label="Shipping method"
        variant="bordered"
        defaultSelectedKeys={['standard']}
        isRequired
        name="shippingMethod"
      >
        <SelectItem key="standard" value="standard">
          Standard Shipping
        </SelectItem>
        <SelectItem key="express" value="express">
          Express Shipping
        </SelectItem>
        <SelectItem key="overnight" value="overnight">
          Overnight Delivery
        </SelectItem>
      </Select>
      <Input
        label="Card number"
        variant="bordered"
        isRequired
        maxLength={19}
        name="cardNumber"
      />
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Input
          label="Expiration"
          variant="bordered"
          placeholder="MM/YY"
          isRequired
          name="expiration"
        />
        <Input
          label="CVC"
          variant="bordered"
          isRequired
          maxLength={4}
          name="cvc"
        />
      </div>
      <Button type="submit" color="primary" shadow>
        Place order
      </Button>
    </form>
  )
}
