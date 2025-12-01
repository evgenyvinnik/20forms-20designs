import { Button, Pane, Paragraph, TextInputField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <Paragraph marginBottom={0}>
        Request a password reset link via email.
      </Paragraph>
      <TextInputField
        id="evergreen-password-reset-email"
        label="Email address"
        name="email"
        type="email"
        required
      />
      <Button appearance="primary" type="submit">
        Send reset link
      </Button>
    </Pane>
  )
}

export default PasswordResetForm
