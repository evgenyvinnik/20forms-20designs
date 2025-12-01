import { Button, FormGroup, InputGroup } from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function PasswordResetForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <p className="bp5-text-muted">Request a password reset link via email.</p>
      <FormGroup
        label="Email address"
        labelFor="blueprint-password-reset-email"
      >
        <InputGroup
          id="blueprint-password-reset-email"
          name="email"
          type="email"
          required
          fill
        />
      </FormGroup>
      <Button intent="primary" type="submit">
        Send reset link
      </Button>
    </form>
  )
}

export default PasswordResetForm
