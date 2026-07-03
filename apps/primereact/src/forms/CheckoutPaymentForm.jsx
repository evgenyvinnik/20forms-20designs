import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'

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

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      ></div>
      <div className="field" style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="primereact-checkout-promo"
          style={{ display: 'block', marginBottom: '0.5rem' }}
        >
          Promo code
        </label>
        <InputText
          id="primereact-checkout-promo"
          name="promoCode"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
      </div>
      <Button type="submit" label="Place order" />
    </form>
  )
}

export default CheckoutPaymentForm
