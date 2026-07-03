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
    alert('Inquiry submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <FormControl required>
        <FormLabel>Full name</FormLabel>
        <Input name="name" type="text" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" required />
      </FormControl>
      <FormControl required>
        <FormLabel>Topic</FormLabel>
        <Select name="topic" defaultValue="support" required>
          <Option value="support">Support</Option>
          <Option value="sales">Sales</Option>
          <Option value="feedback">Feedback</Option>
          <Option value="other">Other</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Message</FormLabel>
        <Input name="message" multiline minRows={4} required />
      </FormControl>
      <Checkbox name="allowFollowup" label="Allow follow-up communication" />
      <Button type="submit">Submit inquiry</Button>
    </Box>
  )
}
