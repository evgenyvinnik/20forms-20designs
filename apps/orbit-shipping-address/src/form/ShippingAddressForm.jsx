import { useState } from 'react'
import {
  InputField,
  Button,
  Checkbox,
  Select,
  Stack,
  Heading,
} from '@kiwicom/orbit-components'

function ShippingAddressForm() {
  const [formData, setFormData] = useState({
    recipientName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
    useAsDefault: false,
  })

  const handleChange = (name) => (e) => {
    const value = e.target ? e.target.value : e
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = () => {
    setFormData((prev) => ({ ...prev, useAsDefault: !prev.useAsDefault }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Shipping address submitted:\n' + JSON.stringify(formData, null, 2))
  }

  const usStates = [
    { label: 'Select state', value: '' },
    { label: 'California', value: 'CA' },
    { label: 'New York', value: 'NY' },
    { label: 'Texas', value: 'TX' },
    { label: 'Florida', value: 'FL' },
    { label: 'Illinois', value: 'IL' },
  ]

  const caProvinces = [
    { label: 'Select province', value: '' },
    { label: 'Ontario', value: 'ON' },
    { label: 'Quebec', value: 'QC' },
    { label: 'British Columbia', value: 'BC' },
    { label: 'Alberta', value: 'AB' },
  ]

  const stateOptions = formData.country === 'ca' ? caProvinces : usStates

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing="medium">
        <Heading type="title2">Shipping Address</Heading>

        <InputField
          label="Recipient name"
          type="text"
          value={formData.recipientName}
          onChange={handleChange('recipientName')}
          required
        />

        <InputField
          label="Street address"
          type="text"
          value={formData.streetAddress}
          onChange={handleChange('streetAddress')}
          required
        />

        <InputField
          label="Apartment, suite, etc."
          type="text"
          value={formData.apartment}
          onChange={handleChange('apartment')}
        />

        <InputField
          label="City"
          type="text"
          value={formData.city}
          onChange={handleChange('city')}
          required
        />

        <Select
          label="Country"
          value={formData.country}
          onChange={handleChange('country')}
          options={[
            { label: 'Select country', value: '' },
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
          ]}
          required
        />

        <Select
          label="State/Province/Territory"
          value={formData.state}
          onChange={handleChange('state')}
          options={stateOptions}
          required
        />

        <InputField
          label="Postal code"
          type="text"
          value={formData.postalCode}
          onChange={handleChange('postalCode')}
          required
        />

        <Checkbox
          label="Use as default shipping address"
          checked={formData.useAsDefault}
          onChange={handleCheckboxChange}
        />

        <Button type="primary" submit fullWidth>
          Save address
        </Button>
      </Stack>
    </form>
  )
}

export default ShippingAddressForm
