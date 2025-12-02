import { useState, useCallback } from 'react'
import { FormLayout, TextField, Select, Button } from '@shopify/polaris'

function CheckoutPaymentForm() {
  const [email, setEmail] = useState('')
  const [shippingMethod, setShippingMethod] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const shippingOptions = [
    { label: 'Select shipping', value: '' },
    { label: 'Standard', value: 'standard' },
    { label: 'Express', value: 'express' },
    { label: 'Overnight', value: 'overnight' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Email for receipt"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <Select
          label="Shipping method"
          options={shippingOptions}
          value={shippingMethod}
          onChange={setShippingMethod}
          requiredIndicator
        />
        <TextField
          label="Card number"
          type="text"
          value={cardNumber}
          onChange={setCardNumber}
          autoComplete="cc-number"
          inputMode="numeric"
          maxLength={19}
          requiredIndicator
        />
        <FormLayout.Group>
          <TextField
            label="Expiration"
            type="text"
            value={expiration}
            onChange={setExpiration}
            autoComplete="cc-exp"
            placeholder="MM/YY"
            inputMode="numeric"
            requiredIndicator
          />
          <TextField
            label="CVC"
            type="text"
            value={cvc}
            onChange={setCvc}
            autoComplete="cc-csc"
            inputMode="numeric"
            maxLength={4}
            requiredIndicator
          />
        </FormLayout.Group>
        <TextField
          label="Promo code"
          type="text"
          value={promoCode}
          onChange={setPromoCode}
          autoComplete="off"
        />
        <Button submit variant="primary">
          Place order
        </Button>
      </FormLayout>
    </form>
  )
}

export default CheckoutPaymentForm
