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
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-first-name"
                >
                  First name
                </Text>
                <TextField.Root
                  id="radix-onboard-first-name"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  required
                />
              </Box>
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-last-name"
                >
                  Last name
                </Text>
                <TextField.Root
                  id="radix-onboard-last-name"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  required
                />
              </Box>
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-email"
                >
                  Email address
                </Text>
                <TextField.Root
                  id="radix-onboard-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Box>
            </>
          )}

          {step === 2 && (
            <>
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-company"
                >
                  Company name
                </Text>
                <TextField.Root
                  id="radix-onboard-company"
                  name="company"
                  type="text"
                  placeholder="Enter company name"
                />
              </Box>
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-role"
                >
                  Your role
                </Text>
                <Select.Root name="role">
                  <Select.Trigger
                    id="radix-onboard-role"
                    placeholder="Select role"
                  />
                  <Select.Content>
                    <Select.Item value="developer">Developer</Select.Item>
                    <Select.Item value="designer">Designer</Select.Item>
                    <Select.Item value="manager">Manager</Select.Item>
                    <Select.Item value="executive">Executive</Select.Item>
                    <Select.Item value="other">Other</Select.Item>
                  </Select.Content>
                </Select.Root>
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
                <Select.Root name="teamSize">
                  <Select.Trigger
                    id="radix-onboard-team-size"
                    placeholder="Select team size"
                  />
                  <Select.Content>
                    <Select.Item value="1">Just me</Select.Item>
                    <Select.Item value="2-10">2-10</Select.Item>
                    <Select.Item value="11-50">11-50</Select.Item>
                    <Select.Item value="51-200">51-200</Select.Item>
                    <Select.Item value="200+">200+</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Box>
            </>
          )}

          {step === 3 && (
            <>
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-goals"
                >
                  What are your goals?
                </Text>
                <TextArea
                  id="radix-onboard-goals"
                  name="goals"
                  rows="3"
                  placeholder="Tell us what you want to achieve"
                />
              </Box>
              <Box>
                <Text
                  as="label"
                  size="2"
                  weight="medium"
                  htmlFor="radix-onboard-hear-about"
                >
                  How did you hear about us?
                </Text>
                <Select.Root name="hearAbout">
                  <Select.Trigger
                    id="radix-onboard-hear-about"
                    placeholder="Select"
                  />
                  <Select.Content>
                    <Select.Item value="search">Search Engine</Select.Item>
                    <Select.Item value="social">Social Media</Select.Item>
                    <Select.Item value="friend">Friend/Colleague</Select.Item>
                    <Select.Item value="blog">Blog/Article</Select.Item>
                    <Select.Item value="other">Other</Select.Item>
                  </Select.Content>
                </Select.Root>
              </Box>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox name="newsletter" />
                  Subscribe to our newsletter
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <Checkbox name="terms" required />I agree to the terms of
                  service
                </Flex>
              </Text>
            </>
          )}

          <Flex gap="3" justify="between">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={handlePrev}>
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button type="submit">Complete setup</Button>
            )}
          </Flex>
        </Flex>
      </form>
    </Theme>
  )
}

export default OnboardingWizardForm
