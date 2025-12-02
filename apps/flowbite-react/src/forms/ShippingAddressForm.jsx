import { useState } from 'react'
import {
  Button,
  Card,
  Checkbox,
  Label,
  Select,
  TextInput,
} from 'flowbite-react'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

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
    <Card className="mx-4 w-full p-6 sm:p-8">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Shipping Address</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-shipping-full-name">Recipient name</Label>
          </div>
          <TextInput
            id="flowbite-shipping-full-name"
            name="fullName"
            type="text"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-shipping-street">Street address</Label>
          </div>
          <TextInput
            id="flowbite-shipping-street"
            name="street"
            type="text"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-shipping-street-2">Apartment, suite, etc.</Label>
          </div>
          <TextInput
            id="flowbite-shipping-street-2"
            name="street2"
            type="text"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-shipping-city">City</Label>
          </div>
          <TextInput
            id="flowbite-shipping-city"
            name="city"
            type="text"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-shipping-country">Country</Label>
          </div>
          <Select
            id="flowbite-shipping-country"
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
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-shipping-region">State / Province / Territory</Label>
          </div>
          <Select id="flowbite-shipping-region" name="region" required>
            <option value="">Select an option</option>
            {regionOptions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="flowbite-shipping-postal">Postal code</Label>
          </div>
          <TextInput
            id="flowbite-shipping-postal"
            name="postalCode"
            type="text"
            pattern={postalPattern}
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="flowbite-shipping-default" name="default" />
          <Label htmlFor="flowbite-shipping-default">
            Use as default shipping address
          </Label>
        </div>
        <Button type="submit">Save address</Button>
      </form>
    </Card>
  )
}

export default ShippingAddressForm
