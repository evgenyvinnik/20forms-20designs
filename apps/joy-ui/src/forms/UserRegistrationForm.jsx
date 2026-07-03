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

export default function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
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
      <FormControl required>
        <FormLabel>Username</FormLabel>
        <Input name="username" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input name="password" type="password" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Confirm password</FormLabel>
        <Input name="confirmPassword" type="password" required />
      </FormControl>
      <Checkbox
        name="terms"
        label="I agree to the terms and conditions"
        required
      />
      <Button type="submit">Create account</Button>
    </Box>
  )
}
