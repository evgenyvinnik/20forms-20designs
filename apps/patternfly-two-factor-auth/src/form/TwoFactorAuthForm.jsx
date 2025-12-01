import {
  Form,
  FormGroup,
  TextInput,
  Button,
  ActionGroup,
  Content,
} from '@patternfly/react-core'

function TwoFactorAuthForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Content>
        <p>Enter the code from your authenticator app or SMS.</p>
      </Content>
      <FormGroup
        label="Verification code"
        isRequired
        fieldId="pf-two-factor-code"
      >
        <TextInput
          isRequired
          type="text"
          id="pf-two-factor-code"
          name="code"
          maxLength={6}
        />
      </FormGroup>
      <FormGroup label="Backup code (optional)" fieldId="pf-two-factor-backup">
        <TextInput type="text" id="pf-two-factor-backup" name="backupCode" />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Verify
        </Button>
        <Button
          variant="link"
          onClick={() => alert('A new code has been sent!')}
        >
          Resend code
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default TwoFactorAuthForm
