import { useMemo, useState } from 'react'
import {
  Button,
  Checkbox,
  Pane,
  SelectField,
  TextInputField,
} from 'evergreen-ui'

import {
  CANADIAN_PROVINCES,
  COUNTRIES,
  US_STATES,
} from './locationOptions'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

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
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField
        id="evergreen-shipping-full-name"
        label="Recipient name"
        name="fullName"
        type="text"
        required
      />
      <TextInputField
        id="evergreen-shipping-street"
        label="Street address"
        name="street"
        type="text"
        required
      />
      <TextInputField
        id="evergreen-shipping-street-2"
        label="Apartment, suite, etc."
        name="street2"
        type="text"
      />
      <TextInputField
        id="evergreen-shipping-city"
        label="City"
        name="city"
        type="text"
        required
      />
      <SelectField
        id="evergreen-shipping-country"
        label="Country"
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
      </SelectField>
      <SelectField
        id="evergreen-shipping-region"
        label="State / Province / Territory"
        name="region"
        defaultValue=""
        required
      >
        <option value="">Select an option</option>
        {regionOptions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </SelectField>
      <TextInputField
        id="evergreen-shipping-postal"
        label="Postal code"
        name="postalCode"
        type="text"
        pattern={postalPattern}
        required
      />
      <Checkbox label="Use as default shipping address" name="default" />
      <Button appearance="primary" type="submit">
        Save address
      </Button>
    </Pane>
  )
}

export default ShippingAddressForm
