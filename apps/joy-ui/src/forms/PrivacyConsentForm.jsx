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
      <FormControl required>
        <FormLabel>Full name</FormLabel>
        <Input name="fullName" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" required />
      </FormControl>
      <Checkbox name="emailUpdates" label="Email updates" defaultChecked />
      <Checkbox name="smsAlerts" label="SMS notifications" />
      <Checkbox name="phoneCalls" label="Phone calls" />
      <Checkbox
        name="analytics"
        label="Allow analytics cookies"
        defaultChecked
      />
      <Checkbox name="personalization" label="Allow personalized content" />
      <FormControl>
        <FormLabel>Additional notes</FormLabel>
        <Input name="notes" multiline minRows={3} />
      </FormControl>
      <Button type="submit">Save preferences</Button>
    </Box>
  )
}
