import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Combobox from '@salesforce/design-system-react/components/combobox'
import Button from '@salesforce/design-system-react/components/button'

const shippingOptions = [
  { id: 'standard', label: 'Standard Shipping' },
  { id: 'express', label: 'Express Shipping' },
  { id: 'overnight', label: 'Overnight Delivery' },
]

function CheckoutPaymentForm() {
  const [email, setEmail] = useState('')
  const [shippingMethod, setShippingMethod] = useState([])
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      ></div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Input
          id="slds-checkout-promo"
          label="Promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          pattern="[A-Za-z0-9]{3,15}"
        />
      </div>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Place order" />
      </div>
    </form>
  )
}

export default CheckoutPaymentForm
