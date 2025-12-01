import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Checkbox,
  ActionGroup,
} from '@patternfly/react-core'

function UserRegistrationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup
        label="Full name"
        isRequired
        fieldId="pf-user-registration-name"
      >
        <TextInput
          isRequired
          type="text"
          id="pf-user-registration-name"
          name="fullName"
        />
      </FormGroup>
      <FormGroup
        label="Email address"
        isRequired
        fieldId="pf-user-registration-email"
      >
        <TextInput
          isRequired
          type="email"
          id="pf-user-registration-email"
          name="email"
        />
      </FormGroup>
      <FormGroup
        label="Username"
        isRequired
        fieldId="pf-user-registration-username"
      >
        <TextInput
          isRequired
          type="text"
          id="pf-user-registration-username"
          name="username"
        />
      </FormGroup>
      <FormGroup
        label="Password"
        isRequired
        fieldId="pf-user-registration-password"
      >
        <TextInput
          isRequired
          type="password"
          id="pf-user-registration-password"
          name="password"
        />
      </FormGroup>
      <FormGroup
        label="Confirm password"
        isRequired
        fieldId="pf-user-registration-confirm"
      >
        <TextInput
          isRequired
          type="password"
          id="pf-user-registration-confirm"
          name="confirmPassword"
        />
      </FormGroup>
      <FormGroup fieldId="pf-user-registration-terms">
        <Checkbox
          label="I agree to the terms and conditions"
          id="pf-user-registration-terms"
          name="terms"
          isRequired
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Create account
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default UserRegistrationForm
