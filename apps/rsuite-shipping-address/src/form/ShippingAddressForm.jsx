import { useState } from 'react'
import { Form, Button, SelectPicker, Checkbox } from 'rsuite'
import { COUNTRIES, US_STATES, CANADIAN_PROVINCES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = () => {
    alert('Shipping address saved!')
  }

  const regionOptions =
    country === 'CA'
      ? CANADIAN_PROVINCES.map((p) => ({ label: p, value: p }))
      : US_STATES.map((s) => ({ label: s, value: s }))

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="fullName">
        <Form.ControlLabel>Recipient name</Form.ControlLabel>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group controlId="street">
        <Form.ControlLabel>Street address</Form.ControlLabel>
        <Form.Control name="street" type="text" required />
      </Form.Group>

      <Form.Group controlId="street2">
        <Form.ControlLabel>Apartment, suite, etc.</Form.ControlLabel>
        <Form.Control name="street2" type="text" />
      </Form.Group>

      <Form.Group controlId="city">
        <Form.ControlLabel>City</Form.ControlLabel>
        <Form.Control name="city" type="text" required />
      </Form.Group>

      <Form.Group controlId="country">
        <Form.ControlLabel>Country</Form.ControlLabel>
        <Form.Control
          name="country"
          accepter={SelectPicker}
          data={COUNTRIES.map((c) => ({ label: c.label, value: c.value }))}
          value={country}
          onChange={setCountry}
          block
          required
        />
      </Form.Group>

      <Form.Group controlId="region">
        <Form.ControlLabel>State / Province / Territory</Form.ControlLabel>
        <Form.Control
          name="region"
          accepter={SelectPicker}
          data={regionOptions}
          placeholder="Select an option"
          block
          required
        />
      </Form.Group>

      <Form.Group controlId="postalCode">
        <Form.ControlLabel>Postal code</Form.ControlLabel>
        <Form.Control name="postalCode" type="text" required />
      </Form.Group>

      <Form.Group controlId="default">
        <Checkbox name="default">Use as default shipping address</Checkbox>
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Save address
        </Button>
      </Form.Group>
    </Form>
  )
}

export default ShippingAddressForm
