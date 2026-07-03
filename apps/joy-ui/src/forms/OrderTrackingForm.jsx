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

export default function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Order number</FormLabel>
        <Input name="orderNumber" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Billing email address</FormLabel>
        <Input name="email" type="email" required />
      </FormControl>
      <Button type="submit">Track order</Button>
    </Box>
  )
}
