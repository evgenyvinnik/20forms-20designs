import { useState, useCallback } from 'react'
import { Box, Stack, TextField, Button, Text, Inline } from 'braid-design-system'

function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [backupCode, setBackupCode] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <Text>Enter the code from your authenticator app or SMS.</Text>

        <TextField
          id="braid-two-factor-code"
          label="Verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          inputMode="numeric"
          maxLength={6}
          required
        />

        <TextField
          id="braid-two-factor-backup"
          label="Backup code (optional)"
          value={backupCode}
          onChange={(e) => setBackupCode(e.target.value)}
        />

        <Inline space="small">
          <Button type="submit">Verify</Button>
          <Button
            variant="ghost"
            onClick={() => alert('A new code has been sent!')}
          >
            Resend code
          </Button>
        </Inline>
      </Stack>
    </form>
  )
}

export default TwoFactorAuthForm
