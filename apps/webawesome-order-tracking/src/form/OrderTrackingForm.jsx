import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Tracking your order...')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input
        label="Order number"
        name="orderNumber"
        type="text"
        placeholder="e.g. ORD-123456"
        required
      />
      <wa-input
        label="Email or phone"
        name="contact"
        type="text"
        placeholder="Email or phone used during checkout"
        required
      />
      <wa-button type="submit" variant="brand">
        Track order
      </wa-button>
    </form>
  )
}

export default OrderTrackingForm
