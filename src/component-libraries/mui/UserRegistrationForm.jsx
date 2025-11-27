import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        id="mui-user-registration-name"
        name="fullName"
        label="Full name"
        type="text"
        required
      />
      <TextField
        id="mui-user-registration-email"
        name="email"
        label="Email address"
        type="email"
        required
      />
      <TextField
        id="mui-user-registration-username"
        name="username"
        label="Username"
        type="text"
        required
        inputProps={{ minLength: 3 }}
      />
      <TextField
        id="mui-user-registration-password"
        name="password"
        label="Password"
        type="password"
        required
        inputProps={{ minLength: 8 }}
      />
      <TextField
        id="mui-user-registration-confirm"
        name="confirmPassword"
        label="Confirm password"
        type="password"
        required
        inputProps={{ minLength: 8 }}
      />
      <FormControlLabel
        control={<Checkbox name="terms" required />}
        label="I agree to the terms and conditions"
      />
      <Button type="submit" variant="contained">
        Create account
      </Button>
    </Box>
  )
}

export default UserRegistrationForm
