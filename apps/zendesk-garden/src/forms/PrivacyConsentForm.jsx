import { useState, useCallback } from 'react'
import {
  Field,
  Label,
  Input,
  Textarea,
  Checkbox,
} from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { SM } from '@zendeskgarden/react-typography'

function PrivacyConsentForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [emailOptIn, setEmailOptIn] = useState(false)
  const [smsOptIn, setSmsOptIn] = useState(false)
  const [phoneOptIn, setPhoneOptIn] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [personalization, setPersonalization] = useState(false)
  const [notes, setNotes] = useState('')

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <Field>
              <Label>Full name</Label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Field>
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
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
              <SM isBold tag="div" style={{ marginBottom: '8px' }}>
                Communication channels
              </SM>
              <Field style={{ marginBottom: '8px' }}>
                <Checkbox
                  checked={emailOptIn}
                  onChange={(e) => setEmailOptIn(e.target.checked)}
                >
                  <Label>Email updates</Label>
                </Checkbox>
              </Field>
              <Field style={{ marginBottom: '8px' }}>
                <Checkbox
                  checked={smsOptIn}
                  onChange={(e) => setSmsOptIn(e.target.checked)}
                >
                  <Label>SMS notifications</Label>
                </Checkbox>
              </Field>
              <Field>
                <Checkbox
                  checked={phoneOptIn}
                  onChange={(e) => setPhoneOptIn(e.target.checked)}
                >
                  <Label>Phone calls</Label>
                </Checkbox>
              </Field>
            </fieldset>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
              <SM isBold tag="div" style={{ marginBottom: '8px' }}>
                Privacy options
              </SM>
              <Field style={{ marginBottom: '8px' }}>
                <Checkbox
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                >
                  <Label>Allow analytics cookies</Label>
                </Checkbox>
              </Field>
              <Field>
                <Checkbox
                  checked={personalization}
                  onChange={(e) => setPersonalization(e.target.checked)}
                >
                  <Label>Allow personalized content</Label>
                </Checkbox>
              </Field>
            </fieldset>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Additional notes</Label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button type="submit" isPrimary>
              Save preferences
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default PrivacyConsentForm
