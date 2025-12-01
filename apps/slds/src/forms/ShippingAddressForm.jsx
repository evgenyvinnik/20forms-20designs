import { useState, useMemo } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Combobox from '@salesforce/design-system-react/components/combobox'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'

const COUNTRIES = [
  { id: 'us', label: 'United States' },
  { id: 'ca', label: 'Canada' },
]

const US_STATES = [
  { id: 'al', label: 'Alabama' },
  { id: 'ak', label: 'Alaska' },
  { id: 'az', label: 'Arizona' },
  { id: 'ca', label: 'California' },
  { id: 'co', label: 'Colorado' },
  { id: 'ny', label: 'New York' },
  { id: 'tx', label: 'Texas' },
]

const CANADIAN_PROVINCES = [
  { id: 'ab', label: 'Alberta' },
  { id: 'bc', label: 'British Columbia' },
  { id: 'on', label: 'Ontario' },
  { id: 'qc', label: 'Quebec' },
]

function ShippingAddressForm({ theme }) {
  const [fullName, setFullName] = useState('')
  const [street, setStreet] = useState('')
  const [street2, setStreet2] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState([])
  const [region, setRegion] = useState([])
  const [postalCode, setPostalCode] = useState('')
  const [isDefault, setIsDefault] = useState(false)

  const regionOptions = useMemo(() => {
    if (country.length === 0) return []
    return country[0].id === 'us' ? US_STATES : CANADIAN_PROVINCES
  }, [country])

  const postalCodePattern = useMemo(() => {
    if (country.length === 0) return undefined
    return country[0].id === 'us'
      ? '[0-9]{5}(-[0-9]{4})?'
      : '[A-Za-z][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]'
  }, [country])

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Address saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-shipping-fullname"
          label="Recipient name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-shipping-street"
          label="Street address"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-shipping-street2"
          label="Apartment, suite, etc."
          value={street2}
          onChange={(e) => setStreet2(e.target.value)}
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-shipping-city"
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Combobox
          id="slds-shipping-country"
          labels={{ label: 'Country' }}
          options={COUNTRIES}
          selection={country}
          onSelect={(event, data) => {
            setCountry(data.selection)
            setRegion([])
          }}
          variant="readonly"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Combobox
          id="slds-shipping-region"
          labels={{ label: 'State / Province / Territory' }}
          options={regionOptions}
          selection={region}
          onSelect={(event, data) => setRegion(data.selection)}
          variant="readonly"
          disabled={country.length === 0}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-shipping-postalcode"
          label="Postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          pattern={postalCodePattern}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Checkbox
          id="slds-shipping-default"
          labels={{ label: 'Use as default shipping address' }}
          checked={isDefault}
          onChange={() => setIsDefault(!isDefault)}
        />
      </div>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Save address" />
      </div>
    </form>
  )
}

export default ShippingAddressForm
