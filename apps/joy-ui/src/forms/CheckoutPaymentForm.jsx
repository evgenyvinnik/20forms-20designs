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
        <FormLabel htmlFor="joy-checkout-shipping">Shipping method</FormLabel>
        <Select
          id="joy-checkout-shipping"
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
        <FormLabel htmlFor="joy-checkout-card">Card number</FormLabel>
        <Input
          id="joy-checkout-card"
          name="cardNumber"
          type="text"
          slotProps={{ input: { inputMode: 'numeric', maxLength: 19 } }}
          required
        />
      </FormControl>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel htmlFor="joy-checkout-exp">Expiration</FormLabel>
          <Input
            id="joy-checkout-exp"
            name="expiration"
            placeholder="MM/YY"
            type="text"
            required
          />
        </FormControl>

        <FormControl required>
          <FormLabel htmlFor="joy-checkout-cvc">CVC</FormLabel>
          <Input
            id="joy-checkout-cvc"
            name="cvc"
            type="text"
            slotProps={{ input: { inputMode: 'numeric', maxLength: 4 } }}
            required
          />
        </FormControl>
      </Box>

      <Button type="submit">Place order</Button>
    </Box>
  )
}
