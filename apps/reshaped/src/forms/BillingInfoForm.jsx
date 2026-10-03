import { Button, FormControl, Select, TextField, View } from 'reshaped'

function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Name on card</FormControl.Label>
          <TextField
            name="cardName"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Card number</FormControl.Label>
          <TextField
            name="cardNumber"
            inputAttributes={{
              type: 'text',
              maxLength: 19,
              pattern: '[0-9]{13,19}',
              inputMode: 'numeric',
              required: true,
            }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Expiration date</FormControl.Label>
          <TextField
            name="expiration"
            placeholder="MM/YY"
            inputAttributes={{
              type: 'text',
              pattern: '^(0[1-9]|1[0-2])\\/\\d{2}$',
              inputMode: 'numeric',
              required: true,
            }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Security code</FormControl.Label>
          <TextField
            name="cvc"
            inputAttributes={{
              type: 'text',
              maxLength: 4,
              pattern: '[0-9]{3,4}',
              inputMode: 'numeric',
              required: true,
            }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Billing address</FormControl.Label>
          <TextField
            name="address"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Country</FormControl.Label>
          <Select
            name="country"
            placeholder="Select country"
            inputAttributes={{ required: true }}
          >
            <option value="US">United States</option>
            <option value="CA">Canada</option>
          </Select>
        </FormControl>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Save billing details
          </Button>
        </View>
      </View>
    </form>
  )
}

export default BillingInfoForm
