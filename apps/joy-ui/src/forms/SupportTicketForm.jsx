import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
  Textarea,
} from '@mui/joy'

export default function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Ticket submitted!')
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
        <FormLabel htmlFor="joy-ticket-subject">Subject</FormLabel>
        <Input id="joy-ticket-subject" name="subject" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-ticket-priority">Priority</FormLabel>
        <Select
          id="joy-ticket-priority"
          name="priority"
          defaultValue="medium"
          required
        >
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="high">High</Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-ticket-description">Description</FormLabel>
        <Textarea
          id="joy-ticket-description"
          name="description"
          minRows={4}
          required
        />
      </FormControl>

      <Button type="submit">Submit ticket</Button>
    </Box>
  )
}
