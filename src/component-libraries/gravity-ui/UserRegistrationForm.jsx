import { Button, Checkbox, TextInput } from '@gravity-ui/uikit'

import { formStackStyle } from './common.jsx'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-user-registration-name"
        label="Full name"
        name="fullName"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-user-registration-email"
        label="Email address"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-user-registration-username"
        label="Username"
        name="username"
        controlProps={{ required: true, minLength: 3 }}
      />
      <TextInput
        id="gravity-user-registration-password"
        label="Password"
        name="password"
        type="password"
        controlProps={{ required: true, minLength: 8 }}
      />
      <TextInput
        id="gravity-user-registration-confirm"
        label="Confirm password"
        name="confirmPassword"
        type="password"
        controlProps={{ required: true, minLength: 8 }}
      />
      <Checkbox
        name="terms"
        value="accepted"
        content="I agree to the terms and conditions"
        controlProps={{ required: true }}
      />
      <Button view="action" type="submit">
        Create account
      </Button>
    </form>
  )
}

export default UserRegistrationForm
