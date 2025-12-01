import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-order-tracking-number">Order number</Label>
          <Textfield
            id="atlaskit-order-tracking-number"
            name="orderNumber"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-order-tracking-email">Email address</Label>
          <Textfield
            id="atlaskit-order-tracking-email"
            name="email"
            type="email"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-order-tracking-postal">Postal code</Label>
          <Textfield
            id="atlaskit-order-tracking-postal"
            name="postalCode"
            isRequired
          />
        </Box>
        <Button type="submit" appearance="primary">Find order</Button>
      </Stack>
    </form>
  )
}

export default OrderTrackingForm
