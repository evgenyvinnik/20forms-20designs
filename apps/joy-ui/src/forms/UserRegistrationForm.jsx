import { useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormLabel, Input } from '@mui/joy'

export default function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
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
        <FormLabel htmlFor="joy-reg-full-name">Full name</FormLabel>
        <Input id="joy-reg-full-name" name="fullName" type="text" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-reg-email">Email address</FormLabel>
        <Input id="joy-reg-email" name="email" type="email" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-reg-username">Username</FormLabel>
        <Input
          id="joy-reg-username"
          name="username"
          type="text"
          slotProps={{ input: { minLength: 3 } }}
          required
        />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-reg-password">Password</FormLabel>
        <Input
          id="joy-reg-password"
          name="password"
          type="password"
          slotProps={{ input: { minLength: 8 } }}
          required
        />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-reg-confirm-password">
          Confirm password
        </FormLabel>
        <Input
          id="joy-reg-confirm-password"
          name="confirmPassword"
          type="password"
          slotProps={{ input: { minLength: 8 } }}
          required
        />
      </FormControl>

      <Checkbox
        name="terms"
        label="I agree to the terms and conditions"
        required
        sx={{ my: 1 }}
      />

      <Button type="submit">Create account</Button>
    </Box>
  )
}
