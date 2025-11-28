import { Button, Checkbox, FormGroup, InputGroup } from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup
        label="Full name"
        labelFor="blueprint-user-registration-name"
      >
        <InputGroup
          id="blueprint-user-registration-name"
          name="fullName"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Email address"
        labelFor="blueprint-user-registration-email"
      >
        <InputGroup
          id="blueprint-user-registration-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Username"
        labelFor="blueprint-user-registration-username"
      >
        <InputGroup
          id="blueprint-user-registration-username"
          name="username"
          type="text"
          minLength={3}
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Password"
        labelFor="blueprint-user-registration-password"
      >
        <InputGroup
          id="blueprint-user-registration-password"
          name="password"
          type="password"
          minLength={8}
          required
          fill
        />
      </FormGroup>
      <FormGroup
        label="Confirm password"
        labelFor="blueprint-user-registration-confirm"
      >
        <InputGroup
          id="blueprint-user-registration-confirm"
          name="confirmPassword"
          type="password"
          minLength={8}
          required
          fill
        />
      </FormGroup>
      <Checkbox
        label="I agree to the terms and conditions"
        name="terms"
        required
      />
      <Button intent="primary" type="submit">
        Create account
      </Button>
    </form>
  )
}

export default UserRegistrationForm
