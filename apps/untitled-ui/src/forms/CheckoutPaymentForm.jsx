import { Button } from '@/components/base/buttons/button'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { Select } from '@/components/base/select/select'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Email for receipt" name="email" type="email" isRequired />
      <Select
        label="Shipping method"
        name="shippingMethod"
        defaultValue="standard"
        isRequired
        items={[
          { id: 'standard', label: 'Standard Shipping' },
          { id: 'express', label: 'Express Shipping' },
          { id: 'overnight', label: 'Overnight Delivery' },
        ]}
      >
        {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
      </Select>
      <Input label="Card number" name="cardNumber" maxLength={19} isRequired />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Expiration"
          name="expiration"
          placeholder="MM/YY"
          isRequired
        />
        <Input label="CVC" name="cvc" maxLength={4} isRequired />
      </div>
      <Input label="Promo code" name="promoCode" pattern="[A-Za-z0-9]{3,15}" />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Place order
        </Button>
      </div>
    </Form>
  )
}

export default CheckoutPaymentForm
