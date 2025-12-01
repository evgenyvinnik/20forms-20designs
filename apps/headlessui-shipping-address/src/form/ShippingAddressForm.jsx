import {
  Checkbox,
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { useState } from 'react'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState(COUNTRIES[0])
  const [region, setRegion] = useState({ value: '', label: 'Select an option' })
  const [defaultAddress, setDefaultAddress] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country.value === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country.value === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry)
    setRegion({ value: '', label: 'Select an option' })
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-shipping-full-name">
          Recipient name
        </Label>
        <input
          id="headlessui-shipping-full-name"
          name="fullName"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-shipping-street">
          Street address
        </Label>
        <input
          id="headlessui-shipping-street"
          name="street"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-shipping-street-2">
          Apartment, suite, etc.
        </Label>
        <input
          id="headlessui-shipping-street-2"
          name="street2"
          type="text"
          className="input"
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-shipping-city">
          City
        </Label>
        <input
          id="headlessui-shipping-city"
          name="city"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label">Country</Label>
        <Listbox value={country} onChange={handleCountryChange} name="country">
          <div className="select-wrapper">
            <ListboxButton className="select-button">
              <span>{country.label}</span>
              <svg
                className="select-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </ListboxButton>
            <ListboxOptions className="select-options">
              {COUNTRIES.map((c) => (
                <ListboxOption
                  key={c.value}
                  value={c}
                  className="select-option"
                >
                  {c.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </Field>

      <Field className="form-field">
        <Label className="label">State / Province / Territory</Label>
        <Listbox value={region} onChange={setRegion} name="region">
          <div className="select-wrapper">
            <ListboxButton className="select-button">
              <span>{region.label || region}</span>
              <svg
                className="select-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </ListboxButton>
            <ListboxOptions className="select-options">
              <ListboxOption
                value={{ value: '', label: 'Select an option' }}
                className="select-option"
              >
                Select an option
              </ListboxOption>
              {regionOptions.map((r) => (
                <ListboxOption
                  key={r}
                  value={{ value: r, label: r }}
                  className="select-option"
                >
                  {r}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-shipping-postal">
          Postal code
        </Label>
        <input
          id="headlessui-shipping-postal"
          name="postalCode"
          type="text"
          pattern={postalPattern}
          inputMode="text"
          className="input"
          required
        />
      </Field>

      <Field className="checkbox-wrapper">
        <Checkbox
          checked={defaultAddress}
          onChange={setDefaultAddress}
          name="default"
          className="checkbox"
        >
          {defaultAddress && (
            <svg className="checkbox-check" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 8L6 11L11 3"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Checkbox>
        <Label className="checkbox-label">
          Use as default shipping address
        </Label>
      </Field>

      <button type="submit" className="button button-primary">
        Save address
      </button>
    </form>
  )
}

export default ShippingAddressForm
