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
        <FormLabel htmlFor="joy-bill-name">Billing name</FormLabel>
        <Input id="joy-bill-name" name="billingName" type="text" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-bill-address">Street address</FormLabel>
        <Input id="joy-bill-address" name="address" type="text" required />
      </FormControl>

      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        <FormControl required>
          <FormLabel htmlFor="joy-bill-city">City</FormLabel>
          <Input id="joy-bill-city" name="city" type="text" required />
        </FormControl>

        <FormControl required>
          <FormLabel htmlFor="joy-bill-zip">ZIP code</FormLabel>
          <Input id="joy-bill-zip" name="zip" type="text" required />
        </FormControl>
      </Box>

      <Button type="submit">Save billing info</Button>
    </Box>
  )
}
