import { Button, Checkbox, FormControl, TextField, View } from 'reshaped'

function PasswordChangeForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password change requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Current password</FormControl.Label>
          <TextField
            name="currentPassword"
            inputAttributes={{ type: 'password', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>New password</FormControl.Label>
          <TextField
            name="newPassword"
            inputAttributes={{ type: 'password', minLength: 8, required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Confirm new password</FormControl.Label>
          <TextField
            name="confirmPassword"
            inputAttributes={{ type: 'password', minLength: 8, required: true }}
          />
        </FormControl>
        <Checkbox name="logoutOthers">Sign out of other devices</Checkbox>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Update password
          </Button>
        </View>
      </View>
    </form>
  )
}

export default PasswordChangeForm
