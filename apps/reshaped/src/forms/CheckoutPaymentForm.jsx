import { Button, FormControl, Select, TextField, View } from 'reshaped'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Email for receipt</FormControl.Label>
          <TextField
            name="email"
            inputAttributes={{ type: 'email', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Shipping method</FormControl.Label>
          <Select
            name="shippingMethod"
            defaultValue="standard"
            inputAttributes={{ required: true }}
          >
            <option value="standard">Standard Shipping</option>
            <option value="express">Express Shipping</option>
            <option value="overnight">Overnight Delivery</option>
          </Select>
        </FormControl>
        <FormControl required>
          <FormControl.Label>Card number</FormControl.Label>
          <TextField
            name="cardNumber"
            inputAttributes={{ type: 'text', maxLength: 19, required: true }}
          />
        </FormControl>
        <View direction="row" gap={4}>
          <View.Item grow>
            <FormControl required>
              <FormControl.Label>Expiration</FormControl.Label>
              <TextField
                name="expiration"
                placeholder="MM/YY"
                inputAttributes={{ type: 'text', required: true }}
              />
            </FormControl>
          </View.Item>
          <View.Item grow>
            <FormControl required>
              <FormControl.Label>CVC</FormControl.Label>
              <TextField
                name="cvc"
                inputAttributes={{ type: 'text', maxLength: 4, required: true }}
              />
            </FormControl>
          </View.Item>
        </View>
        <FormControl>
          <FormControl.Label>Promo code</FormControl.Label>
          <TextField
            name="promoCode"
            inputAttributes={{ type: 'text', pattern: '[A-Za-z0-9]{3,15}' }}
          />
        </FormControl>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Place order
          </Button>
        </View>
      </View>
    </form>
  )
}

export default CheckoutPaymentForm
