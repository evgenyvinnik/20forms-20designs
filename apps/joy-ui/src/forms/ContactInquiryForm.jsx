import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Textarea,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function ContactInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography level="h3" component="h2">
        Contact Us
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Thank you for your message. We will respond shortly!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Your Name</FormLabel>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Inquiry Subject</FormLabel>
        <Select
          value={formData.subject}
          onChange={(_, val) => setFormData({ ...formData, subject: val })}
        >
          <Option value="general">General Inquiry</Option>
          <Option value="support">Technical Support</Option>
          <Option value="billing">Billing Question</Option>
          <Option value="partnership">Partnership Opportunity</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Message</FormLabel>
        <Textarea
          minRows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </FormControl>
      <Button type="submit" color="primary">
        Send Message
      </Button>
    </Box>
  )
}
