import { useState } from 'react'
import { Form, Input, Button, Select, Checkbox } from 'antd'
import { COUNTRIES, US_STATES, CANADIAN_PROVINCES } from './locationOptions'

function ShippingAddressForm() {
  const [form] = Form.useForm()
  const [country, setCountry] = useState('US')

  const handleSubmit = () => {
    alert('Shipping address saved!')
  }

  const regionOptions = country === 'CA' ? CANADIAN_PROVINCES : US_STATES

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Recipient name"
        name="fullName"
        rules={[{ required: true, message: 'Please enter recipient name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Street address"
        name="street"
        rules={[{ required: true, message: 'Please enter street address' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Apartment, suite, etc." name="street2">
        <Input />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: 'Please enter city' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        initialValue="US"
        rules={[{ required: true, message: 'Please select a country' }]}
      >
        <Select
          onChange={(value) => {
            setCountry(value)
            form.setFieldValue('region', undefined)
          }}
        >
          {COUNTRIES.map((c) => (
            <Select.Option key={c.value} value={c.value}>
              {c.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="State / Province / Territory"
        name="region"
        rules={[{ required: true, message: 'Please select a region' }]}
      >
        <Select placeholder="Select an option">
          {regionOptions.map((r) => (
            <Select.Option key={r} value={r}>
              {r}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Postal code"
        name="postalCode"
        rules={[{ required: true, message: 'Please enter postal code' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="isDefault" valuePropName="checked">
        <Checkbox>Use as default shipping address</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save address
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ShippingAddressForm
