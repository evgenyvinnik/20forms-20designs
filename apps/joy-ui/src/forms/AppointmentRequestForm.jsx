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
        <FormLabel htmlFor="joy-app-name">Your name</FormLabel>
        <Input id="joy-app-name" name="name" type="text" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-app-service">Service requested</FormLabel>
        <Select
          id="joy-app-service"
          name="service"
          defaultValue="consultation"
          required
        >
          <Option value="consultation">Initial Consultation</Option>
          <Option value="followup">Follow-up Session</Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-app-date">Preferred date</FormLabel>
        <Input id="joy-app-date" name="date" type="date" required />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="joy-app-notes">Notes</FormLabel>
        <Textarea id="joy-app-notes" name="notes" minRows={3} />
      </FormControl>

      <Button type="submit">Request appointment</Button>
    </Box>
  )
}
