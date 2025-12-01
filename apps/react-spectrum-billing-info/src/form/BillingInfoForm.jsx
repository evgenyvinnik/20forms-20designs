import {
  Form,
  TextField,
  Picker,
  Item,
  Button,
  Flex,
} from '@adobe/react-spectrum'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField
          label="Name on card"
          name="cardName"
          type="text"
          isRequired
        />
        <TextField
          label="Card number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          maxLength={19}
          isRequired
        />
        <TextField
          label="Expiration date"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          inputMode="numeric"
          isRequired
        />
        <TextField
          label="Security code"
          name="cvc"
          type="text"
          inputMode="numeric"
          maxLength={4}
          isRequired
        />
        <TextField
          label="Billing address"
          name="address"
          type="text"
          isRequired
        />
        <Picker label="Country" name="country" isRequired>
          <Item key="">Select country</Item>
          <Item key="US">United States</Item>
          <Item key="CA">Canada</Item>
        </Picker>
        <Button type="submit" variant="accent">
          Save billing details
        </Button>
      </Flex>
    </Form>
  )
}

export default BillingInfoForm
