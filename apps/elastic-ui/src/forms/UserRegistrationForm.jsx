import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  EuiCheckbox,
  EuiButton,
} from '@elastic/eui'

function UserRegistrationForm() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Registration submitted!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Username">
        <EuiFieldText
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Email address">
        <EuiFieldText
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Password">
        <EuiFieldPassword
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="dual"
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Confirm password">
        <EuiFieldPassword
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="dual"
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="accept-terms"
          label="I agree to the terms and conditions"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Create account
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default UserRegistrationForm
