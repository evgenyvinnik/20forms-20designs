import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@mui/joy'

export default function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
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
        <FormLabel htmlFor="joy-job-name">Full name</FormLabel>
        <Input id="joy-job-name" name="fullName" type="text" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-job-email">Email address</FormLabel>
        <Input id="joy-job-email" name="email" type="email" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-job-phone">Phone number</FormLabel>
        <Input id="joy-job-phone" name="phone" type="tel" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-job-cover">Cover letter</FormLabel>
        <Textarea id="joy-job-cover" name="coverLetter" minRows={4} required />
      </FormControl>

      <Button type="submit">Submit application</Button>
    </Box>
  )
}
