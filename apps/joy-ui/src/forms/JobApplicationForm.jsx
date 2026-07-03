import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
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
        Job Application
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Application submitted successfully!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Full Name</FormLabel>
        <Input
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
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
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Cover Letter</FormLabel>
        <Textarea
          minRows={4}
          value={formData.coverLetter}
          onChange={(e) =>
            setFormData({ ...formData, coverLetter: e.target.value })
          }
        />
      </FormControl>
      <Button type="submit" color="primary">
        Submit Application
      </Button>
    </Box>
  )
}
