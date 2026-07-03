import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input } from '@mui/joy'

export default function OrderTrackingForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Tracking request sent!')
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
        <FormLabel htmlFor="joy-track-order-number">Order number</FormLabel>
        <Input id="joy-track-order-number" name="orderNumber" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-track-email">Billing email address</FormLabel>
        <Input id="joy-track-email" name="email" type="email" required />
      </FormControl>

      <Button type="submit">Track order</Button>
    </Box>
  )
}
