import { useState } from 'react'
import {
  CANADIAN_PROVINCES,
  COUNTRIES,
  US_STATES,
} from '../../constants/locationOptions'

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="shipping-full-name" className="label">
          <span className="label-text">Recipient name</span>
        </label>
        <input
          id="shipping-full-name"
          name="fullName"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="shipping-street" className="label">
          <span className="label-text">Street address</span>
        </label>
        <input
          id="shipping-street"
          name="street"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="shipping-street-2" className="label">
          <span className="label-text">Apartment, suite, etc.</span>
        </label>
        <input
          id="shipping-street-2"
          name="street2"
          type="text"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="shipping-city" className="label">
          <span className="label-text">City</span>
        </label>
        <input
          id="shipping-city"
          name="city"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="shipping-country" className="label">
          <span className="label-text">Country</span>
        </label>
        <select
          id="shipping-country"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          required
          className="select select-bordered w-full"
        >
          {COUNTRIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="shipping-region" className="label">
          <span className="label-text">State / Province / Territory</span>
        </label>
        <select
          id="shipping-region"
          name="region"
          required
          className="select select-bordered w-full"
        >
          <option value="">Select an option</option>
          {regionOptions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="shipping-postal" className="label">
          <span className="label-text">Postal code</span>
        </label>
        <input
          id="shipping-postal"
          name="postalCode"
          type="text"
          pattern={postalPattern}
          inputMode="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="default" type="checkbox" className="checkbox" />
          <span className="label-text">Use as default shipping address</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Save address
      </button>
    </form>
  )
}

export default ShippingAddressForm
