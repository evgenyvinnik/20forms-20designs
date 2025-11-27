import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        id="mui-password-change-current"
        name="currentPassword"
        label="Current password"
        type="password"
        required
      />
      <TextField
        id="mui-password-change-new"
        name="newPassword"
        label="New password"
        type="password"
        required
        inputProps={{ minLength: 8 }}
      />
      <TextField
        id="mui-password-change-confirm"
        name="confirmPassword"
        label="Confirm new password"
        type="password"
        required
        inputProps={{ minLength: 8 }}
      />
      <FormControlLabel
        control={<Checkbox name="logoutOthers" />}
        label="Sign out of other devices"
      />
      <Button type="submit" variant="contained">
        Update password
      </Button>
    </Box>
  )
}

export default PasswordChangeForm
