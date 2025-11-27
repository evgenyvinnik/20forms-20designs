function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="checkout-email">Email for receipt</label>
        <input id="checkout-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="checkout-shipping-method">Shipping method</label>
        <select id="checkout-shipping-method" name="shippingMethod" required>
          <option value="">Select shipping</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </select>
      </div>
      <div>
        <label htmlFor="checkout-card-number">Card number</label>
        <input
          id="checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          required
        />
      </div>
      <div>
        <label htmlFor="checkout-expiration">Expiration</label>
        <input
          id="checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\\/\\d{2}$"
          inputMode="numeric"
          required
        />
      </div>
      <div>
        <label htmlFor="checkout-cvc">CVC</label>
        <input
          id="checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          required
        />
      </div>
      <div>
        <label htmlFor="checkout-promo">Promo code</label>
        <input id="checkout-promo" name="promoCode" type="text" pattern="[A-Za-z0-9]{3,15}" />
      </div>
      <button type="submit">Place order</button>
    </form>
  )
}

export default CheckoutPaymentForm
