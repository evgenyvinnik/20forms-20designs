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
        <FormLabel>Full name</FormLabel>
        <Input name="fullName" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Ticket type</FormLabel>
        <Select name="ticketType" defaultValue="general" required>
          <Option value="general">General admission</Option>
          <Option value="vip">VIP</Option>
          <Option value="student">Student</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Number of guests</FormLabel>
        <Input name="guests" type="number" defaultValue="1" required />
      </FormControl>
      <Checkbox name="notify" label="Notify me about future events" />
      <Button type="submit">Register</Button>
    </Box>
  )
}
