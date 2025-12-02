import { Button, Card, Label, TextInput } from 'flowbite-react'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Card className="w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Order Tracking</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="flowbite-order-tracking-number"
              value="Order number"
            />
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
            <Label
              htmlFor="flowbite-order-tracking-email"
              value="Email address"
            />
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
            <Label
              htmlFor="flowbite-order-tracking-postal"
              value="Postal code"
            />
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
    </Card>
  )
}

export default OrderTrackingForm
