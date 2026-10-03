import { useState } from 'react'
import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { Select } from '@/components/base/select/select'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES
  const postalPattern =
    country === 'CA'
      ? '[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d'
      : '\\d{5}(-\\d{4})?'

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Recipient name" name="fullName" isRequired />
      <Input label="Street address" name="street" isRequired />
      <Input label="Apartment, suite, etc." name="street2" />
      <Input label="City" name="city" isRequired />
      <Select
        label="Country"
        name="country"
        value={country}
        onChange={setCountry}
        isRequired
        items={COUNTRIES.map(({ value, label }) => ({ id: value, label }))}
      >
        {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
      </Select>
      <Select
        key={country}
        label="State / Province / Territory"
        name="region"
        placeholder="Select an option"
        isRequired
        items={regionOptions.map((region) => ({ id: region, label: region }))}
      >
        {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
      </Select>
      <Input
        label="Postal code"
        name="postalCode"
        pattern={postalPattern}
        inputMode="text"
        isRequired
      />
      <Checkbox label="Use as default shipping address" name="default" />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Save address
        </Button>
      </div>
    </Form>
  )
}

export default ShippingAddressForm
