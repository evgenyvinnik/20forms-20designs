import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import Heading from '@atlaskit/heading'
import { Box, Stack, Inline } from '@atlaskit/primitives'

const teamSizeOptions = [
  { label: '1-5', value: '1-5' },
  { label: '6-20', value: '6-20' },
  { label: '21-50', value: '21-50' },
  { label: '50+', value: '50+' },
]

function OnboardingWizardForm() {
  const [teamSize, setTeamSize] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.300">
        <Box>
          <Heading size="small">Step 1: Account</Heading>
          <Stack space="space.200">
            <Box>
              <Label htmlFor="atlaskit-onboarding-email">Work email</Label>
              <Textfield
                id="atlaskit-onboarding-email"
                name="email"
                type="email"
                isRequired
              />
            </Box>
            <Box>
              <Label htmlFor="atlaskit-onboarding-password">Password</Label>
              <Textfield
                id="atlaskit-onboarding-password"
                name="password"
                type="password"
                isRequired
              />
            </Box>
          </Stack>
        </Box>
        <Box>
          <Heading size="small">Step 2: Team</Heading>
          <Stack space="space.200">
            <Box>
              <Label htmlFor="atlaskit-onboarding-team-name">Team name</Label>
              <Textfield
                id="atlaskit-onboarding-team-name"
                name="teamName"
                isRequired
              />
            </Box>
            <Box>
              <Label htmlFor="atlaskit-onboarding-size">Team size</Label>
              <Select
                inputId="atlaskit-onboarding-size"
                name="teamSize"
                options={teamSizeOptions}
                value={teamSize}
                onChange={setTeamSize}
                placeholder="Select size"
                isRequired
              />
            </Box>
          </Stack>
        </Box>
        <Box>
          <Heading size="small">Step 3: Preferences</Heading>
          <Stack space="space.200">
            <Box>
              <Label htmlFor="atlaskit-onboarding-goal">Primary goal</Label>
              <TextArea
                id="atlaskit-onboarding-goal"
                name="goal"
                isRequired
              />
            </Box>
            <Box>
              <Checkbox
                name="updates"
                label="Send me product tips"
              />
            </Box>
          </Stack>
        </Box>
        <Inline space="space.100">
          <Button
            appearance="subtle"
            onClick={() => alert('Back action placeholder')}
          >
            Back
          </Button>
          <Button type="submit" appearance="primary">Finish setup</Button>
        </Inline>
      </Stack>
    </form>
  )
}

export default OnboardingWizardForm
