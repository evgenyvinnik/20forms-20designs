import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input } from '@mui/joy'

export default function BillingInfoForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Billing info saved!')
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
        <FormLabel htmlFor="joy-billing-name">Billing name</FormLabel>
        <Input id="joy-billing-name" name="billingName" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-billing-address">Street address</FormLabel>
        <Input id="joy-billing-address" name="address" required />
      </FormControl>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel htmlFor="joy-billing-city">City</FormLabel>
          <Input id="joy-billing-city" name="city" required />
        </FormControl>

        <FormControl required>
          <FormLabel htmlFor="joy-billing-zip">ZIP code</FormLabel>
          <Input id="joy-billing-zip" name="zip" required />
        </FormControl>
      </Box>

      <Button type="submit">Save billing info</Button>
    </Box>
  )
}
