import { Button, Stack, TextInput, Select } from '@mantine/core'

function BillingInfoForm() {
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
          maxLength={19}
          required
        />
        <TextInput
          id="mantine-billing-expiration"
          name="expiration"
          label="Expiration date"
          placeholder="MM/YY"
          inputMode="numeric"
          required
        />
        <TextInput
          id="mantine-billing-cvc"
          name="cvc"
          label="Security code"
          inputMode="numeric"
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
