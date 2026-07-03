import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
} from '@mui/joy'

export default function CheckoutPaymentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Checkout submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      <FormControl required>
        <FormLabel htmlFor="joy-checkout-email">Email for receipt</FormLabel>
        <Input id="joy-checkout-email" name="email" type="email" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-checkout-shipping-method">
          Shipping method
        </FormLabel>
        <Select
          id="joy-checkout-shipping-method"
          name="shippingMethod"
          defaultValue="standard"
          required
        >
          <Option value="standard">Standard Shipping</Option>
          <Option value="express">Express Shipping</Option>
          <Option value="overnight">Overnight Delivery</Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-checkout-card-number">Card number</FormLabel>
        <Input
          id="joy-checkout-card-number"
          name="cardNumber"
          type="text"
          slotProps={{ input: { maxLength: 19 } }}
          required
        />
      </FormControl>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel htmlFor="joy-checkout-expiration">Expiration</FormLabel>
          <Input
            id="joy-checkout-expiration"
            name="expiration"
            placeholder="MM/YY"
            required
          />
        </FormControl>

        <FormControl required>
          <FormLabel htmlFor="joy-checkout-cvc">CVC</FormLabel>
          <Input
            id="joy-checkout-cvc"
            name="cvc"
            type="text"
            slotProps={{ input: { maxLength: 4 } }}
            required
          />
        </FormControl>
      </Box>

      <Button type="submit">Place order</Button>
    </Box>
  )
}
