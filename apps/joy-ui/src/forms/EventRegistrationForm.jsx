import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
} from '@mui/joy'

export default function EventRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registered for event!')
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
        <FormLabel htmlFor="joy-event-name">Attendee name</FormLabel>
        <Input id="joy-event-name" name="name" type="text" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-event-email">Email address</FormLabel>
        <Input id="joy-event-email" name="email" type="email" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-event-ticket">Ticket pass</FormLabel>
        <Select
          id="joy-event-ticket"
          name="ticket"
          defaultValue="general"
          required
        >
          <Option value="general">General Admission</Option>
          <Option value="vip">VIP Access</Option>
        </Select>
      </FormControl>

      <Button type="submit">Register for event</Button>
    </Box>
  )
}
