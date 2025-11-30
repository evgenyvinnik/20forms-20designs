import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

const shippingOptions = [
  { label: 'Standard', value: 'standard' },
  { label: 'Express', value: 'express' },
  { label: 'Overnight', value: 'overnight' },
]

function CheckoutPaymentForm() {
  const [shipping, setShipping] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-checkout-email">Email for receipt</Label>
          <Textfield
            id="atlaskit-checkout-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-checkout-shipping-method">Shipping method</Label>
          <Select
            inputId="atlaskit-checkout-shipping-method"
            name="shippingMethod"
            options={shippingOptions}
            value={shipping}
            onChange={setShipping}
            placeholder="Select shipping"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-checkout-card-number">Card number</Label>
          <Textfield
            id="atlaskit-checkout-card-number"
            name="cardNumber"
            maxLength={19}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-checkout-expiration">Expiration</Label>
          <Textfield
            id="atlaskit-checkout-expiration"
            name="expiration"
            placeholder="MM/YY"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-checkout-cvc">CVC</Label>
          <Textfield
            id="atlaskit-checkout-cvc"
            name="cvc"
            maxLength={4}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-checkout-promo">Promo code</Label>
          <Textfield
            id="atlaskit-checkout-promo"
            name="promoCode"
          />
        </Box>
        <Button type="submit" appearance="primary">Place order</Button>
      </Stack>
    </form>
  )
}

export default CheckoutPaymentForm
