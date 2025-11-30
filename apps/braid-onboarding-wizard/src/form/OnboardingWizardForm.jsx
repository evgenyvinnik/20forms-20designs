import { useState, useCallback } from 'react'
import {
  Box,
  Stack,
  TextField,
  PasswordField,
  Dropdown,
  Textarea,
  Checkbox,
  Button,
  Inline,
  Heading,
} from 'braid-design-system'

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

  const handleBack = useCallback(() => {
    alert('Back action placeholder')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="large">
        <section>
          <Stack space="medium">
            <Heading level="3">Step 1: Account</Heading>
            <TextField
              id="braid-onboarding-email"
              label="Work email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PasswordField
              id="braid-onboarding-password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Stack>
        </section>

        <section>
          <Stack space="medium">
            <Heading level="3">Step 2: Team</Heading>
            <TextField
              id="braid-onboarding-team-name"
              label="Team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
            <Dropdown
              id="braid-onboarding-size"
              label="Team size"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              placeholder="Select size"
            >
              <option value="1-5">1-5</option>
              <option value="6-20">6-20</option>
              <option value="21-50">21-50</option>
              <option value="50+">50+</option>
            </Dropdown>
          </Stack>
        </section>

        <section>
          <Stack space="medium">
            <Heading level="3">Step 3: Preferences</Heading>
            <Textarea
              id="braid-onboarding-goal"
              label="Primary goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              lines={3}
              required
            />
            <Checkbox
              id="braid-onboarding-updates"
              label="Send me product tips"
              checked={updates}
              onChange={(e) => setUpdates(e.target.checked)}
            />
          </Stack>
        </section>

        <Box>
          <Inline space="small">
            <Button type="button" variant="transparent" onClick={handleBack}>
              Back
            </Button>
            <Button type="submit">Finish setup</Button>
          </Inline>
        </Box>
      </Stack>
    </form>
  )
}

export default OnboardingWizardForm
