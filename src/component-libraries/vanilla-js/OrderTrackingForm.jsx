function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="order-tracking-number">Order number</label>
        <input
          id="order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          required
        />
      </div>
      <div>
        <label htmlFor="order-tracking-email">Email address</label>
        <input id="order-tracking-email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="order-tracking-postal">Postal code</label>
        <input id="order-tracking-postal" name="postalCode" type="text" required />
      </div>
      <button type="submit">Find order</button>
    </form>
  )
}

export default OrderTrackingForm
