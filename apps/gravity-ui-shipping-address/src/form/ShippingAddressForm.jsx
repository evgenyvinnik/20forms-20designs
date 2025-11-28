import { useMemo, useState } from 'react'
import { Button, Checkbox, TextInput } from '@gravity-ui/uikit'

import {
  CANADIAN_PROVINCES,
  COUNTRIES,
  US_STATES,
} from '../../constants/locationOptions'
import { Field, SingleSelectField, formStackStyle } from './common.jsx'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const countryOptions = useMemo(
    () => COUNTRIES.map(({ value, label }) => ({ value, content: label })),
    []
  )
  const regionOptions = useMemo(() => {
    const regions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
    return regions.map((region) => ({ value: region, content: region }))
  }, [country])
  const postalPattern =
    country === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-shipping-full-name"
        label="Recipient name"
        name="fullName"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-shipping-street"
        label="Street address"
        name="street"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-shipping-street-2"
        label="Apartment, suite, etc."
        name="street2"
      />
      <TextInput
        id="gravity-shipping-city"
        label="City"
        name="city"
        controlProps={{ required: true }}
      />
      <SingleSelectField
        id="gravity-shipping-country"
        label="Country"
        name="country"
        options={countryOptions}
        value={[country]}
        onUpdate={(next) => setCountry(next[0] || 'US')}
      />
      <SingleSelectField
        key={country}
        id="gravity-shipping-region"
        label="State / Province / Territory"
        name="region"
        options={[{ value: '', content: 'Select an option' }, ...regionOptions]}
        placeholder="Select an option"
      />
      <TextInput
        id="gravity-shipping-postal"
        label="Postal code"
        name="postalCode"
        controlProps={{ required: true, pattern: postalPattern }}
      />
      <Checkbox
        name="default"
        value="true"
        content="Use as default shipping address"
      />
      <Button view="action" type="submit">
        Save address
      </Button>
    </form>
  )
}

export default ShippingAddressForm
