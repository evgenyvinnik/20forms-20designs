import { useState } from 'react'
import { Form, Button, Checkbox, Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'us', value: 'US', text: 'United States' },
  { key: 'ca', value: 'CA', text: 'Canada' },
]

const usStates = [
  { key: 'AL', value: 'AL', text: 'Alabama' },
  { key: 'AK', value: 'AK', text: 'Alaska' },
  { key: 'AZ', value: 'AZ', text: 'Arizona' },
  { key: 'AR', value: 'AR', text: 'Arkansas' },
  { key: 'CA', value: 'CA', text: 'California' },
  { key: 'CO', value: 'CO', text: 'Colorado' },
  { key: 'CT', value: 'CT', text: 'Connecticut' },
  { key: 'DE', value: 'DE', text: 'Delaware' },
  { key: 'FL', value: 'FL', text: 'Florida' },
  { key: 'GA', value: 'GA', text: 'Georgia' },
  { key: 'HI', value: 'HI', text: 'Hawaii' },
  { key: 'ID', value: 'ID', text: 'Idaho' },
  { key: 'IL', value: 'IL', text: 'Illinois' },
  { key: 'IN', value: 'IN', text: 'Indiana' },
  { key: 'IA', value: 'IA', text: 'Iowa' },
  { key: 'KS', value: 'KS', text: 'Kansas' },
  { key: 'KY', value: 'KY', text: 'Kentucky' },
  { key: 'LA', value: 'LA', text: 'Louisiana' },
  { key: 'ME', value: 'ME', text: 'Maine' },
  { key: 'MD', value: 'MD', text: 'Maryland' },
  { key: 'MA', value: 'MA', text: 'Massachusetts' },
  { key: 'MI', value: 'MI', text: 'Michigan' },
  { key: 'MN', value: 'MN', text: 'Minnesota' },
  { key: 'MS', value: 'MS', text: 'Mississippi' },
  { key: 'MO', value: 'MO', text: 'Missouri' },
  { key: 'MT', value: 'MT', text: 'Montana' },
  { key: 'NE', value: 'NE', text: 'Nebraska' },
  { key: 'NV', value: 'NV', text: 'Nevada' },
  { key: 'NH', value: 'NH', text: 'New Hampshire' },
  { key: 'NJ', value: 'NJ', text: 'New Jersey' },
  { key: 'NM', value: 'NM', text: 'New Mexico' },
  { key: 'NY', value: 'NY', text: 'New York' },
  { key: 'NC', value: 'NC', text: 'North Carolina' },
  { key: 'ND', value: 'ND', text: 'North Dakota' },
  { key: 'OH', value: 'OH', text: 'Ohio' },
  { key: 'OK', value: 'OK', text: 'Oklahoma' },
  { key: 'OR', value: 'OR', text: 'Oregon' },
  { key: 'PA', value: 'PA', text: 'Pennsylvania' },
  { key: 'RI', value: 'RI', text: 'Rhode Island' },
  { key: 'SC', value: 'SC', text: 'South Carolina' },
  { key: 'SD', value: 'SD', text: 'South Dakota' },
  { key: 'TN', value: 'TN', text: 'Tennessee' },
  { key: 'TX', value: 'TX', text: 'Texas' },
  { key: 'UT', value: 'UT', text: 'Utah' },
  { key: 'VT', value: 'VT', text: 'Vermont' },
  { key: 'VA', value: 'VA', text: 'Virginia' },
  { key: 'WA', value: 'WA', text: 'Washington' },
  { key: 'WV', value: 'WV', text: 'West Virginia' },
  { key: 'WI', value: 'WI', text: 'Wisconsin' },
  { key: 'WY', value: 'WY', text: 'Wyoming' },
]

const caProvinces = [
  { key: 'AB', value: 'AB', text: 'Alberta' },
  { key: 'BC', value: 'BC', text: 'British Columbia' },
  { key: 'MB', value: 'MB', text: 'Manitoba' },
  { key: 'NB', value: 'NB', text: 'New Brunswick' },
  { key: 'NL', value: 'NL', text: 'Newfoundland and Labrador' },
  { key: 'NS', value: 'NS', text: 'Nova Scotia' },
  { key: 'ON', value: 'ON', text: 'Ontario' },
  { key: 'PE', value: 'PE', text: 'Prince Edward Island' },
  { key: 'QC', value: 'QC', text: 'Quebec' },
  { key: 'SK', value: 'SK', text: 'Saskatchewan' },
  { key: 'NT', value: 'NT', text: 'Northwest Territories' },
  { key: 'NU', value: 'NU', text: 'Nunavut' },
  { key: 'YT', value: 'YT', text: 'Yukon' },
]

function ShippingAddressForm({ inverted }) {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Address saved!')
  }

  const regionOptions = country === 'US' ? usStates : caProvinces
  const postalPattern = country === 'US' ? '[0-9]{5}(-[0-9]{4})?' : '[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]'

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-shipping-address-fullname"
        name="fullName"
        label="Recipient name"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-shipping-address-street"
        name="street"
        label="Street address"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-shipping-address-street2"
        name="street2"
        label="Apartment, suite, etc."
        type="text"
      />
      <Form.Input
        id="semantic-ui-shipping-address-city"
        name="city"
        label="City"
        type="text"
        required
      />
      <Form.Field required>
        <label>Country</label>
        <Select
          name="country"
          options={countryOptions}
          value={country}
          onChange={(e, { value }) => setCountry(value)}
          required
        />
      </Form.Field>
      <Form.Field required>
        <label>State / Province / Territory</label>
        <Select
          name="region"
          options={regionOptions}
          placeholder="Select region"
          required
        />
      </Form.Field>
      <Form.Input
        id="semantic-ui-shipping-address-postal"
        name="postalCode"
        label="Postal code"
        type="text"
        required
        pattern={postalPattern}
      />
      <Form.Field>
        <Checkbox
          name="default"
          label="Use as default shipping address"
        />
      </Form.Field>
      <Button type="submit" primary>
        Save address
      </Button>
    </Form>
  )
}

export default ShippingAddressForm
