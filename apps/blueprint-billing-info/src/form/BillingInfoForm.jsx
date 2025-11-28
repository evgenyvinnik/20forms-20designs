import {
  Button,
  FormGroup,
  HTMLSelect,
  InputGroup,
} from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup label="Name on card" labelFor="blueprint-billing-name">
        <InputGroup
          id="blueprint-billing-name"
          name="cardName"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Card number"
        labelFor="blueprint-billing-card-number"
      >
        <InputGroup
          id="blueprint-billing-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Expiration date"
        labelFor="blueprint-billing-expiration"
      >
        <InputGroup
          id="blueprint-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          pattern="^(0[1-9]|1[0-2])\\/\\d{2}$"
          inputMode="numeric"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Security code" labelFor="blueprint-billing-cvc">
        <InputGroup
          id="blueprint-billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Billing address"
        labelFor="blueprint-billing-address"
      >
        <InputGroup
          id="blueprint-billing-address"
          name="address"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Country" labelFor="blueprint-billing-country">
        <HTMLSelect
          id="blueprint-billing-country"
          name="country"
          required
          fill
          options={[
            { label: 'Select country', value: '' },
            { label: 'United States', value: 'US' },
            { label: 'Canada', value: 'CA' },
          ]}
        />
      </FormGroup>
      <Button intent="primary" type="submit">
        Save billing details
      </Button>
    </form>
  )
}

export default BillingInfoForm
