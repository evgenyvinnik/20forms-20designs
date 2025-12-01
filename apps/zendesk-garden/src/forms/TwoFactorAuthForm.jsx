import { useState, useCallback } from 'react'
import { Field, Label, Input } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { Paragraph } from '@zendeskgarden/react-typography'

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
        <Row>
          <Col>
            <Paragraph>
              Enter the code from your authenticator app or SMS.
            </Paragraph>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Verification code</Label>
              <Input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                inputMode="numeric"
                maxLength={6}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Backup code (optional)</Label>
              <Input
                value={backupCode}
                onChange={(e) => setBackupCode(e.target.value)}
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary style={{ marginRight: '8px' }}>
              Verify
            </Button>
            <Button onClick={() => alert('A new code has been sent!')}>
              Resend code
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default TwoFactorAuthForm
