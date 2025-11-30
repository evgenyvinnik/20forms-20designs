import { useState, useCallback } from 'react'
import {
  Box,
  Stack,
  TextField,
  Dropdown,
  Button,
} from 'braid-design-system'

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
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-billing-name"
          label="Name on card"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />

        <TextField
          id="braid-billing-card-number"
          label="Card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          inputMode="numeric"
          required
        />

        <TextField
          id="braid-billing-expiration"
          label="Expiration date"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          placeholder="MM/YY"
          inputMode="numeric"
          required
        />

        <TextField
          id="braid-billing-cvc"
          label="Security code"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          inputMode="numeric"
          required
        />

        <TextField
          id="braid-billing-address"
          label="Billing address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <Dropdown
          id="braid-billing-country"
          label="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Select country"
        >
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </Dropdown>

        <Box>
          <Button type="submit">Save billing details</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default BillingInfoForm
