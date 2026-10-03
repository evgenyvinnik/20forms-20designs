import { Button, Input } from '@cloudflare/kumo'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input
        label="Order number"
        name="orderNumber"
        type="text"
        pattern="[A-Za-z0-9-]{6,20}"
        required
      />
      <Input label="Email address" name="email" type="email" required />
      <Input label="Postal code" name="postalCode" type="text" required />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Find order
        </Button>
      </div>
    </form>
  )
}

export default OrderTrackingForm
