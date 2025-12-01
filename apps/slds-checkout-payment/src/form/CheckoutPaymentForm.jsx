import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Combobox from '@salesforce/design-system-react/components/combobox'
import Button from '@salesforce/design-system-react/components/button'

const shippingOptions = [
  { id: 'standard', label: 'Standard' },
  { id: 'express', label: 'Express' },
  { id: 'overnight', label: 'Overnight' },
]

function CheckoutPaymentForm({ theme }) {
  const [email, setEmail] = useState('')
  const [shippingMethod, setShippingMethod] = useState([])
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order placed!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-checkout-email"
          type="email"
          label="Email for receipt"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Combobox
          id="slds-checkout-shipping"
          labels={{ label: 'Shipping method' }}
          options={shippingOptions}
          selection={shippingMethod}
          onSelect={(event, data) => setShippingMethod(data.selection)}
          variant="readonly"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-checkout-cardnumber"
          label="Card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-checkout-expiration"
          label="Expiration"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-checkout-cvc"
          label="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
        />
      </div>

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
        <Button
          type="submit"
          variant="brand"
          label="Place order"
        />
      </div>
    </form>
  )
}

export default CheckoutPaymentForm
