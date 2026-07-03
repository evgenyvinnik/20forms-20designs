import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  SelectList,
  TextArea,
  TextField,
} from 'gestalt'

function OnboardingWizardForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [goal, setGoal] = useState('')
  const [updates, setUpdates] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={6}>
        <Box>
          <Heading accessibilityLevel={3} size="400">
            Step 1: Account
          </Heading>
          <Box marginTop={3}>
            <Flex direction="column" gap={4}>
              <TextField
                id="gestalt-onboard-email"
                label="Work email"
                onChange={({ value }) => setEmail(value)}
                type="email"
                value={email}
              />
              <TextField
                id="gestalt-onboard-password"
                label="Password"
                onChange={({ value }) => setPassword(value)}
                type="password"
                value={password}
              />
            </Flex>
          </Box>
        </Box>

        <Box>
          <Heading accessibilityLevel={3} size="400">
            Step 2: Team
          </Heading>
          <Box marginTop={3}>
            <Flex direction="column" gap={4}>
              <TextField
                id="gestalt-onboard-team-name"
                label="Team name"
                onChange={({ value }) => setTeamName(value)}
                type="text"
                value={teamName}
              />
              <SelectList
                id="gestalt-onboard-size"
                label="Team size"
                onChange={({ value }) => setTeamSize(value)}

                value={teamSize}
              >
                {[
                  { label: '1-5', value: '1-5' },
                  { label: '6-20', value: '6-20' },
                  { label: '21-50', value: '21-50' },
                  { label: '50+', value: '50+' },
                ].map(({ label, value }) => (
                  <SelectList.Option key={value} label={label} value={value} />
                ))}
              </SelectList>
            </Flex>
          </Box>
        </Box>

        <Box>
          <Heading accessibilityLevel={3} size="400">
            Step 3: Preferences
          </Heading>
          <Box marginTop={3}>
            <Flex direction="column" gap={4}>
              <TextArea
                id="gestalt-onboard-goal"
                label="Primary goal"
                onChange={({ value }) => setGoal(value)}
                value={goal}
              />
              <Checkbox
                checked={updates}
                id="gestalt-onboard-updates"
                label="Send me product tips"
                onChange={({ checked }) => setUpdates(checked)}
              />
            </Flex>
          </Box>
        </Box>

        <Flex gap={2}>
          <Button
            color="gray"
            onClick={() => alert('Back action placeholder')}
            text="Back"
          />
          <Button color="red" text="Finish setup" type="submit" />
        </Flex>
      </Flex>
    </form>
  )
}

export default OnboardingWizardForm
