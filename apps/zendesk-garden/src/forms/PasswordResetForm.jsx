import { useState, useCallback } from 'react'
import { Field, Label, Input } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { Paragraph } from '@zendeskgarden/react-typography'

function PasswordResetForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Password reset link requested!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Paragraph>Request a password reset link via email.</Paragraph>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Email address</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Send reset link
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default PasswordResetForm
