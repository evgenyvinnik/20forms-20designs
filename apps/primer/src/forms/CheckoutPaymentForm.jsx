import { FormControl, TextInput, Select, Button } from '@primer/react'

function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap={3}></Box>

      <FormControl>
        <FormControl.Label>Promo code</FormControl.Label>
        <TextInput
          id="primer-checkout-promo"
          name="promoCode"
          type="text"
          pattern="[A-Za-z0-9]{3,15}"
          block
        />
      </FormControl>

      <Button type="submit" variant="primary" block>
        Place order
      </Button>
    </form>
  )
}

export default CheckoutPaymentForm
