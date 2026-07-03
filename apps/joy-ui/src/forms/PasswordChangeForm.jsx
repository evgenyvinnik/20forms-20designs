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

export default function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password updated!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Current password</FormLabel>
        <Input name="currentPassword" type="password" required />
      </FormControl>
      <FormControl required>
        <FormLabel>New password</FormLabel>
        <Input name="newPassword" type="password" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Confirm new password</FormLabel>
        <Input name="confirmPassword" type="password" required />
      </FormControl>
      <Checkbox name="signOutOther" label="Sign out of other devices" />
      <Button type="submit">Update password</Button>
    </Box>
  )
}
