function CheckoutPaymentForm() {
  return (
    <form>
      <div>
        <label htmlFor="checkout-email">Email for receipt</label>
        <input id="checkout-email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="checkout-shipping-method">Shipping method</label>
        <select id="checkout-shipping-method" name="shippingMethod">
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </select>
      </div>
      <div>
        <label htmlFor="checkout-card-number">Card number</label>
        <input id="checkout-card-number" name="cardNumber" type="text" inputMode="numeric" />
      </div>
      <div>
        <label htmlFor="checkout-expiration">Expiration</label>
        <input id="checkout-expiration" name="expiration" type="text" placeholder="MM/YY" />
      </div>
      <div>
        <label htmlFor="checkout-cvc">CVC</label>
        <input id="checkout-cvc" name="cvc" type="text" inputMode="numeric" />
      </div>
      <div>
        <label htmlFor="checkout-promo">Promo code</label>
        <input id="checkout-promo" name="promoCode" type="text" />
      </div>
      <button type="submit">Place order</button>
    </form>
  )
}

export default CheckoutPaymentForm
