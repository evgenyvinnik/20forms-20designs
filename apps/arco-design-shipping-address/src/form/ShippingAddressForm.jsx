import { useState } from 'react'
import { Button, Input, Checkbox, Select, Space } from '@arco-design/web-react'
import { CANADIAN_PROVINCES, COUNTRIES, US_STATES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')
  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="arco-shipping-full-name"
          >
            Recipient name
          </label>
          <Input
            id="arco-shipping-full-name"
            name="fullName"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="arco-shipping-street"
          >
            Street address
          </label>
          <Input
            id="arco-shipping-street"
            name="street"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="arco-shipping-street-2"
          >
            Apartment, suite, etc.
          </label>
          <Input
            id="arco-shipping-street-2"
            name="street2"
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="arco-shipping-city"
          >
            City
          </label>
          <Input
            id="arco-shipping-city"
            name="city"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="arco-shipping-country"
          >
            Country
          </label>
          <Select
            id="arco-shipping-country"
            value={country}
            onChange={(value) => setCountry(value)}
            style={{ width: '100%' }}
          >
            {COUNTRIES.map(({ value, label }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="arco-shipping-region"
          >
            State / Province / Territory
          </label>
          <Select
            id="arco-shipping-region"
            placeholder="Select an option"
            style={{ width: '100%' }}
          >
            {regionOptions.map((region) => (
              <Select.Option key={region} value={region}>
                {region}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="arco-shipping-postal"
          >
            Postal code
          </label>
          <Input
            id="arco-shipping-postal"
            name="postalCode"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <Checkbox name="default">Use as default shipping address</Checkbox>
        </div>
        <Button type="primary" htmlType="submit">
          Save address
        </Button>
      </Space>
    </form>
  )
}

export default ShippingAddressForm
