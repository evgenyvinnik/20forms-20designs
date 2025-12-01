import { Form, Button, SelectPicker } from 'rsuite'

const countryOptions = [
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
]

function BillingInfoForm() {
  const handleSubmit = () => {
    alert('Billing details saved!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="cardName">
        <Form.ControlLabel>Name on card</Form.ControlLabel>
        <Form.Control name="cardName" type="text" required />
      </Form.Group>

      <Form.Group controlId="cardNumber">
        <Form.ControlLabel>Card number</Form.ControlLabel>
        <Form.Control
          name="cardNumber"
          type="text"
          inputMode="numeric"
          maxLength={19}
          required
        />
      </Form.Group>

      <Form.Group controlId="expiration">
        <Form.ControlLabel>Expiration date</Form.ControlLabel>
        <Form.Control
          name="expiration"
          type="text"
          placeholder="MM/YY"
          inputMode="numeric"
          required
        />
      </Form.Group>

      <Form.Group controlId="cvc">
        <Form.ControlLabel>Security code</Form.ControlLabel>
        <Form.Control
          name="cvc"
          type="text"
          inputMode="numeric"
          maxLength={4}
          required
        />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.ControlLabel>Billing address</Form.ControlLabel>
        <Form.Control name="address" type="text" required />
      </Form.Group>

      <Form.Group controlId="country">
        <Form.ControlLabel>Country</Form.ControlLabel>
        <Form.Control
          name="country"
          accepter={SelectPicker}
          data={countryOptions}
          placeholder="Select country"
          block
          required
        />
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Save billing details
        </Button>
      </Form.Group>
    </Form>
  )
}

export default BillingInfoForm
