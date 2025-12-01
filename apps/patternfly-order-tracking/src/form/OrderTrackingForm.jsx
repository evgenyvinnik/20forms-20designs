import {
  Form,
  FormGroup,
  TextInput,
  Button,
  ActionGroup,
} from '@patternfly/react-core'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup
        label="Order number"
        isRequired
        fieldId="pf-order-tracking-number"
      >
        <TextInput
          isRequired
          type="text"
          id="pf-order-tracking-number"
          name="orderNumber"
        />
      </FormGroup>
      <FormGroup
        label="Email address"
        isRequired
        fieldId="pf-order-tracking-email"
      >
        <TextInput
          isRequired
          type="email"
          id="pf-order-tracking-email"
          name="email"
        />
      </FormGroup>
      <FormGroup
        label="Postal code"
        isRequired
        fieldId="pf-order-tracking-postal"
      >
        <TextInput
          isRequired
          type="text"
          id="pf-order-tracking-postal"
          name="postalCode"
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Find order
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default OrderTrackingForm
