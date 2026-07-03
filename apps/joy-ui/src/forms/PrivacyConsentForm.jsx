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

export default function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy consent saved!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
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
      <Button type="submit">Save consent settings</Button>
    </Box>
  )
}
