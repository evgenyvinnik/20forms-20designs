import { useState } from 'react'
import {
  Input,
  Select,
  Option,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react'

const COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
]

const US_STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const CANADIAN_PROVINCES = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
]

function ShippingAddressForm() {
  const [country, setCountry] = useState('US')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Shipping address saved!')
  }

  const regions = country === 'US' ? US_STATES : CANADIAN_PROVINCES
  const postalPattern =
    country === 'US'
      ? '[0-9]{5}(-[0-9]{4})?'
      : '[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium dark:text-white"
        >
          Recipient name
        </Typography>
        <Input
          id="material-tailwind-shipping-address-fullname"
          name="fullName"
          type="text"
          required
          placeholder="Enter recipient name"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium dark:text-white"
        >
          Street address
        </Typography>
        <Input
          id="material-tailwind-shipping-address-street"
          name="street"
          type="text"
          required
          placeholder="Enter street address"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium dark:text-white"
        >
          Apartment, suite, etc.
        </Typography>
        <Input
          id="material-tailwind-shipping-address-street2"
          name="street2"
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium dark:text-white"
        >
          City
        </Typography>
        <Input
          id="material-tailwind-shipping-address-city"
          name="city"
          type="text"
          required
          placeholder="Enter city"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium dark:text-white"
        >
          Country
        </Typography>
        <Select
          name="country"
          value={country}
          onChange={(val) => setCountry(val)}
          label="Select country"
          className="dark:text-white"
        >
          {COUNTRIES.map((c) => (
            <Option key={c.code} value={c.code}>
              {c.name}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium dark:text-white"
        >
          State / Province / Territory
        </Typography>
        <Select
          name="state"
          label="Select an option"
          className="dark:text-white"
        >
          {regions.map((region) => (
            <Option key={region} value={region}>
              {region}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-1 font-medium dark:text-white"
        >
          Postal code
        </Typography>
        <Input
          id="material-tailwind-shipping-address-postalcode"
          name="postalCode"
          type="text"
          required
          pattern={postalPattern}
          placeholder="Enter postal code"
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:!border-t-gray-600 dark:focus:!border-t-gray-400 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <Checkbox
        name="default"
        label={
          <Typography
            variant="small"
            color="gray"
            className="font-normal dark:text-gray-300"
          >
            Use as default shipping address
          </Typography>
        }
        containerProps={{ className: '-ml-2.5' }}
      />
      <Button type="submit" color="blue">
        Save address
      </Button>
    </form>
  )
}

export default ShippingAddressForm
