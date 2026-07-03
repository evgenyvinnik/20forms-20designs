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

export default function AppointmentRequestForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Appointment requested!')
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
        <FormLabel htmlFor="joy-appointment-name">Your name</FormLabel>
        <Input id="joy-appointment-name" name="name" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-appointment-service">
          Service requested
        </FormLabel>
        <Select
          id="joy-appointment-service"
          name="service"
          defaultValue="consultation"
          required
        >
          <Option value="consultation">Initial Consultation</Option>
          <Option value="followup">Follow-up Session</Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-appointment-date">Preferred date</FormLabel>
        <Input id="joy-appointment-date" name="date" type="date" required />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="joy-appointment-notes">Notes</FormLabel>
        <Textarea id="joy-appointment-notes" name="notes" minRows={3} />
      </FormControl>

      <Button type="submit">Request appointment</Button>
    </Box>
  )
}
