import { useState } from 'react'
import { TextInput, Selector, Button } from '@astryxdesign/core'

function CheckoutPaymentForm() {
  const [email, setEmail] = useState('')
  const [shippingMethod, setShippingMethod] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  const shippingOptions = [
    { value: '', label: 'Select shipping' },
    { value: 'standard', label: 'Standard' },
    { value: 'express', label: 'Express' },
    { value: 'overnight', label: 'Overnight' },
  ]

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-checkout-email"
        name="email"
        type="email"
        label="Email for receipt"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Selector
        id="astryx-checkout-shipping-method"
        name="shippingMethod"
        label="Shipping method"
        value={shippingMethod}
        onChange={(val) => setShippingMethod(val)}
        options={shippingOptions}
        placeholder="Select shipping"
      />

      <TextInput
        id="astryx-checkout-card-number"
        name="cardNumber"
        type="text"
        label="Card number"
        inputMode="numeric"
        pattern="[0-9]{13,19}"
        maxLength={19}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />

      <TextInput
        id="astryx-checkout-expiration"
        name="expiration"
        type="text"
        label="Expiration"
        placeholder="MM/YY"
        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
        inputMode="numeric"
        value={expiration}
        onChange={(e) => setExpiration(e.target.value)}
        required
      />

      <TextInput
        id="astryx-checkout-cvc"
        name="cvc"
        type="text"
        label="CVC"
        inputMode="numeric"
        pattern="[0-9]{3,4}"
        maxLength={4}
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
        required
      />

      <TextInput
        id="astryx-checkout-promo"
        name="promoCode"
        type="text"
        label="Promo code"
        pattern="[A-Za-z0-9]{3,15}"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
      />

      <Button type="submit" variant="primary">
        Place order
      </Button>
    </form>
  )
}

export default CheckoutPaymentForm
