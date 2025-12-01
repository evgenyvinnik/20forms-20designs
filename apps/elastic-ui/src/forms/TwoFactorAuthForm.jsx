import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
} from '@elastic/eui'

function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [backupCode, setBackupCode] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }, [])

  const handleResend = useCallback(() => {
    alert('A new code has been sent!')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow>
        <EuiText size="s">
          <p>Enter the code from your authenticator app or SMS.</p>
        </EuiText>
      </EuiFormRow>

      <EuiFormRow label="Verification code">
        <EuiFieldText
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength={6}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Backup code (optional)">
        <EuiFieldText
          value={backupCode}
          onChange={(e) => setBackupCode(e.target.value)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiFlexGroup gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiButton type="submit" fill>
              Verify
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleResend}>Resend code</EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFormRow>
    </EuiForm>
  )
}

export default TwoFactorAuthForm
