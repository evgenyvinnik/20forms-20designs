import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select } from './ui/select'
import { Checkbox } from './ui/checkbox'
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
      <div className="space-y-2">
        <Label htmlFor="shadcn-shipping-full-name">Recipient name</Label>
        <Input
          id="shadcn-shipping-full-name"
          name="fullName"
          type="text"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-shipping-street">Street address</Label>
        <Input id="shadcn-shipping-street" name="street" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-shipping-street-2">Apartment, suite, etc.</Label>
        <Input id="shadcn-shipping-street-2" name="street2" type="text" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-shipping-city">City</Label>
        <Input id="shadcn-shipping-city" name="city" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-shipping-country">Country</Label>
        <Select
          id="shadcn-shipping-country"
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
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-shipping-region">
          State / Province / Territory
        </Label>
        <Select id="shadcn-shipping-region" name="region" required>
          <option value="">Select an option</option>
          {regionOptions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-shipping-postal">Postal code</Label>
        <Input
          id="shadcn-shipping-postal"
          name="postalCode"
          type="text"
          pattern={postalPattern}
          inputMode="text"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox name="default" />
        <Label htmlFor="default" className="font-normal">
          Use as default shipping address
        </Label>
      </div>
      <Button type="submit">Save address</Button>
    </form>
  )
}

export default ShippingAddressForm
