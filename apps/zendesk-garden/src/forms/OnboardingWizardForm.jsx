import { useState, useCallback } from 'react'
import {
  Field,
  Label,
  Input,
  Textarea,
  Checkbox,
  Select,
} from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { MD } from '@zendeskgarden/react-typography'

function OnboardingWizardForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [goal, setGoal] = useState('')
  const [updates, setUpdates] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col>
            <MD isBold tag="div">Step 1: Account</MD>
          </Col>
        </Row>

        <Row style={{ marginTop: '8px' }}>
          <Col>
            <Field>
              <Label>Work email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <MD isBold tag="div">Step 2: Team</MD>
          </Col>
        </Row>

        <Row style={{ marginTop: '8px' }}>
          <Col>
            <Field>
              <Label>Team name</Label>
              <Input
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Label>Team size</Label>
              <Select
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                required
              >
                <option value="">Select size</option>
                <option value="1-5">1-5</option>
                <option value="6-20">6-20</option>
                <option value="21-50">21-50</option>
                <option value="50+">50+</option>
              </Select>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <MD isBold tag="div">Step 3: Preferences</MD>
          </Col>
        </Row>

        <Row style={{ marginTop: '8px' }}>
          <Col>
            <Field>
              <Label>Primary goal</Label>
              <Textarea
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                rows={3}
                required
              />
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '16px' }}>
          <Col>
            <Field>
              <Checkbox
                checked={updates}
                onChange={(e) => setUpdates(e.target.checked)}
              >
                <Label>Send me product tips</Label>
              </Checkbox>
            </Field>
          </Col>
        </Row>

        <Row style={{ marginTop: '24px' }}>
          <Col>
            <Button
              onClick={() => alert('Back action placeholder')}
              style={{ marginRight: '8px' }}
            >
              Back
            </Button>
            <Button type="submit" isPrimary>
              Finish setup
            </Button>
          </Col>
        </Row>
      </Grid>
    </form>
  )
}

export default OnboardingWizardForm
