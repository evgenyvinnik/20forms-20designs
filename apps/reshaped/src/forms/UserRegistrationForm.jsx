import { Button, Checkbox, FormControl, TextField, View } from 'reshaped'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <View gap={4}>
        <FormControl required>
          <FormControl.Label>Full name</FormControl.Label>
          <TextField
            name="fullName"
            inputAttributes={{ type: 'text', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Email address</FormControl.Label>
          <TextField
            name="email"
            inputAttributes={{ type: 'email', required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Username</FormControl.Label>
          <TextField
            name="username"
            inputAttributes={{ type: 'text', minLength: 3, required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Password</FormControl.Label>
          <TextField
            name="password"
            inputAttributes={{ type: 'password', minLength: 8, required: true }}
          />
        </FormControl>
        <FormControl required>
          <FormControl.Label>Confirm password</FormControl.Label>
          <TextField
            name="confirmPassword"
            inputAttributes={{ type: 'password', minLength: 8, required: true }}
          />
        </FormControl>
        <Checkbox name="terms" inputAttributes={{ required: true }}>
          I agree to the terms and conditions
        </Checkbox>
        <View direction="row" gap={2}>
          <Button type="submit" color="primary">
            Create account
          </Button>
        </View>
      </View>
    </form>
  )
}

export default UserRegistrationForm
