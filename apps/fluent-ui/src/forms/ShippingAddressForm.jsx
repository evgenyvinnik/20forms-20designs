import { useState } from 'react'
import {
  Button,
  Checkbox,
  Field,
  Input,
  Select,
  makeStyles,
} from '@fluentui/react-components'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
})

function ShippingAddressForm() {
  const styles = useStyles()
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="Recipient name" required>
        <Input
          id="fluent-ui-shipping-full-name"
          name="fullName"
          type="text"
          required
        />
      </Field>
      <Field label="Street address" required>
        <Input
          id="fluent-ui-shipping-street"
          name="street"
          type="text"
          required
        />
      </Field>
      <Field label="Apartment, suite, etc.">
        <Input id="fluent-ui-shipping-street-2" name="street2" type="text" />
      </Field>
      <Field label="City" required>
        <Input id="fluent-ui-shipping-city" name="city" type="text" required />
      </Field>
      <Field label="Country" required>
        <Select
          id="fluent-ui-shipping-country"
          name="country"
          value={country}
          onChange={(e, data) => setCountry(data.value)}
          required
        >
          {COUNTRIES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="State / Province / Territory" required>
        <Select id="fluent-ui-shipping-region" name="region" required>
          <option value="">Select an option</option>
          {regionOptions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Postal code" required>
        <Input
          id="fluent-ui-shipping-postal"
          name="postalCode"
          type="text"
          pattern={postalPattern}
          required
        />
      </Field>
      <Checkbox name="default" label="Use as default shipping address" />
      <Button type="submit" appearance="primary">
        Save address
      </Button>
    </form>
  )
}

export default ShippingAddressForm
