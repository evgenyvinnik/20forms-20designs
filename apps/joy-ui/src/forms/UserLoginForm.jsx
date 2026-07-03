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

export default function UserLoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
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
        Sign In
      </Typography>
      {submitted && (
        <Alert color="success" variant="soft">
          Log in successful!
        </Alert>
      )}
      <FormControl required>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@example.com"
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </FormControl>
      <Checkbox
        label="Remember this device"
        checked={formData.rememberMe}
        onChange={(e) =>
          setFormData({ ...formData, rememberMe: e.target.checked })
        }
      />
      <Button type="submit" color="primary">
        Sign In
      </Button>
    </Box>
  )
}
