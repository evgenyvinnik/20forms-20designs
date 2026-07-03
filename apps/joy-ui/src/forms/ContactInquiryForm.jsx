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

export default function ContactInquiryForm() {
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
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Topic</FormLabel>
        <Select name="topic" defaultValue="general" required>
          <Option value="general">General Support</Option>
          <Option value="sales">Sales & Business</Option>
          <Option value="feedback">Product Feedback</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Message</FormLabel>
        <Input name="message" multiline minRows={4} required />
      </FormControl>
      <Button type="submit">Send inquiry</Button>
    </Box>
  )
}
