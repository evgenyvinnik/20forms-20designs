import { useMemo, useState } from 'react'
import {
  Button,
  Checkbox,
  FormGroup,
  HTMLSelect,
  InputGroup,
} from '@blueprintjs/core'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'
import { formStackStyles } from './formStyles.js'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const regionOptions = useMemo(
    () => (country === 'CA' ? CANADIAN_PROVINCES : US_STATES),
    [country]
  )

  const postalPattern =
    country === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup label="Recipient name" labelFor="blueprint-shipping-name">
        <InputGroup
          id="blueprint-shipping-name"
          name="fullName"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Street address" labelFor="blueprint-shipping-street">
        <InputGroup
          id="blueprint-shipping-street"
          name="street"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Apartment, suite, etc."
        labelFor="blueprint-shipping-street-2"
      >
        <InputGroup
          id="blueprint-shipping-street-2"
          name="street2"
          type="text"
          fill
        />
      </FormGroup>
      <FormGroup label="City" labelFor="blueprint-shipping-city">
        <InputGroup
          id="blueprint-shipping-city"
          name="city"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Country" labelFor="blueprint-shipping-country">
        <HTMLSelect
          id="blueprint-shipping-country"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          required
          fill
        >
          {COUNTRIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </HTMLSelect>
      </FormGroup>
      <FormGroup
        label="State / Province / Territory"
        labelFor="blueprint-shipping-region"
      >
        <HTMLSelect
          id="blueprint-shipping-region"
          name="region"
          defaultValue=""
          required
          fill
        >
          <option value="">Select an option</option>
          {regionOptions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </HTMLSelect>
      </FormGroup>
      <FormGroup label="Postal code" labelFor="blueprint-shipping-postal">
        <InputGroup
          id="blueprint-shipping-postal"
          name="postalCode"
          type="text"
          pattern={postalPattern}
          inputMode="text"
          required
          fill
        />
      </FormGroup>
      <Checkbox label="Use as default shipping address" name="default" />
      <Button intent="primary" type="submit">
        Save address
      </Button>
    </form>
  )
}

export default ShippingAddressForm
