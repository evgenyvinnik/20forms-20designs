import {
  Button,
  ButtonGroup,
  Form,
  Picker,
  PickerItem,
  TextField,
} from '@react-spectrum/s2'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Name on card" name="cardName" isRequired />
      <TextField
        label="Card number"
        name="cardNumber"
        maxLength={19}
        pattern="[0-9]{13,19}"
        inputMode="numeric"
        isRequired
      />
      <TextField
        label="Expiration date"
        name="expiration"
        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
        inputMode="numeric"
        placeholder="MM/YY"
        isRequired
      />
      <TextField
        label="Security code"
        name="cvc"
        maxLength={4}
        pattern="[0-9]{3,4}"
        inputMode="numeric"
        isRequired
      />
      <TextField label="Billing address" name="address" isRequired />
      <Picker
        label="Country"
        name="country"
        placeholder="Select country"
        isRequired
      >
        <PickerItem id="US">United States</PickerItem>
        <PickerItem id="CA">Canada</PickerItem>
      </Picker>
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Save billing details
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default BillingInfoForm
