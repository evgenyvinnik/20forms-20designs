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

export default function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Subject</FormLabel>
        <Input name="subject" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Priority</FormLabel>
        <Select name="priority" defaultValue="medium" required>
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="high">High</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Description</FormLabel>
        <Input name="description" multiline minRows={4} required />
      </FormControl>
      <Button type="submit">Submit ticket</Button>
    </Box>
  )
}
