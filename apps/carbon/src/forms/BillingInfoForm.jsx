import { Form, TextInput, Select, SelectItem, Button, Stack } from '@carbon/react'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-billing-name"
          name="cardName"
          labelText="Name on card"
          required
        />
        <TextInput
          id="carbon-billing-card-number"
          name="cardNumber"
          labelText="Card number"
          maxLength={19}
          required
        />
        <TextInput
          id="carbon-billing-expiration"
          name="expiration"
          labelText="Expiration date"
          placeholder="MM/YY"
          required
        />
        <TextInput
          id="carbon-billing-cvc"
          name="cvc"
          labelText="Security code"
          maxLength={4}
          required
        />
        <TextInput
          id="carbon-billing-address"
          name="address"
          labelText="Billing address"
          required
        />
        <Select
          id="carbon-billing-country"
          name="country"
          labelText="Country"
          defaultValue=""
          required
        >
          <SelectItem value="" text="Select country" />
          <SelectItem value="US" text="United States" />
          <SelectItem value="CA" text="Canada" />
        </Select>
        <Button type="submit">Save billing details</Button>
      </Stack>
    </Form>
  )
}

export default BillingInfoForm
