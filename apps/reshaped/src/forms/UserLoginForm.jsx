import { Button, Checkbox, FormControl, TextField, View } from 'reshaped'

function UserLoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Login submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Email or username</FormControl.Label>
          <TextField
            name="identifier"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Password</FormControl.Label>
          <TextField
            name="password"
            inputAttributes={{ type: 'password', required: true }}
          />
        </FormControl>
        <Checkbox name="remember">Keep me signed in</Checkbox>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Sign in
          </Button>
          <Button
            type="button"
            onClick={() => alert('Password reset link flow placeholder')}
          >
            Forgot password?
          </Button>
        </View>
      </View>
    </form>
  )
}

export default UserLoginForm
