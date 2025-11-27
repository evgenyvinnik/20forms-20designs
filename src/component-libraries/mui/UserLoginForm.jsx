import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField id="user-login-email" name="identifier" label="Email or username" type="text" required />
      <TextField id="user-login-password" name="password" label="Password" type="password" required />
      <FormControlLabel control={<Checkbox name="remember" />} label="Keep me signed in" />
      <Button type="submit" variant="contained">
        Sign in
      </Button>
      <Button type="button" variant="text" onClick={() => alert('Password reset link flow placeholder')}>
        Forgot password?
      </Button>
    </Box>
  )
}

export default UserLoginForm
