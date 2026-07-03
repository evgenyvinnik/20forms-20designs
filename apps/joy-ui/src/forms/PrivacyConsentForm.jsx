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
        label="Essential cookies required for site operation"
        defaultChecked
        disabled
      />
      <Checkbox
        name="analytics"
        label="Allow anonymous analytics tracking"
        defaultChecked
      />
      <Checkbox
        name="marketing"
        label="Receive promotional updates and newsletters"
      />

      <Button type="submit" sx={{ mt: 1 }}>
        Save consent settings
      </Button>
    </Box>
  )
}
