import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Button,
} from '@trussworks/react-uswds'

function CheckoutPaymentForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email for receipt
        </Label>
        <TextInput
          id="uswds-checkout-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-shipping-method"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Shipping method
        </Label>
        <Select
          id="uswds-checkout-shipping-method"
          name="shippingMethod"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select shipping</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-card-number"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Card number
        </Label>
        <TextInput
          id="uswds-checkout-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-expiration"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Expiration
        </Label>
        <TextInput
          id="uswds-checkout-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-cvc"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          CVC
        </Label>
        <TextInput
          id="uswds-checkout-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-checkout-promo"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Promo code
        </Label>
        <TextInput
          id="uswds-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <Button type="submit">Place order</Button>
    </Form>
  )
}

export default CheckoutPaymentForm
