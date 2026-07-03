function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-checkout-email">Email for receipt</label>
        <input id="nocss-checkout-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="nocss-checkout-shipping-method">Shipping method</label>
        <select
          id="nocss-checkout-shipping-method"
          name="shippingMethod"
          required
        >
          <option value="">Select shipping</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </select>
      </div>
      <div>
        <label htmlFor="nocss-checkout-card-number">Card number</label>
        <input
          id="nocss-checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-checkout-expiration">Expiration</label>
        <input
          id="nocss-checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\\/\\d{2}$"
          inputMode="numeric"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-checkout-cvc">CVC</label>
        <input
          id="nocss-checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-checkout-promo">Promo code</label>
        <input
          id="nocss-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
        />
      </div>
      <button type="submit">Place order</button>
    </form>
  )
}

export default CheckoutPaymentForm
