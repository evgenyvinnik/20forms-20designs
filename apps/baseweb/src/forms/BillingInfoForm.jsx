import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Select } from 'baseui/select'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

function BillingInfoForm() {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvc, setCvc] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState([])

  const countryOptions = [
    { label: 'United States', id: 'US' },
    { label: 'Canada', id: 'CA' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale200">
        <FormControl label="Name on card">
          <Input
            id="baseweb-billing-name"
            name="cardName"
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Card number">
          <Input
            id="baseweb-billing-card-number"
            name="cardNumber"
            type="text"
            inputMode="numeric"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={19}
            required
          />
        </FormControl>
        <FormControl label="Expiration date">
          <Input
            id="baseweb-billing-expiration"
            name="expiration"
            type="text"
            placeholder="MM/YY"
            inputMode="numeric"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Security code">
          <Input
            id="baseweb-billing-cvc"
            name="cvc"
            type="text"
            inputMode="numeric"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            maxLength={4}
            required
          />
        </FormControl>
        <FormControl label="Billing address">
          <Input
            id="baseweb-billing-address"
            name="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Country">
          <Select
            id="baseweb-billing-country"
            options={countryOptions}
            value={country}
            placeholder="Select country"
            onChange={(params) => setCountry(params.value)}
            required
          />
        </FormControl>
        <Button type="submit">Save billing details</Button>
      </Block>
    </form>
  )
}

export default BillingInfoForm
