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

export default function ContactInquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry sent!')
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
        <FormLabel htmlFor="joy-contact-name">Your name</FormLabel>
        <Input id="joy-contact-name" name="name" type="text" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-contact-email">Email address</FormLabel>
        <Input id="joy-contact-email" name="email" type="email" required />
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-contact-topic">Topic</FormLabel>
        <Select
          id="joy-contact-topic"
          name="topic"
          defaultValue="general"
          required
        >
          <Option value="general">General Support</Option>
          <Option value="sales">Sales & Business</Option>
          <Option value="feedback">Product Feedback</Option>
        </Select>
      </FormControl>

      <FormControl required>
        <FormLabel htmlFor="joy-contact-message">Message</FormLabel>
        <Textarea
          id="joy-contact-message"
          name="message"
          minRows={4}
          required
        />
      </FormControl>

      <Button type="submit">Send inquiry</Button>
    </Box>
  )
}
