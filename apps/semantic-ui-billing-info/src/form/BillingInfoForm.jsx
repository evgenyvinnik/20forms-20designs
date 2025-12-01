import { Form, Button, Select } from 'semantic-ui-react'

const countryOptions = [
  { key: '', value: '', text: 'Select country' },
  { key: 'us', value: 'US', text: 'United States' },
  { key: 'ca', value: 'CA', text: 'Canada' },
]

function BillingInfoForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing info saved!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-billing-info-cardname"
        name="cardName"
        label="Name on card"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-billing-info-cardnumber"
        name="cardNumber"
        label="Card number"
        type="text"
        required
        maxLength={19}
        pattern="[0-9]{13,19}"
        inputMode="numeric"
      />
      <Form.Input
        id="semantic-ui-billing-info-expiration"
        name="expiration"
        label="Expiration date"
        type="text"
        required
        placeholder="MM/YY"
        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
        inputMode="numeric"
      />
      <Form.Input
        id="semantic-ui-billing-info-cvc"
        name="cvc"
        label="Security code"
        type="text"
        required
        maxLength={4}
        pattern="[0-9]{3,4}"
        inputMode="numeric"
      />
      <Form.Input
        id="semantic-ui-billing-info-address"
        name="address"
        label="Billing address"
        type="text"
        required
      />
      <Form.Field required>
        <label>Country</label>
        <Select
          name="country"
          options={countryOptions}
          placeholder="Select country"
          required
        />
      </Form.Field>
      <Button type="submit" primary>
        Save billing details
      </Button>
    </Form>
  )
}

export default BillingInfoForm
