import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Button,
} from '@trussworks/react-uswds'

function PasswordResetForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
    text: { color: '#f0f0f0' },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <p style={theme === 'dark' ? darkStyles.text : undefined}>
        Request a password reset link via email.
      </p>
      <FormGroup>
        <Label
          htmlFor="uswds-password-reset-email"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Email address
        </Label>
        <TextInput
          id="uswds-password-reset-email"
          name="email"
          type="email"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <Button type="submit">Send reset link</Button>
    </Form>
  )
}

export default PasswordResetForm
