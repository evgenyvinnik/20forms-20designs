import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="email" type="email" label="Email for receipt" required />
      <Selector
        name="shippingMethod"
        label="Shipping method"
        defaultValue="standard"
        options={[
          { value: 'standard', label: 'Standard Shipping' },
          { value: 'express', label: 'Express Shipping' },
          { value: 'overnight', label: 'Overnight Delivery' },
        ]}
      />
      <TextInput
        name="cardNumber"
        type="text"
        label="Card number"
        maxLength={19}
        required
      />
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
      >
        <TextInput
          name="expiration"
          type="text"
          label="Expiration"
          placeholder="MM/YY"
          required
        />
        <TextInput name="cvc" type="text" label="CVC" maxLength={4} required />
      </div>
      <TextInput
        name="promoCode"
        type="text"
        label="Promo code"
        pattern="[A-Za-z0-9]{3,15}"
      />
      <Button type="submit" variant="primary">
        Place order
      </Button>
    </form>
  )
}

export default CheckoutPaymentForm
