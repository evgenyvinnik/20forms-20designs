import { Input, Button, Checkbox } from '@nextui-org/react'

function OrderTrackingForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Tracking order...')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <p className="text-default-600">
        Enter your order number and email to track your order status.
      </p>
      <Input
        label="Order number"
        name="orderNumber"
        isRequired
        variant="bordered"
        placeholder="e.g., ORD-12345"
      />
      <Input
        label="Email address"
        name="email"
        type="email"
        isRequired
        variant="bordered"
      />
      <Checkbox name="notifications">
        Receive email updates about this order
      </Checkbox>
      <Button type="submit" color="primary">
        Track order
      </Button>
    </form>
  )
}

export default OrderTrackingForm
