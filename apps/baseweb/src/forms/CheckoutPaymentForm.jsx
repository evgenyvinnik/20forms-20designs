import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Select } from 'baseui/select'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

function CheckoutPaymentForm() {
  const [email, setEmail] = useState('')
  const [shippingMethod, setShippingMethod] = useState([])
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const shippingOptions = [
    { label: 'Standard', id: 'standard' },
    { label: 'Express', id: 'express' },
    { label: 'Overnight', id: 'overnight' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Email for receipt">
          <Input
            id="baseweb-checkout-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Shipping method">
          <Select
            id="baseweb-checkout-shipping-method"
            options={shippingOptions}
            value={shippingMethod}
            placeholder="Select shipping"
            onChange={(params) => setShippingMethod(params.value)}
            required
          />
        </FormControl>
        <FormControl label="Card number">
          <Input
            id="baseweb-checkout-card-number"
            name="cardNumber"
            type="text"
            inputMode="numeric"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={19}
            required
          />
        </FormControl>
        <FormControl label="Expiration">
          <Input
            id="baseweb-checkout-expiration"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            inputMode="numeric"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="CVC">
          <Input
            id="baseweb-checkout-cvc"
            name="cvc"
            type="text"
            inputMode="numeric"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            maxLength={4}
            required
          />
        </FormControl>
        <FormControl label="Promo code">
          <Input
            id="baseweb-checkout-promo"
            name="promoCode"
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </FormControl>
        <Button type="submit">Place order</Button>
      </Block>
    </form>
  )
}

export default CheckoutPaymentForm
