import { Box, Button, Form, FormField, Select, TextInput } from 'grommet'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Name on card"
        name="cardName"
        htmlFor="grommet-billing-name"
        required
      >
        <TextInput id="grommet-billing-name" name="cardName" type="text" />
      </FormField>
      <FormField
        label="Card number"
        name="cardNumber"
        htmlFor="grommet-billing-card-number"
        required
      >
        <TextInput
          id="grommet-billing-card-number"
          name="cardNumber"
          type="text"
          maxLength={19}
        />
      </FormField>
      <FormField
        label="Expiration date"
        name="expiration"
        htmlFor="grommet-billing-expiration"
        required
      >
        <TextInput
          id="grommet-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
        />
      </FormField>
      <FormField
        label="Security code"
        name="cvc"
        htmlFor="grommet-billing-cvc"
        required
      >
        <TextInput
          id="grommet-billing-cvc"
          name="cvc"
          type="text"
          maxLength={4}
        />
      </FormField>
      <FormField
        label="Billing address"
        name="address"
        htmlFor="grommet-billing-address"
        required
      >
        <TextInput id="grommet-billing-address" name="address" type="text" />
      </FormField>
      <FormField
        label="Country"
        name="country"
        htmlFor="grommet-billing-country"
        required
      >
        <Select
          id="grommet-billing-country"
          name="country"
          options={['United States', 'Canada']}
          placeholder="Select country"
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Save billing details" />
      </Box>
    </Form>
  )
}

export default BillingInfoForm
