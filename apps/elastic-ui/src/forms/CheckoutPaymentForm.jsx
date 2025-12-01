import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiButton,
} from '@elastic/eui'

const shippingOptions = [
  { value: '', text: 'Select shipping' },
  { value: 'standard', text: 'Standard' },
  { value: 'express', text: 'Express' },
  { value: 'overnight', text: 'Overnight' },
]

function CheckoutPaymentForm() {
  const [email, setEmail] = useState('')
  const [shippingMethod, setShippingMethod] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Email for receipt">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Shipping method">
        <EuiSelect
          options={shippingOptions}
          value={shippingMethod}
          onChange={(e) => setShippingMethod(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Card number">
        <EuiFieldText
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength={19}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Expiration">
        <EuiFieldText
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          placeholder="MM/YY"
          required
        />
      </EuiFormRow>

      <EuiFormRow label="CVC">
        <EuiFieldText
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          maxLength={4}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Promo code">
        <EuiFieldText
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Place order
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default CheckoutPaymentForm
