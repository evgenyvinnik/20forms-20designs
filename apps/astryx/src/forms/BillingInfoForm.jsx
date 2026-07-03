import { useState } from 'react'
import { TextInput, Selector, Button } from '@astryxdesign/core'

function BillingInfoForm() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  const countryOptions = [
    { value: '', label: 'Select country' },
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
  ]

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-billing-name"
        name="cardName"
        type="text"
        label="Name on card"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        required
      />

      <TextInput
        id="astryx-billing-card-number"
        name="cardNumber"
        type="text"
        label="Card number"
        inputMode="numeric"
        pattern="[0-9]{13,19}"
        maxLength={19}
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />

      <TextInput
        id="astryx-billing-expiration"
        name="expiration"
        type="text"
        label="Expiration date"
        placeholder="MM/YY"
        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
        inputMode="numeric"
        value={expiration}
        onChange={(e) => setExpiration(e.target.value)}
        required
      />

      <TextInput
        id="astryx-billing-cvc"
        name="cvc"
        type="text"
        label="Security code"
        inputMode="numeric"
        pattern="[0-9]{3,4}"
        maxLength={4}
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
        required
      />

      <TextInput
        id="astryx-billing-address"
        name="address"
        type="text"
        label="Billing address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <Selector
        id="astryx-billing-country"
        name="country"
        label="Country"
        value={country}
        onChange={(val) => setCountry(val)}
        options={countryOptions}
        placeholder="Select country"
      />

      <Button type="submit" variant="primary">
        Save billing details
      </Button>
    </form>
  )
}

export default BillingInfoForm
