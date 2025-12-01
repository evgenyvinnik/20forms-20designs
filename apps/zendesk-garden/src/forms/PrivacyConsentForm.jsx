import { useState, useCallback } from 'react'
import { Field, Input, Textarea, Checkbox } from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid } from '@zendeskgarden/react-grid'
import { MD } from '@zendeskgarden/react-typography'

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
        <Grid.Row>
          <Grid.Col>
            <Field>
              <Field.Label>Full name</Field.Label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Email address</Field.Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '24px' }}>
          <Grid.Col>
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
              <MD isBold style={{ marginBottom: '8px' }}>
                Communication channels
              </MD>
              <Field style={{ marginBottom: '8px' }}>
                <Checkbox
                  checked={emailOptIn}
                  onChange={(e) => setEmailOptIn(e.target.checked)}
                >
                  <Field.Label>Email updates</Field.Label>
                </Checkbox>
              </Field>
              <Field style={{ marginBottom: '8px' }}>
                <Checkbox
                  checked={smsOptIn}
                  onChange={(e) => setSmsOptIn(e.target.checked)}
                >
                  <Field.Label>SMS notifications</Field.Label>
                </Checkbox>
              </Field>
              <Field>
                <Checkbox
                  checked={phoneOptIn}
                  onChange={(e) => setPhoneOptIn(e.target.checked)}
                >
                  <Field.Label>Phone calls</Field.Label>
                </Checkbox>
              </Field>
            </fieldset>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '24px' }}>
          <Grid.Col>
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
              <MD isBold style={{ marginBottom: '8px' }}>
                Privacy options
              </MD>
              <Field style={{ marginBottom: '8px' }}>
                <Checkbox
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                >
                  <Field.Label>Allow analytics cookies</Field.Label>
                </Checkbox>
              </Field>
              <Field>
                <Checkbox
                  checked={personalization}
                  onChange={(e) => setPersonalization(e.target.checked)}
                >
                  <Field.Label>Allow personalized content</Field.Label>
                </Checkbox>
              </Field>
            </fieldset>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Additional notes</Field.Label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '24px' }}>
          <Grid.Col>
            <Button type="submit" isPrimary>
              Save preferences
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </form>
  )
}

export default PrivacyConsentForm
