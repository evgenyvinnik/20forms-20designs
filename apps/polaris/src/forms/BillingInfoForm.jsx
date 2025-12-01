import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Select,
  Checkbox,
  Button,
} from '@shopify/polaris'

function BillingInfoForm() {
  const [cardholderName, setCardholderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [billingAddress, setBillingAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [saveCard, setSaveCard] = useState(false)

  const countryOptions = [
    { label: 'Select country', value: '' },
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Australia', value: 'au' },
    { label: 'Germany', value: 'de' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Billing information saved!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Cardholder name"
          type="text"
          value={cardholderName}
          onChange={setCardholderName}
          autoComplete="cc-name"
          requiredIndicator
        />
        <TextField
          label="Card number"
          type="text"
          value={cardNumber}
          onChange={setCardNumber}
          autoComplete="cc-number"
          requiredIndicator
        />
        <FormLayout.Group>
          <TextField
            label="Expiry date"
            type="text"
            value={expiryDate}
            onChange={setExpiryDate}
            autoComplete="cc-exp"
            placeholder="MM/YY"
            requiredIndicator
          />
          <TextField
            label="CVV"
            type="text"
            value={cvv}
            onChange={setCvv}
            autoComplete="cc-csc"
            requiredIndicator
          />
        </FormLayout.Group>
        <TextField
          label="Billing address"
          type="text"
          value={billingAddress}
          onChange={setBillingAddress}
          autoComplete="street-address"
          requiredIndicator
        />
        <FormLayout.Group>
          <TextField
            label="City"
            type="text"
            value={city}
            onChange={setCity}
            autoComplete="address-level2"
            requiredIndicator
          />
          <Select
            label="Country"
            options={countryOptions}
            value={country}
            onChange={setCountry}
            requiredIndicator
          />
        </FormLayout.Group>
        <Checkbox
          label="Save card for future purchases"
          checked={saveCard}
          onChange={setSaveCard}
        />
        <Button submit variant="primary">
          Save billing info
        </Button>
      </FormLayout>
    </form>
  )
}

export default BillingInfoForm
