import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiCheckbox,
  EuiButton,
} from '@elastic/eui'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')
  const [fullName, setFullName] = useState('')
  const [street, setStreet] = useState('')
  const [street2, setStreet2] = useState('')
  const [city, setCity] = useState('')
  const [region, setRegion] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [defaultAddress, setDefaultAddress] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }, [])

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Recipient name">
        <EuiFieldText
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Street address">
        <EuiFieldText
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Apartment, suite, etc.">
        <EuiFieldText
          value={street2}
          onChange={(e) => setStreet2(e.target.value)}
        />
      </EuiFormRow>

      <EuiFormRow label="City">
        <EuiFieldText
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Country">
        <EuiSelect
          options={COUNTRIES.map(({ value, label }) => ({
            value,
            text: label,
          }))}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="State / Province / Territory">
        <EuiSelect
          options={[
            { value: '', text: 'Select an option' },
            ...regionOptions.map((region) => ({ value: region, text: region })),
          ]}
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Postal code">
        <EuiFieldText
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="defaultAddress"
          label="Use as default shipping address"
          checked={defaultAddress}
          onChange={(e) => setDefaultAddress(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Save address
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default ShippingAddressForm
