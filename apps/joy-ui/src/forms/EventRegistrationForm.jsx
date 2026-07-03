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

export default function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Attendee name</FormLabel>
        <Input name="name" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Ticket pass</FormLabel>
        <Select name="ticket" defaultValue="general" required>
          <Option value="general">General Admission</Option>
          <Option value="vip">VIP Access</Option>
        </Select>
      </FormControl>
      <Button type="submit">Register for event</Button>
    </Box>
  )
}
