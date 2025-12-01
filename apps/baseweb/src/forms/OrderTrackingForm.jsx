import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { useState } from 'react'

function OrderTrackingForm() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Order number">
          <Input
            id="baseweb-order-tracking-number"
            name="orderNumber"
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Email address">
          <Input
            id="baseweb-order-tracking-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl label="Postal code">
          <Input
            id="baseweb-order-tracking-postal"
            name="postalCode"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </FormControl>
        <Button type="submit">Find order</Button>
      </Block>
    </form>
  )
}

export default OrderTrackingForm
