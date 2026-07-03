import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input } from '@mui/joy'

export default function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password updated!')
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
        <FormLabel htmlFor="joy-change-current">Current password</FormLabel>
        <Input
          id="joy-change-current"
          name="currentPassword"
          type="password"
          required
        />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-change-new">New password</FormLabel>
        <Input
          id="joy-change-new"
          name="newPassword"
          type="password"
          slotProps={{ input: { minLength: 8 } }}
          required
        />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-change-confirm">Confirm new password</FormLabel>
        <Input
          id="joy-change-confirm"
          name="confirmPassword"
          type="password"
          slotProps={{ input: { minLength: 8 } }}
          required
        />
      </FormControl>

      <Button type="submit">Update password</Button>
    </Box>
  )
}
