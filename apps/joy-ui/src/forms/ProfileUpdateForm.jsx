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

export default function ProfileUpdateForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Profile updated!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>First name</FormLabel>
        <Input name="firstName" type="text" defaultValue="Jane" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Last name</FormLabel>
        <Input name="lastName" type="text" defaultValue="Doe" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Email address</FormLabel>
        <Input
          name="email"
          type="email"
          defaultValue="jane@example.com"
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel>Phone number</FormLabel>
        <Input name="phone" type="tel" />
      </FormControl>
      <FormControl>
        <FormLabel>Short bio</FormLabel>
        <Input
          name="bio"
          multiline
          minRows={3}
          defaultValue="Software developer based in San Francisco."
        />
      </FormControl>
      <Button type="submit">Save changes</Button>
    </Box>
  )
}
