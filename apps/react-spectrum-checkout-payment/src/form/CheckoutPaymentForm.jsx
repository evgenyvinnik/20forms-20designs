import {
  Form,
  TextField,
  Picker,
  Item,
  Button,
  Flex,
} from '@adobe/react-spectrum'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order placed!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField
          label="Email for receipt"
          name="email"
          type="email"
          isRequired
        />
        <Picker label="Shipping method" name="shippingMethod" isRequired>
          <Item key="">Select shipping</Item>
          <Item key="standard">Standard</Item>
          <Item key="express">Express</Item>
          <Item key="overnight">Overnight</Item>
        </Picker>
        <TextField
          label="Card number"
          name="cardNumber"
          type="text"
          inputMode="numeric"
          maxLength={19}
          isRequired
        />
        <TextField
          label="Expiration"
          name="expiration"
          type="text"
          placeholder="MM/YY"
          inputMode="numeric"
          isRequired
        />
        <TextField
          label="CVC"
          name="cvc"
          type="text"
          inputMode="numeric"
          maxLength={4}
          isRequired
        />
        <TextField label="Promo code" name="promoCode" type="text" />
        <Button type="submit" variant="accent">
          Place order
        </Button>
      </Flex>
    </Form>
  )
}

export default CheckoutPaymentForm
