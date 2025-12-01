import { Form, Button } from 'react-bootstrap'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-billing-name">
        <Form.Label>Name on card</Form.Label>
        <Form.Control name="cardName" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-billing-card-number">
        <Form.Label>Card number</Form.Label>
        <Form.Control
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength="19"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-billing-expiration">
        <Form.Label>Expiration date</Form.Label>
        <Form.Control
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-billing-cvc">
        <Form.Label>Security code</Form.Label>
        <Form.Control
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength="4"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-billing-address">
        <Form.Label>Billing address</Form.Label>
        <Form.Control name="address" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-billing-country">
        <Form.Label>Country</Form.Label>
        <Form.Select name="country" required>
          <option value="">Select country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Save billing details
      </Button>
    </Form>
  )
}

export default BillingInfoForm
