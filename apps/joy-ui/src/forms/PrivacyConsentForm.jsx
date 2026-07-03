import { useState } from 'react'
import { Box, Button, Checkbox } from '@mui/joy'

export default function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Consent saved!')
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
      <Checkbox
        name="necessary"
        defaultChecked
        disabled
        label="Essential cookies required for site operation"
      />
      <Checkbox
        name="analytics"
        defaultChecked
        label="Allow anonymous analytics tracking"
      />
      <Checkbox
        name="marketing"
        label="Receive promotional updates and newsletters"
      />
      <Button type="submit">Save consent settings</Button>
    </Box>
  )
}
