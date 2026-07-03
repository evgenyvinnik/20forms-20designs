import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
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
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Email for receipt</FormLabel>
        <Input name="email" type="email" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Shipping method</FormLabel>
        <Select name="shippingMethod" defaultValue="standard" required>
          <Option value="standard">Standard Shipping</Option>
          <Option value="express">Express Shipping</Option>
          <Option value="overnight">Overnight Delivery</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Card number</FormLabel>
        <Input
          name="cardNumber"
          type="text"
          slotProps={{ input: { maxLength: 19 } }}
          required
        />
      </FormControl>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel>Expiration</FormLabel>
          <Input name="expiration" type="text" placeholder="MM/YY" required />
        </FormControl>
        <FormControl required>
          <FormLabel>CVC</FormLabel>
          <Input
            name="cvc"
            type="text"
            slotProps={{ input: { maxLength: 4 } }}
            required
          />
        </FormControl>
      </Box>
      <FormControl>
        <FormLabel>Promo code</FormLabel>
        <Input
          name="promoCode"
          type="text"
          slotProps={{ input: { pattern: '[A-Za-z0-9]{3,15}' } }}
        />
      </FormControl>
      <Button type="submit">Place order</Button>
    </Box>
  )
}
