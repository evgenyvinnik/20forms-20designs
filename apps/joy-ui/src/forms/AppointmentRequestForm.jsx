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

export default function AppointmentRequestForm() {
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
        <FormLabel>Your name</FormLabel>
        <Input name="name" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Service requested</FormLabel>
        <Select name="service" defaultValue="consultation" required>
          <Option value="consultation">Initial Consultation</Option>
          <Option value="followup">Follow-up Session</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Preferred date</FormLabel>
        <Input name="date" type="date" required />
      </FormControl>
      <FormControl>
        <FormLabel>Notes</FormLabel>
        <Input name="notes" multiline minRows={3} />
      </FormControl>
      <Button type="submit">Request appointment</Button>
    </Box>
  )
}
