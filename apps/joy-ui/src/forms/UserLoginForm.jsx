import { useState } from 'react'
import { Box, Button, Checkbox, FormControl, FormLabel, Input } from '@mui/joy'

export default function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
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
        <FormLabel htmlFor="joy-user-login-email">Email or username</FormLabel>
        <Input
          id="joy-user-login-email"
          name="identifier"
          type="text"
          required
        />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-user-login-password">Password</FormLabel>
        <Input
          id="joy-user-login-password"
          name="password"
          type="password"
          required
        />
      </FormControl>

      <Checkbox name="remember" label="Keep me signed in" sx={{ my: 1 }} />

      <Button type="submit">Sign in</Button>
      <Button
        type="button"
        variant="plain"
        color="neutral"
        onClick={() => alert('Password reset link flow placeholder')}
      >
        Forgot password?
      </Button>
    </Box>
  )
}
