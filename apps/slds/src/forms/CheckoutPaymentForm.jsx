import { useState } from 'react'

function CheckoutPaymentForm() {
  const [shippingMethod, setShippingMethod] = useState('standard')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="slds-form slds-form_stacked">
      <div className="slds-form-element">
        <label
          className="slds-form-element__label"
          htmlFor="slds-checkout-email"
        >
          Email for receipt
        </label>
        <div className="slds-form-element__control">
          <input
            id="slds-checkout-email"
            className="slds-input"
            name="email"
            type="email"
            required
          />
        </div>
      </div>

      <div className="slds-form-element">
        <label
          className="slds-form-element__label"
          htmlFor="slds-checkout-shipping"
        >
          Shipping method
        </label>
        <div className="slds-form-element__control">
          <div className="slds-select_container">
            <select
              id="slds-checkout-shipping"
              className="slds-select"
              name="shippingMethod"
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
              required
            >
              <option value="standard">Standard Shipping</option>
              <option value="express">Express Shipping</option>
              <option value="overnight">Overnight Delivery</option>
            </select>
          </div>
        </div>
      </div>

      <div className="slds-form-element">
        <label
          className="slds-form-element__label"
          htmlFor="slds-checkout-card"
        >
          Card number
        </label>
        <div className="slds-form-element__control">
          <input
            id="slds-checkout-card"
            className="slds-input"
            name="cardNumber"
            type="text"
            maxLength={19}
            required
          />
        </div>
      </div>

      <div className="slds-grid slds-gutters">
        <div className="slds-col slds-size_1-of-2">
          <div className="slds-form-element">
            <label
              className="slds-form-element__label"
              htmlFor="slds-checkout-exp"
            >
              Expiration
            </label>
            <div className="slds-form-element__control">
              <input
                id="slds-checkout-exp"
                className="slds-input"
                name="expiration"
                type="text"
                placeholder="MM/YY"
                required
              />
            </div>
          </div>
        </div>
        <div className="slds-col slds-size_1-of-2">
          <div className="slds-form-element">
            <label
              className="slds-form-element__label"
              htmlFor="slds-checkout-cvc"
            >
              CVC
            </label>
            <div className="slds-form-element__control">
              <input
                id="slds-checkout-cvc"
                className="slds-input"
                name="cvc"
                type="password"
                maxLength={4}
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="slds-form-element">
        <label
          className="slds-form-element__label"
          htmlFor="slds-checkout-promo"
        >
          Promo code
        </label>
        <div className="slds-form-element__control">
          <input
            id="slds-checkout-promo"
            className="slds-input"
            name="promoCode"
            type="text"
            pattern="[A-Za-z0-9]{3,15}"
          />
        </div>
      </div>

      <div className="slds-m-top_medium">
        <button type="submit" className="slds-button slds-button_brand">
          Place order
        </button>
      </div>
    </form>
  )
}

export default CheckoutPaymentForm
