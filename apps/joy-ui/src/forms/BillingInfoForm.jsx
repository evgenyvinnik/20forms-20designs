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
    alert('Billing info saved!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Billing name</FormLabel>
        <Input name="billingName" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Street address</FormLabel>
        <Input name="address" type="text" required />
      </FormControl>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel>City</FormLabel>
          <Input name="city" type="text" required />
        </FormControl>
        <FormControl required>
          <FormLabel>ZIP code</FormLabel>
          <Input name="zip" type="text" required />
        </FormControl>
      </Box>
      <Button type="submit">Save billing info</Button>
    </Box>
  )
}
