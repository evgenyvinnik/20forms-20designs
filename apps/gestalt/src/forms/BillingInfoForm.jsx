import { useState } from 'react'
import { Box, Button, Flex, SelectList, TextField } from 'gestalt'

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

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-billing-name"
          label="Name on card"
          onChange={({ value }) => setCardName(value)}
          type="text"
          value={cardName}
        />
        <TextField
          id="gestalt-billing-card-number"
          label="Card number"
          onChange={({ value }) => setCardNumber(value)}
          type="text"
          value={cardNumber}
        />
        <TextField
          id="gestalt-billing-expiration"
          label="Expiration date"
          onChange={({ value }) => setExpiration(value)}
          placeholder="MM/YY"
          type="text"
          value={expiration}
        />
        <TextField
          id="gestalt-billing-cvc"
          label="Security code"
          onChange={({ value }) => setCvc(value)}
          type="text"
          value={cvc}
        />
        <TextField
          id="gestalt-billing-address"
          label="Billing address"
          onChange={({ value }) => setAddress(value)}
          type="text"
          value={address}
        />
        <SelectList
          id="gestalt-billing-country"
          label="Country"
          onChange={({ value }) => setCountry(value)}

          value={country}
        >
          {[
            { label: 'United States', value: 'US' },
            { label: 'Canada', value: 'CA' },
          ].map(({ label, value }) => (
            <SelectList.Option key={value} label={label} value={value} />
          ))}
        </SelectList>
        <Box>
          <Button color="red" text="Save billing details" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default BillingInfoForm
