import { Button, FormControl, TextField, View } from 'reshaped'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Order number</FormControl.Label>
          <TextField
            name="orderNumber"
            inputAttributes={{
              type: 'text',
              pattern: '[A-Za-z0-9-]{6,20}',
              required: true,
            }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Email address</FormControl.Label>
          <TextField
            name="email"
            inputAttributes={{ type: 'email', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Postal code</FormControl.Label>
          <TextField
            name="postalCode"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Find order
          </Button>
        </View>
      </View>
    </form>
  )
}

export default OrderTrackingForm
