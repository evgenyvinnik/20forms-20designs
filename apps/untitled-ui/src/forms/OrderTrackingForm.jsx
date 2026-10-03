import { Button } from '@/components/base/buttons/button'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        label="Order number"
        name="orderNumber"
        pattern="[A-Za-z0-9-]{6,20}"
        isRequired
      />
      <Input label="Email address" name="email" type="email" isRequired />
      <Input label="Postal code" name="postalCode" isRequired />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Find order
        </Button>
      </div>
    </Form>
  )
}

export default OrderTrackingForm
