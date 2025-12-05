import { Button, Label, TextInput } from 'flowbite-react'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-order-tracking-number">Order number</Label>
        </div>
        <TextInput
          id="flowbite-order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-order-tracking-email">Email address</Label>
        </div>
        <TextInput
          id="flowbite-order-tracking-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-order-tracking-postal">Postal code</Label>
        </div>
        <TextInput
          id="flowbite-order-tracking-postal"
          name="postalCode"
          type="text"
          required
        />
      </div>
      <Button type="submit">Find order</Button>
    </form>
  )
}

export default OrderTrackingForm
