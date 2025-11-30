import { useState } from 'react'
import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Recipient name" name="fullName" type="text" required />
      <wa-input label="Street address" name="street" type="text" required />
      <wa-input label="Apartment, suite, etc." name="street2" type="text" />
      <wa-input label="City" name="city" type="text" required />
      <wa-select
        label="Country"
        name="country"
        value={country}
        onWa-change={handleCountryChange}
        required
      >
        {COUNTRIES.map(({ value, label }) => (
          <wa-option key={value} value={value}>
            {label}
          </wa-option>
        ))}
      </wa-select>
      <wa-select
        label="State / Province / Territory"
        name="region"
        placeholder="Select an option"
        required
      >
        {regionOptions.map((region) => (
          <wa-option key={region} value={region}>
            {region}
          </wa-option>
        ))}
      </wa-select>
      <wa-input label="Postal code" name="postalCode" type="text" required />
      <wa-checkbox name="default">Use as default shipping address</wa-checkbox>
      <wa-button type="submit" variant="brand">
        Save address
      </wa-button>
    </form>
  )
}

export default ShippingAddressForm
