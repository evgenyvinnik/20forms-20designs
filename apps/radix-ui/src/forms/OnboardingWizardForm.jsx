import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Select,
  Text,
  TextArea,
  TextField,
  Theme,
} from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3))
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1))

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <Theme>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <Text size="3" weight="bold">
            Step {step} of 3
          </Text>

          {step === 1 && (
            <>
              <Text size="2" weight="bold">
                Step 1: Account
              </Text>
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-email"
                >
                  Work email
                </Text>
                <TextField.Root
                  id="radix-onboard-email"
                  name="email"
                  type="email"
                  placeholder="Enter your work email"
                  required
                />
              </Box>
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-password"
                >
                  Password
                </Text>
                <TextField.Root
                  id="radix-onboard-password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  minLength={8}
                  required
                />
              </Box>
            </>
          )}

          {step === 2 && (
            <>
              <Text size="2" weight="bold">
                Step 2: Team
              </Text>
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-team-name"
                >
                  Team name
                </Text>
                <TextField.Root
                  id="radix-onboard-team-name"
                  name="teamName"
                  type="text"
                  placeholder="Enter team name"
                  required
                />
              </Box>
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-team-size"
                >
                  Team size
                </Text>
                <Select.Root name="teamSize" required>
                  <Select.Trigger
                    id="radix-onboard-team-size"
                    placeholder="Select size"
                  />
                  <Select.Content>
                    <Select.Item value="1-5">1-5</Select.Item>
                    <Select.Item value="6-20">6-20</Select.Item>
                    <Select.Item value="21-50">21-50</Select.Item>
                    <Select.Item value="50+">50+</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Box>
            </>
          )}

          {step === 3 && (
            <>
              <Text size="2" weight="bold">
                Step 3: Preferences
              </Text>
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-goal"
                >
                  Primary goal
                </Text>
                <TextArea
                  id="radix-onboard-goal"
                  name="goal"
                  rows="3"
                  placeholder="Tell us your primary goal"
                  required
                />
              </Box>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox name="updates" />
                  Send me product tips
                </Flex>
              </Text>
            </>
          )}

          <Flex gap="3" justify="between">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={handlePrev}>
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button type="submit">Finish setup</Button>
            )}
          </Flex>
        </Flex>
      </form>
    </Theme>
  )
}

export default OnboardingWizardForm
