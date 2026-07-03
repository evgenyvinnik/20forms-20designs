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
        <label htmlFor="nocss-checkout-shipping">Shipping method</label>
        <select
          id="nocss-checkout-shipping"
          name="shippingMethod"
          defaultValue="standard"
          required
        >
          <option value="standard">Standard Shipping</option>
          <option value="express">Express Shipping</option>
          <option value="overnight">Overnight Delivery</option>
        </select>
      </div>
      <div>
        <label htmlFor="nocss-checkout-card">Card number</label>
        <input
          id="nocss-checkout-card"
          name="cardNumber"
          type="text"
          maxLength={19}
          required
        />
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <div>
          <label htmlFor="nocss-checkout-expiration">Expiration</label>
          <input
            id="nocss-checkout-expiration"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            required
          />
        </div>
        <div>
          <label htmlFor="nocss-checkout-cvc">CVC</label>
          <input
            id="nocss-checkout-cvc"
            name="cvc"
            type="text"
            maxLength={4}
            required
          />
        </div>
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
