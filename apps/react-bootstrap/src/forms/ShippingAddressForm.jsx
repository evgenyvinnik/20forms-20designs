import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country === 'CA'
      ? '[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]'
      : '[0-9]{5}(-[0-9]{4})?'

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-shipping-full-name">
        <Form.Label>Recipient name</Form.Label>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-shipping-street">
        <Form.Label>Street address</Form.Label>
        <Form.Control name="street" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-shipping-street-2">
        <Form.Label>Apartment, suite, etc.</Form.Label>
        <Form.Control name="street2" type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-shipping-city">
        <Form.Label>City</Form.Label>
        <Form.Control name="city" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-shipping-country">
        <Form.Label>Country</Form.Label>
        <Form.Select
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          required
        >
          {COUNTRIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-shipping-region">
        <Form.Label>State / Province / Territory</Form.Label>
        <Form.Select name="region" required defaultValue="">
          <option value="">Select an option</option>
          {regionOptions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-shipping-postal">
        <Form.Label>Postal code</Form.Label>
        <Form.Control
          name="postalCode"
          type="text"
          pattern={postalPattern}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-shipping-default">
        <Form.Check
          type="checkbox"
          label="Use as default shipping address"
          name="default"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save address
      </Button>
    </Form>
  )
}

export default ShippingAddressForm
