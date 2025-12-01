import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  EuiCheckbox,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui'

function UserLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Login submitted!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Email or username">
        <EuiFieldText
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

      <EuiFormRow>
        <EuiCheckbox
          id="remember-me"
          label="Keep me signed in"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiFlexGroup gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiButton type="submit" fill>
              Sign in
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton
              onClick={() => alert('Password reset link flow placeholder')}
            >
              Forgot password?
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFormRow>
    </EuiForm>
  )
}

export default UserLoginForm
