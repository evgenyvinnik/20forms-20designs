import { Button, FormControl, Select, TextInput } from '@primer/react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <FormControl required>
        <FormControl.Label>Email for receipt</FormControl.Label>
        <TextInput
          id="primer-checkout-email"
          name="email"
          type="email"
          block
          required
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Shipping method</FormControl.Label>
        <Select
          id="primer-checkout-shipping"
          name="shippingMethod"
          defaultValue="standard"
          required
          block
        >
          <Select.Option value="standard">Standard Shipping</Select.Option>
          <Select.Option value="express">Express Shipping</Select.Option>
          <Select.Option value="overnight">Overnight Delivery</Select.Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormControl.Label>Card number</FormControl.Label>
        <TextInput
          id="primer-checkout-card"
          name="cardNumber"
          type="text"
          maxLength={19}
          block
          required
        />
      </FormControl>

      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
      >
        <FormControl required>
          <FormControl.Label>Expiration</FormControl.Label>
          <TextInput
            id="primer-checkout-exp"
            name="expiration"
            placeholder="MM/YY"
            block
            required
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>CVC</FormControl.Label>
          <TextInput
            id="primer-checkout-cvc"
            name="cvc"
            type="password"
            maxLength={4}
            block
            required
          />
        </FormControl>
      </div>

      <FormControl>
        <FormControl.Label>Promo code</FormControl.Label>
        <TextInput
          id="primer-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          block
        />
      </FormControl>

      <Button type="submit" variant="primary" block>
        Place order
      </Button>
    </form>
  )
}

export default CheckoutPaymentForm
