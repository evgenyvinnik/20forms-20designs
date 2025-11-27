function OrderTrackingForm() {
  return (
    <form>
      <div>
        <label htmlFor="order-tracking-number">Order number</label>
        <input id="order-tracking-number" name="orderNumber" type="text" />
      </div>
      <div>
        <label htmlFor="order-tracking-email">Email address</label>
        <input id="order-tracking-email" name="email" type="email" />
      </div>
      <div>
        <label htmlFor="order-tracking-postal">Postal code</label>
        <input id="order-tracking-postal" name="postalCode" type="text" />
      </div>
      <button type="submit">Find order</button>
    </form>
  )
}

export default OrderTrackingForm
