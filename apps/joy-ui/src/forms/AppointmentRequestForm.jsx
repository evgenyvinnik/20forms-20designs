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
    alert('Appointment requested!')
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
        <FormLabel>Preferred date</FormLabel>
        <Input name="date" type="date" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Preferred time</FormLabel>
        <Input name="time" type="time" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Reason for visit</FormLabel>
        <Input name="reason" multiline minRows={3} required />
      </FormControl>
      <Button type="submit">Request appointment</Button>
    </Box>
  )
}
