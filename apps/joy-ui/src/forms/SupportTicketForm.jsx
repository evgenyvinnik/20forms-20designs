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
        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.875rem',
            }}
          >
            <input type="radio" name="priority" value="low" /> Low
          </label>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.875rem',
            }}
          >
            <input type="radio" name="priority" value="medium" defaultChecked />{' '}
            Medium
          </label>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.875rem',
            }}
          >
            <input type="radio" name="priority" value="high" /> High
          </label>
        </Box>
      </FormControl>
      <FormControl required>
        <FormLabel>Issue description</FormLabel>
        <Input name="description" multiline minRows={4} required />
      </FormControl>
      <FormControl>
        <FormLabel>Attachments</FormLabel>
        <Input name="attachment" type="file" />
      </FormControl>
      <Button type="submit">Submit ticket</Button>
    </Box>
  )
}
