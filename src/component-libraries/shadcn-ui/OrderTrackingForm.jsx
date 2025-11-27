import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-order-tracking-number">Order number</Label>
        <Input
          id="shadcn-order-tracking-number"
          name="orderNumber"
          type="text"
          pattern="[A-Za-z0-9-]{6,20}"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-order-tracking-email">Email address</Label>
        <Input
          id="shadcn-order-tracking-email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-order-tracking-postal">Postal code</Label>
        <Input
          id="shadcn-order-tracking-postal"
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
