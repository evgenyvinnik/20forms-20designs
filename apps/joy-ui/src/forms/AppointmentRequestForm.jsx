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

export default function AppointmentRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: 'consultation',
    date: '',
    notes: '',
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
        Book Appointment
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Appointment request submitted!
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
        <FormLabel>Service Required</FormLabel>
        <Select
          value={formData.service}
          onChange={(_, val) => setFormData({ ...formData, service: val })}
        >
          <Option value="consultation">Initial Consultation</Option>
          <Option value="followup">Follow-up Session</Option>
          <Option value="review">Annual Review</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Preferred Date</FormLabel>
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Special Instructions</FormLabel>
        <Textarea
          minRows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </FormControl>
      <Button type="submit" color="primary">
        Request Appointment
      </Button>
    </Box>
  )
}
