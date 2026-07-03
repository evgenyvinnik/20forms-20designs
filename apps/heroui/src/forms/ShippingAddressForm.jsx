import { useState } from 'react'
import { Input, Button, Checkbox, Select, SelectItem } from '@heroui/react'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

export default function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      <Input
        label="Recipient name"
        variant="bordered"
        isRequired
        name="fullName"
      />
      <Input
        label="Street address"
        variant="bordered"
        isRequired
        name="street"
      />
      <Input label="Apartment, suite, etc." variant="bordered" name="street2" />
      <Input label="City" variant="bordered" isRequired name="city" />
      <Select
        label="Country"
        variant="bordered"
        selectedKeys={[country]}
        onChange={(e) => setCountry(e.target.value)}
        isRequired
        name="country"
      >
        {COUNTRIES.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </Select>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Select
          label="State / Province"
          variant="bordered"
          isRequired
          name="region"
        >
          {regionOptions.map((region) => (
            <SelectItem key={region} value={region}>
              {region}
            </SelectItem>
          ))}
        </Select>
        <Input
          label="Postal code"
          variant="bordered"
          isRequired
          name="postalCode"
        />
      </div>
      <Checkbox name="default">Use as default shipping address</Checkbox>
      <Button type="submit" color="primary" shadow>
        Save address
      </Button>
    </form>
  )
}
