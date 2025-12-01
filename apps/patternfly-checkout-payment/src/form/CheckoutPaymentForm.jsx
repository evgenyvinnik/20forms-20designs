import {
  Form,
  FormGroup,
  TextInput,
  Button,
  ActionGroup,
  FormSelect,
  FormSelectOption,
} from '@patternfly/react-core'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup
        label="Email for receipt"
        isRequired
        fieldId="pf-checkout-email"
      >
        <TextInput
          isRequired
          type="email"
          id="pf-checkout-email"
          name="email"
        />
      </FormGroup>
      <FormGroup
        label="Shipping method"
        isRequired
        fieldId="pf-checkout-shipping-method"
      >
        <FormSelect
          id="pf-checkout-shipping-method"
          name="shippingMethod"
          isRequired
        >
          <FormSelectOption value="" label="Select shipping" isPlaceholder />
          <FormSelectOption value="standard" label="Standard" />
          <FormSelectOption value="express" label="Express" />
          <FormSelectOption value="overnight" label="Overnight" />
        </FormSelect>
      </FormGroup>
      <FormGroup
        label="Card number"
        isRequired
        fieldId="pf-checkout-card-number"
      >
        <TextInput
          isRequired
          type="text"
          id="pf-checkout-card-number"
          name="cardNumber"
          maxLength={19}
        />
      </FormGroup>
      <FormGroup label="Expiration" isRequired fieldId="pf-checkout-expiration">
        <TextInput
          isRequired
          type="text"
          id="pf-checkout-expiration"
          name="expiration"
          placeholder="MM/YY"
        />
      </FormGroup>
      <FormGroup label="CVC" isRequired fieldId="pf-checkout-cvc">
        <TextInput
          isRequired
          type="text"
          id="pf-checkout-cvc"
          name="cvc"
          maxLength={4}
        />
      </FormGroup>
      <FormGroup label="Promo code" fieldId="pf-checkout-promo">
        <TextInput type="text" id="pf-checkout-promo" name="promoCode" />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Place order
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default CheckoutPaymentForm
