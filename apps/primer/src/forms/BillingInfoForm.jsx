import { Box, FormControl, TextInput, Select, Button } from '@primer/react'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing info saved!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>Name on card</FormControl.Label>
        <TextInput
          id="primer-billing-cardname"
          name="cardName"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Card number</FormControl.Label>
        <TextInput
          id="primer-billing-cardnumber"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Expiration date</FormControl.Label>
        <TextInput
          id="primer-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
          inputMode="numeric"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Security code</FormControl.Label>
        <TextInput
          id="primer-billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Billing address</FormControl.Label>
        <TextInput
          id="primer-billing-address"
          name="address"
          type="text"
          block
        />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Country</FormControl.Label>
        <Select id="primer-billing-country" name="country" block>
          <Select.Option value="">Select country</Select.Option>
          <Select.Option value="US">United States</Select.Option>
          <Select.Option value="CA">Canada</Select.Option>
        </Select>
      </FormControl>

      <Button type="submit" variant="primary" block>
        Save billing details
      </Button>
    </Box>
  )
}

export default BillingInfoForm
