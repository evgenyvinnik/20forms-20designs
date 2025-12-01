import { useState, useCallback } from 'react'
import {
  Field,
  Input,
  Textarea,
  Checkbox,
  Select,
} from '@zendeskgarden/react-forms'
import { Button } from '@zendeskgarden/react-buttons'
import { Grid } from '@zendeskgarden/react-grid'
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
        <Grid.Row>
          <Grid.Col>
            <MD isBold>Step 1: Account</MD>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '8px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Work email</Field.Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Password</Field.Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '24px' }}>
          <Grid.Col>
            <MD isBold>Step 2: Team</MD>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '8px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Team name</Field.Label>
              <Input
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Team size</Field.Label>
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
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '24px' }}>
          <Grid.Col>
            <MD isBold>Step 3: Preferences</MD>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '8px' }}>
          <Grid.Col>
            <Field>
              <Field.Label>Primary goal</Field.Label>
              <Textarea
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                rows={3}
                required
              />
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '16px' }}>
          <Grid.Col>
            <Field>
              <Checkbox
                checked={updates}
                onChange={(e) => setUpdates(e.target.checked)}
              >
                <Field.Label>Send me product tips</Field.Label>
              </Checkbox>
            </Field>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row style={{ marginTop: '24px' }}>
          <Grid.Col>
            <Button
              onClick={() => alert('Back action placeholder')}
              style={{ marginRight: '8px' }}
            >
              Back
            </Button>
            <Button type="submit" isPrimary>
              Finish setup
            </Button>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </form>
  )
}

export default OnboardingWizardForm
