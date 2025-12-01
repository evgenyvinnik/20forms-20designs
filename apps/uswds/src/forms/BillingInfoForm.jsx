import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Button,
} from '@trussworks/react-uswds'

function BillingInfoForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-billing-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Name on card
        </Label>
        <TextInput
          id="uswds-billing-name"
          name="cardName"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-billing-card-number"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Card number
        </Label>
        <TextInput
          id="uswds-billing-card-number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{13,19}"
          maxLength={19}
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-billing-expiration"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Expiration date
        </Label>
        <TextInput
          id="uswds-billing-expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          inputMode="numeric"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-billing-cvc"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Security code
        </Label>
        <TextInput
          id="uswds-billing-cvc"
          name="cvc"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{3,4}"
          maxLength={4}
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-billing-address"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Billing address
        </Label>
        <TextInput
          id="uswds-billing-address"
          name="address"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-billing-country"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Country
        </Label>
        <Select
          id="uswds-billing-country"
          name="country"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="">Select country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
        </Select>
      </FormGroup>
      <Button type="submit">Save billing details</Button>
    </Form>
  )
}

export default BillingInfoForm
