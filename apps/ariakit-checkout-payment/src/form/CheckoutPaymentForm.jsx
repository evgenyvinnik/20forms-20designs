import * as Ariakit from '@ariakit/react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-checkout-email" className="label">
          Email for receipt
        </label>
        <input
          id="ariakit-checkout-email"
          name="email"
          type="email"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-checkout-shipping-method" className="label">
          Shipping method
        </label>
        <select
          id="ariakit-checkout-shipping-method"
          name="shippingMethod"
          className="select"
          required
        >
          <option value="">Select shipping</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-checkout-card-number" className="label">
          Card number
        </label>
        <input
          id="ariakit-checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-checkout-expiration" className="label">
          Expiration
        </label>
        <input
          id="ariakit-checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-checkout-cvc" className="label">
          CVC
        </label>
        <input
          id="ariakit-checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-checkout-promo" className="label">
          Promo code
        </label>
        <input
          id="ariakit-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          className="input"
        />
      </div>
      <Ariakit.Button type="submit" className="button button-primary">
        Place order
      </Ariakit.Button>
    </form>
  )
}

export default CheckoutPaymentForm
