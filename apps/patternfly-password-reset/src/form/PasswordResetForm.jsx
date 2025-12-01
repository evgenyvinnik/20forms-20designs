import {
  Form,
  FormGroup,
  TextInput,
  Button,
  ActionGroup,
  Content,
} from '@patternfly/react-core'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Content>
        <p>Request a password reset link via email.</p>
      </Content>
      <FormGroup
        label="Email address"
        isRequired
        fieldId="pf-password-reset-email"
      >
        <TextInput
          isRequired
          type="email"
          id="pf-password-reset-email"
          name="email"
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Send reset link
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default PasswordResetForm
