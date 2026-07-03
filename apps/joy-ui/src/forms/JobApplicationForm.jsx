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

export default function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Job application submitted!')
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
        <FormLabel>Phone number</FormLabel>
        <Input name="phone" type="tel" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Cover letter</FormLabel>
        <Input name="coverLetter" multiline minRows={4} required />
      </FormControl>
      <Button type="submit">Submit application</Button>
    </Box>
  )
}
