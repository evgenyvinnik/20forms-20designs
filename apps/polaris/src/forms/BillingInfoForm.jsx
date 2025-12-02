import { useState, useCallback } from 'react'
import { FormLayout, TextField, Select, Button } from '@shopify/polaris'

function BillingInfoForm() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')

  const countryOptions = [
    { label: 'Select country', value: '' },
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Name on card"
          type="text"
          value={cardName}
          onChange={setCardName}
          autoComplete="cc-name"
          requiredIndicator
        />
        <TextField
          label="Card number"
          type="text"
          value={cardNumber}
          onChange={setCardNumber}
          autoComplete="cc-number"
          inputMode="numeric"
          maxLength={19}
          requiredIndicator
        />
        <FormLayout.Group>
          <TextField
            label="Expiration date"
            type="text"
            value={expiration}
            onChange={setExpiration}
            autoComplete="cc-exp"
            placeholder="MM/YY"
            inputMode="numeric"
            requiredIndicator
          />
          <TextField
            label="Security code"
            type="text"
            value={cvc}
            onChange={setCvc}
            autoComplete="cc-csc"
            inputMode="numeric"
            maxLength={4}
            requiredIndicator
          />
        </FormLayout.Group>
        <TextField
          label="Billing address"
          type="text"
          value={address}
          onChange={setAddress}
          autoComplete="street-address"
          requiredIndicator
        />
        <Select
          label="Country"
          options={countryOptions}
          value={country}
          onChange={setCountry}
          requiredIndicator
        />
        <Button submit variant="primary">
          Save billing details
        </Button>
      </FormLayout>
    </form>
  )
}

export default BillingInfoForm
