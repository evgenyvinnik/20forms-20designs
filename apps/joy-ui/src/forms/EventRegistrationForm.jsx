import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Option,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function EventRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticketType: 'standard',
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
        Event Registration
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Event registration confirmed!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Attendee Name</FormLabel>
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
        <FormLabel>Ticket Tier</FormLabel>
        <Select
          value={formData.ticketType}
          onChange={(_, val) => setFormData({ ...formData, ticketType: val })}
        >
          <Option value="standard">Standard Pass</Option>
          <Option value="vip">VIP Pass</Option>
          <Option value="student">Student Pass</Option>
        </Select>
      </FormControl>
      <Button type="submit" color="primary">
        Register for Event
      </Button>
    </Box>
  )
}
