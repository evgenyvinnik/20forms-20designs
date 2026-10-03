import { Button, Input, Select } from '@cloudflare/kumo'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Email for receipt" name="email" type="email" required />
      <Select
        label="Shipping method"
        name="shippingMethod"
        defaultValue="standard"
        items={[
          { value: 'standard', label: 'Standard Shipping' },
          { value: 'express', label: 'Express Shipping' },
          { value: 'overnight', label: 'Overnight Delivery' },
        ]}
        required
        className="kumo-select"
      />
      <Input
        label="Card number"
        name="cardNumber"
        type="text"
        maxLength={19}
        required
      />
      <div className="kumo-row">
        <Input
          label="Expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          required
        />
        <Input label="CVC" name="cvc" type="text" maxLength={4} required />
      </div>
      <Input
        label="Promo code"
        name="promoCode"
        type="text"
        pattern="[A-Za-z0-9]{3,15}"
      />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Place order
        </Button>
      </div>
    </form>
  )
}

export default CheckoutPaymentForm
