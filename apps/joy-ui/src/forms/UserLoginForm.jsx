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

export default function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Email or username</FormLabel>
        <Input name="identifier" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input name="password" type="password" required />
      </FormControl>
      <Checkbox name="remember" label="Keep me signed in" />
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
