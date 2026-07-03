import { useState } from 'react'
import { Button, Select, Stack, TextInput } from '@mantine/core'

function BillingInfoForm() {
  const [country, setCountry] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-billing-name"
          name="cardName"
          label="Name on card"
          type="text"
          required
        />
        <TextInput
          id="mantine-billing-card-number"
          name="cardNumber"
          label="Card number"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
        />
        <TextInput
          id="mantine-billing-expiration"
          name="expiration"
          label="Expiration date"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          required
        />
        <TextInput
          id="mantine-billing-cvc"
          name="cvc"
          label="Security code"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
        />
        <TextInput
          id="mantine-billing-address"
          name="address"
          label="Billing address"
          type="text"
          required
        />
        <Select
          id="mantine-billing-country"
          name="country"
          label="Country"
          placeholder="Select country"
          value={country}
          onChange={setCountry}
          data={[
            { value: 'US', label: 'United States' },
            { value: 'CA', label: 'Canada' },
          ]}
          required
        />
        <Button type="submit">Save billing details</Button>
      </Stack>
    </form>
  )
}

export default BillingInfoForm
