import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiButton,
} from '@elastic/eui'

const countryOptions = [
  { value: '', text: 'Select country' },
  { value: 'US', text: 'United States' },
  { value: 'CA', text: 'Canada' },
]

function BillingInfoForm() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Name on card">
        <EuiFieldText
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Card number">
        <EuiFieldText
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength={19}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Expiration date">
        <EuiFieldText
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          placeholder="MM/YY"
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Security code">
        <EuiFieldText
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          maxLength={4}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Billing address">
        <EuiFieldText
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Country">
        <EuiSelect
          options={countryOptions}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Save billing details
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default BillingInfoForm
