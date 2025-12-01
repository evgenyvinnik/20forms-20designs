import { useState, useCallback } from 'react'
import { Field, Input } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid } from '@zendeskgarden/react-grid'
import { MD } from '@zendeskgarden/react-typography'

function TwoFactorAuthForm() {
  const [code, setCode] = useState('')
  const [backupCode, setBackupCode] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Verification submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <MD>Enter the code from your authenticator app or SMS.</MD>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Verification code</Field.Label>
              <Input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                inputMode="numeric"
                maxLength={6}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Backup code (optional)</Field.Label>
              <Input
                value={backupCode}
                onChange={(e) => setBackupCode(e.target.value)}
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '24px' }}>
          <Grid.Col>
            <Button type="submit" isPrimary style={{ marginRight: '8px' }}>
              Verify
            </Button>
            <Button onClick={() => alert('A new code has been sent!')}>
              Resend code
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </form>
  )
}

export default TwoFactorAuthForm
