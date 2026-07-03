import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Alert,
  Typography,
  Box,
} from '@mui/joy'

export default function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
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
        Create Account
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Registration successful!
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
          placeholder="Jane Doe"
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="jane@example.com"
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          slotProps={{ input: { minLength: 8 } }}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </FormControl>
      <Checkbox
        required
        label="I agree to the Terms of Service and Privacy Policy"
        checked={formData.terms}
        onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
      />
      <Button type="submit" color="primary">
        Register
      </Button>
    </Box>
  )
}
