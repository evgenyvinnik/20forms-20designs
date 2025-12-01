import { useState } from 'react'
import { Form, TextField, Picker, Item, Checkbox, Button, Flex } from '@adobe/react-spectrum'

const US_STATES = [
  { key: 'AL', label: 'Alabama' },
  { key: 'AK', label: 'Alaska' },
  { key: 'AZ', label: 'Arizona' },
  { key: 'AR', label: 'Arkansas' },
  { key: 'CA', label: 'California' },
  { key: 'CO', label: 'Colorado' },
  { key: 'CT', label: 'Connecticut' },
  { key: 'DE', label: 'Delaware' },
  { key: 'FL', label: 'Florida' },
  { key: 'GA', label: 'Georgia' },
  { key: 'HI', label: 'Hawaii' },
  { key: 'ID', label: 'Idaho' },
  { key: 'IL', label: 'Illinois' },
  { key: 'IN', label: 'Indiana' },
  { key: 'IA', label: 'Iowa' },
  { key: 'KS', label: 'Kansas' },
  { key: 'KY', label: 'Kentucky' },
  { key: 'LA', label: 'Louisiana' },
  { key: 'ME', label: 'Maine' },
  { key: 'MD', label: 'Maryland' },
  { key: 'MA', label: 'Massachusetts' },
  { key: 'MI', label: 'Michigan' },
  { key: 'MN', label: 'Minnesota' },
  { key: 'MS', label: 'Mississippi' },
  { key: 'MO', label: 'Missouri' },
  { key: 'MT', label: 'Montana' },
  { key: 'NE', label: 'Nebraska' },
  { key: 'NV', label: 'Nevada' },
  { key: 'NH', label: 'New Hampshire' },
  { key: 'NJ', label: 'New Jersey' },
  { key: 'NM', label: 'New Mexico' },
  { key: 'NY', label: 'New York' },
  { key: 'NC', label: 'North Carolina' },
  { key: 'ND', label: 'North Dakota' },
  { key: 'OH', label: 'Ohio' },
  { key: 'OK', label: 'Oklahoma' },
  { key: 'OR', label: 'Oregon' },
  { key: 'PA', label: 'Pennsylvania' },
  { key: 'RI', label: 'Rhode Island' },
  { key: 'SC', label: 'South Carolina' },
  { key: 'SD', label: 'South Dakota' },
  { key: 'TN', label: 'Tennessee' },
  { key: 'TX', label: 'Texas' },
  { key: 'UT', label: 'Utah' },
  { key: 'VT', label: 'Vermont' },
  { key: 'VA', label: 'Virginia' },
  { key: 'WA', label: 'Washington' },
  { key: 'WV', label: 'West Virginia' },
  { key: 'WI', label: 'Wisconsin' },
  { key: 'WY', label: 'Wyoming' },
]

const CA_PROVINCES = [
  { key: 'AB', label: 'Alberta' },
  { key: 'BC', label: 'British Columbia' },
  { key: 'MB', label: 'Manitoba' },
  { key: 'NB', label: 'New Brunswick' },
  { key: 'NL', label: 'Newfoundland and Labrador' },
  { key: 'NS', label: 'Nova Scotia' },
  { key: 'NT', label: 'Northwest Territories' },
  { key: 'NU', label: 'Nunavut' },
  { key: 'ON', label: 'Ontario' },
  { key: 'PE', label: 'Prince Edward Island' },
  { key: 'QC', label: 'Quebec' },
  { key: 'SK', label: 'Saskatchewan' },
  { key: 'YT', label: 'Yukon' },
]

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Address saved!')
  }

  const regions = country === 'US' ? US_STATES : CA_PROVINCES

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField
          label="Recipient name"
          name="fullName"
          type="text"
          isRequired
        />
        <TextField
          label="Street address"
          name="street"
          type="text"
          isRequired
        />
        <TextField
          label="Apartment, suite, etc."
          name="street2"
          type="text"
        />
        <TextField
          label="City"
          name="city"
          type="text"
          isRequired
        />
        <Picker
          label="Country"
          selectedKey={country}
          onSelectionChange={(key) => setCountry(key)}
          isRequired
        >
          <Item key="US">United States</Item>
          <Item key="CA">Canada</Item>
        </Picker>
        <Picker label="State / Province / Territory" name="region" isRequired>
          <Item key="">Select region</Item>
          {regions.map((r) => (
            <Item key={r.key}>{r.label}</Item>
          ))}
        </Picker>
        <TextField
          label="Postal code"
          name="postalCode"
          type="text"
          isRequired
        />
        <Checkbox name="default">Use as default shipping address</Checkbox>
        <Button type="submit" variant="accent">
          Save address
        </Button>
      </Flex>
    </Form>
  )
}

export default ShippingAddressForm
