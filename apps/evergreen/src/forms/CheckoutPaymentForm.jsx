import { Button, Pane, SelectField, TextInputField } from 'evergreen-ui'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Pane
      is="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={8}
    >
      <TextInputField
        id="evergreen-checkout-email"
        label="Email for receipt"
        name="email"
        type="email"
        required
      />
      <SelectField
        id="evergreen-checkout-shipping-method"
        label="Shipping method"
        name="shippingMethod"
        defaultValue=""
        required
      >
        <option value="">Select shipping</option>
        <option value="standard">Standard</option>
        <option value="express">Express</option>
        <option value="overnight">Overnight</option>
      </SelectField>
      <TextInputField
        id="evergreen-checkout-card-number"
        label="Card number"
        name="cardNumber"
        type="text"
        inputMode="numeric"
        pattern="[0-9]{13,19}"
        maxLength={19}
        required
      />
      <TextInputField
        id="evergreen-checkout-expiration"
        label="Expiration"
        name="expiration"
        type="text"
        placeholder="MM/YY"
        pattern="^(0[1-9]|1[0-2])\\/\\d{2}$"
        inputMode="numeric"
        required
      />
      <TextInputField
        id="evergreen-checkout-cvc"
        label="CVC"
        name="cvc"
        type="text"
        inputMode="numeric"
        pattern="[0-9]{3,4}"
        maxLength={4}
        required
      />
      <TextInputField
        id="evergreen-checkout-promo"
        label="Promo code"
        name="promoCode"
        type="text"
        pattern="[A-Za-z0-9]{3,15}"
      />
      <Button appearance="primary" type="submit">
        Place order
      </Button>
    </Pane>
  )
}

export default CheckoutPaymentForm
