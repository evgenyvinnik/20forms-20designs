import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'

const shippingOptions = [
  { label: 'Standard Shipping', value: 'standard' },
  { label: 'Express Shipping', value: 'express' },
  { label: 'Overnight Delivery', value: 'overnight' },
]

function CheckoutPaymentForm() {
  const [shippingMethod, setShippingMethod] = useState('standard')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid flex flex-column gap-3">
      <div className="field">
        <label htmlFor="pr-checkout-email">Email for receipt</label>
        <InputText id="pr-checkout-email" name="email" type="email" required />
      </div>

      <div className="field">
        <label htmlFor="pr-checkout-shipping">Shipping method</label>
        <Dropdown
          id="pr-checkout-shipping"
          name="shippingMethod"
          value={shippingMethod}
          onChange={(e) => setShippingMethod(e.value)}
          options={shippingOptions}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="pr-checkout-card">Card number</label>
        <InputText
          id="pr-checkout-card"
          name="cardNumber"
          type="text"
          maxLength={19}
          required
        />
      </div>

      <div className="formgrid grid">
        <div className="field col">
          <label htmlFor="pr-checkout-exp">Expiration</label>
          <InputText
            id="pr-checkout-exp"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="field col">
          <label htmlFor="pr-checkout-cvc">CVC</label>
          <InputText
            id="pr-checkout-cvc"
            name="cvc"
            type="password"
            maxLength={4}
            required
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="pr-checkout-promo">Promo code</label>
        <InputText
          id="pr-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </div>

      <Button type="submit" label="Place order" />
    </form>
  )
}

export default CheckoutPaymentForm
