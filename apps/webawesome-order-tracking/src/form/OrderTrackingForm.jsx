import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Finding your order...')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Order number" name="orderNumber" type="text" required />
      <wa-input label="Email address" name="email" type="email" required />
      <wa-input label="Postal code" name="postalCode" type="text" required />
      <wa-button type="submit" variant="brand">
        Find order
      </wa-button>
    </form>
  )
}

export default OrderTrackingForm
