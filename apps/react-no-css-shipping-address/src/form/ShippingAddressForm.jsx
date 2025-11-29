import { useState } from 'react'
import {
  CANADIAN_PROVINCES,
  COUNTRIES,
  US_STATES,
} from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-shipping-full-name">Recipient name</label>
        <input
          id="nocss-shipping-full-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="nocss-shipping-street">Street address</label>
        <input id="nocss-shipping-street" name="street" type="text" required />
      </div>
      <div>
        <label htmlFor="nocss-shipping-street-2">Apartment, suite, etc.</label>
        <input id="nocss-shipping-street-2" name="street2" type="text" />
      </div>
      <div>
        <label htmlFor="nocss-shipping-city">City</label>
        <input id="nocss-shipping-city" name="city" type="text" required />
      </div>
      <div>
        <label htmlFor="nocss-shipping-country">Country</label>
        <select
          id="nocss-shipping-country"
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
        </select>
      </div>
      <div>
        <label htmlFor="nocss-shipping-region">
          State / Province / Territory
        </label>
        <select id="nocss-shipping-region" name="region" required>
          <option value="">Select an option</option>
          {regionOptions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="nocss-shipping-postal">Postal code</label>
        <input
          id="nocss-shipping-postal"
          name="postalCode"
          type="text"
          pattern={postalPattern}
          inputMode="text"
          required
        />
      </div>
      <div>
        <label>
          <input name="default" type="checkbox" />
          Use as default shipping address
        </label>
      </div>
      <button type="submit">Save address</button>
    </form>
  )
}

export default ShippingAddressForm
