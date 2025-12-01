import { useState } from 'react'
import { Form, Button, Select } from '@douyinfe/semi-ui'
import { COUNTRIES, US_STATES, CANADIAN_PROVINCES } from './locationOptions'

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (values) => {
    console.log(values)
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <Form
      onSubmit={handleSubmit}
      labelPosition="top"
      initValues={{ country: 'US' }}
    >
      <Form.Input
        field="fullName"
        label="Recipient name"
        rules={[{ required: true, message: 'Please enter recipient name' }]}
      />

      <Form.Input
        field="street"
        label="Street address"
        rules={[{ required: true, message: 'Please enter street address' }]}
      />

      <Form.Input field="street2" label="Apartment, suite, etc." />

      <Form.Input
        field="city"
        label="City"
        rules={[{ required: true, message: 'Please enter city' }]}
      />

      <Form.Select
        field="country"
        label="Country"
        rules={[{ required: true, message: 'Please select a country' }]}
        style={{ width: '100%' }}
        onChange={(value) => setCountry(value)}
      >
        {COUNTRIES.map((c) => (
          <Select.Option key={c.value} value={c.value}>
            {c.label}
          </Select.Option>
        ))}
      </Form.Select>

      <Form.Select
        field="region"
        label="State / Province / Territory"
        placeholder="Select an option"
        rules={[{ required: true, message: 'Please select a region' }]}
        style={{ width: '100%' }}
      >
        {regionOptions.map((r) => (
          <Select.Option key={r} value={r}>
            {r}
          </Select.Option>
        ))}
      </Form.Select>

      <Form.Input
        field="postalCode"
        label="Postal code"
        rules={[{ required: true, message: 'Please enter postal code' }]}
      />

      <Form.Checkbox field="isDefault">
        Use as default shipping address
      </Form.Checkbox>

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Save address
      </Button>
    </Form>
  )
}

export default ShippingAddressForm
