import { Button, TextInput } from '@gravity-ui/uikit'

import { SingleSelectField, formStackStyle } from './common.jsx'

const countryOptions = [
  { value: 'US', content: 'United States' },
  { value: 'CA', content: 'Canada' },
]

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-billing-name"
        label="Name on card"
        name="cardName"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-billing-card-number"
        label="Card number"
        name="cardNumber"
        controlProps={{ required: true, inputMode: 'numeric', pattern: '[0-9]{13,19}', maxLength: 19 }}
      />
      <TextInput
        id="gravity-billing-expiration"
        label="Expiration date"
        name="expiration"
        placeholder="MM/YY"
        controlProps={{
          required: true,
          inputMode: 'numeric',
          pattern: '^(0[1-9]|1[0-2])\\/\\d{2}$',
        }}
      />
      <TextInput
        id="gravity-billing-cvc"
        label="Security code"
        name="cvc"
        controlProps={{ required: true, inputMode: 'numeric', pattern: '[0-9]{3,4}', maxLength: 4 }}
      />
      <TextInput
        id="gravity-billing-address"
        label="Billing address"
        name="address"
        controlProps={{ required: true }}
      />
      <SingleSelectField
        id="gravity-billing-country"
        label="Country"
        name="country"
        options={countryOptions}
        placeholder="Select country"
      />
      <Button view="action" type="submit">
        Save billing details
      </Button>
    </form>
  )
}

export default BillingInfoForm
