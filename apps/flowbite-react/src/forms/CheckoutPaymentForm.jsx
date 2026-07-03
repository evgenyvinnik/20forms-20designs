import { Button, Label, Select, TextInput } from 'flowbite-react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-checkout-email">Email for receipt</Label>
        </div>
        <TextInput
          id="flowbite-checkout-email"
          name="email"
          type="email"
          required
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-checkout-shipping">Shipping method</Label>
        </div>
        <Select id="flowbite-checkout-shipping" name="shippingMethod" required>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </Select>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-checkout-card">Card number</Label>
        </div>
        <TextInput
          id="flowbite-checkout-card"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          maxLength={19}
          required
        />
      </div>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-checkout-exp">Expiration</Label>
          </div>
          <TextInput
            id="flowbite-checkout-exp"
            name="expiration"
            placeholder="MM/YY"
            type="text"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-checkout-cvc">CVC</Label>
          </div>
          <TextInput
            id="flowbite-checkout-cvc"
            name="cvc"
            type="text"
            inputMode="numeric"
            maxLength={4}
            required
          />
        </div>
      </div>

      <Button type="submit">Place order</Button>
    </form>
  )
}

export default CheckoutPaymentForm
