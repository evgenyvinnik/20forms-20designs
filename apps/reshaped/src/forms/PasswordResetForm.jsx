import { Button, FormControl, Text, TextField, View } from 'reshaped'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <Text variant="body-2" color="neutral-faded">
          Request a password reset link via email.
        </Text>
        <FormControl required>
          <FormControl.Label>Email address</FormControl.Label>
          <TextField
            name="email"
            inputAttributes={{ type: 'email', required: true }}
          />
        </FormControl>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Send reset link
          </Button>
        </View>
      </View>
    </form>
  )
}

export default PasswordResetForm
