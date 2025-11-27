import { Button, Pane, SelectField, TextInputField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField
        id="evergreen-billing-name"
        label="Name on card"
        name="cardName"
        type="text"
        required
      />
      <TextInputField
        id="evergreen-billing-card-number"
        label="Card number"
        name="cardNumber"
        type="text"
        inputMode="numeric"
        pattern="[0-9]{13,19}"
        maxLength={19}
        required
      />
      <TextInputField
        id="evergreen-billing-expiration"
        label="Expiration date"
        name="expiration"
        type="text"
        placeholder="MM/YY"
        pattern="^(0[1-9]|1[0-2])\\/\\d{2}$"
        inputMode="numeric"
        required
      />
      <TextInputField
        id="evergreen-billing-cvc"
        label="Security code"
        name="cvc"
        type="text"
        inputMode="numeric"
        pattern="[0-9]{3,4}"
        maxLength={4}
        required
      />
      <TextInputField
        id="evergreen-billing-address"
        label="Billing address"
        name="address"
        type="text"
        required
      />
      <SelectField
        id="evergreen-billing-country"
        label="Country"
        name="country"
        defaultValue=""
        required
      >
        <option value="">Select country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
      </SelectField>
      <Button appearance="primary" type="submit">
        Save billing details
      </Button>
    </Pane>
  )
}

export default BillingInfoForm
