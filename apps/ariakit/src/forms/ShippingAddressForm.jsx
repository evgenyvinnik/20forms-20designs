import * as Ariakit from '@ariakit/react'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      fullName: '',
      street: '',
      street2: '',
      city: '',
      country: 'US',
      region: '',
      postalCode: '',
      defaultAddress: false,
    },
  })

  const country = form.useValue(form.names.country)

  form.useSubmit(() => {
    alert('Shipping address saved!')
  })

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.fullName} className="label">
          Recipient name
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.fullName}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.street} className="label">
          Street address
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.street}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.street2} className="label">
          Apartment, suite, etc.
        </Ariakit.FormLabel>
        <Ariakit.FormInput name={form.names.street2} className="input" />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.city} className="label">
          City
        </Ariakit.FormLabel>
        <Ariakit.FormInput name={form.names.city} className="input" required />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.country} className="label">
          Country
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.country}
          render={
            <select className="select">
              {COUNTRIES.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          }
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.region} className="label">
          State / Province / Territory
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.region}
          render={
            <select className="select">
              <option value="">Select an option</option>
              {regionOptions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          }
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.postalCode} className="label">
          Postal code
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.postalCode}
          pattern={postalPattern}
          inputMode="text"
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <label className="checkbox-wrapper">
        <Ariakit.FormCheckbox
          name={form.names.defaultAddress}
          className="checkbox"
        />
        <span className="checkbox-label">Use as default shipping address</span>
      </label>
      <Ariakit.FormSubmit className="button button-primary">
        Save address
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default ShippingAddressForm
