import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function UserRegistrationForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-user-registration-name"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Full name
        </Label>
        <TextInput
          id="uswds-user-registration-name"
          name="fullName"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-user-registration-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-user-registration-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-user-registration-username"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Username
        </Label>
        <TextInput
          id="uswds-user-registration-username"
          name="username"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-user-registration-password"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Password
        </Label>
        <TextInput
          id="uswds-user-registration-password"
          name="password"
          type="password"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-user-registration-confirm"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Confirm password
        </Label>
        <TextInput
          id="uswds-user-registration-confirm"
          name="confirmPassword"
          type="password"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-user-registration-terms"
          name="terms"
          label="I agree to the terms and conditions"
          required
        />
      </FormGroup>
      <Button type="submit">Create account</Button>
    </Form>
  )
}

export default UserRegistrationForm
