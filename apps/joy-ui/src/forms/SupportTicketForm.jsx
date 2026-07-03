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

export default function SupportTicketForm() {
  const [formData, setFormData] = useState({
    subject: '',
    priority: 'medium',
    description: '',
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
        Create Support Ticket
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Support ticket created successfully!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Issue Subject</FormLabel>
        <Input
          type="text"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Priority Level</FormLabel>
        <Select
          value={formData.priority}
          onChange={(_, val) => setFormData({ ...formData, priority: val })}
        >
          <Option value="low">Low Priority</Option>
          <Option value="medium">Medium Priority</Option>
          <Option value="high">High Priority</Option>
          <Option value="urgent">Urgent</Option>
        </Select>
      </FormControl>
      <FormControl required>
        <FormLabel>Description of Issue</FormLabel>
        <Textarea
          minRows={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </FormControl>
      <Button type="submit" color="primary">
        Submit Ticket
      </Button>
    </Box>
  )
}
