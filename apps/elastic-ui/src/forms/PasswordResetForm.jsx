import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiText,
} from '@elastic/eui'

function PasswordResetForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow>
        <EuiText size="s">
          <p>Request a password reset link via email.</p>
        </EuiText>
      </EuiFormRow>

      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Send reset link
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default PasswordResetForm
