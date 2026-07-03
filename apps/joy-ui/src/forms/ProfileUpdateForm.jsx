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
    alert('Submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Display name</FormLabel>
        <Input
          name="displayName"
          type="text"
          defaultValue="Jane Doe"
          required
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Public email</FormLabel>
        <Input
          name="email"
          type="email"
          defaultValue="jane@example.com"
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel>Bio</FormLabel>
        <Input
          name="bio"
          multiline
          minRows={3}
          defaultValue="Software developer based in San Francisco."
        />
      </FormControl>
      <Button type="submit">Save profile</Button>
    </Box>
  )
}
