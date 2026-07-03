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

export default function ProfileUpdateForm() {
  const [formData, setFormData] = useState({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    bio: 'Software engineer and open source enthusiast.',
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
        Profile Settings
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Profile updated successfully!
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
      <FormControl>
        <FormLabel>Bio</FormLabel>
        <Textarea
          minRows={3}
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
        />
      </FormControl>
      <Button type="submit" color="primary">
        Save Changes
      </Button>
    </Box>
  )
}
