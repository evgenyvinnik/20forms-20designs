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

export default function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing details saved!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Name on card</FormLabel>
        <Input name="cardName" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Card number</FormLabel>
        <Input
          name="cardNumber"
          type="text"
          slotProps={{ input: { maxLength: 19 } }}
          slotProps={{ input: { pattern: '[0-9]{13,19}' } }}
          required
        />
      </FormControl>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel>Expiration date</FormLabel>
          <Input name="expiry" type="text" placeholder="MM/YY" required />
        </FormControl>
        <FormControl required>
          <FormLabel>Security code</FormLabel>
          <Input
            name="cvc"
            type="password"
            slotProps={{ input: { maxLength: 4 } }}
            required
          />
        </FormControl>
      </Box>
      <FormControl required>
        <FormLabel>Billing address</FormLabel>
        <Input name="address" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Country</FormLabel>
        <Select name="country" defaultValue="US" required>
          <Option value="US">United States</Option>
          <Option value="CA">Canada</Option>
        </Select>
      </FormControl>
      <Button type="submit">Save billing details</Button>
    </Box>
  )
}
