import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function PasswordChangeForm() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
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
        Change Password
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Password changed successfully!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Current Password</FormLabel>
        <Input
          type="password"
          value={formData.currentPassword}
          onChange={(e) =>
            setFormData({ ...formData, currentPassword: e.target.value })
          }
        />
      </FormControl>
      <FormControl required>
        <FormLabel>New Password</FormLabel>
        <Input
          type="password"
          value={formData.newPassword}
          onChange={(e) =>
            setFormData({ ...formData, newPassword: e.target.value })
          }
          slotProps={{ input: { minLength: 8 } }}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Confirm New Password</FormLabel>
        <Input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </FormControl>
      <Button type="submit" color="primary">
        Update Password
      </Button>
    </Box>
  )
}
