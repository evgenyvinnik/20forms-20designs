import {
  Button,
  Checkbox,
  Stack,
  TextInput,
  Textarea,
  Select,
  Title,
  Group,
  Box,
  PasswordInput,
} from '@mantine/core'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="lg">
        <Box>
          <Title order={4} mb="sm">
            Step 1: Account
          </Title>
          <Stack gap="md">
            <TextInput
              id="mantine-onboarding-email"
              name="email"
              label="Work email"
              type="email"
              required
            />
            <PasswordInput
              id="mantine-onboarding-password"
              name="password"
              label="Password"
              minLength={8}
              required
            />
          </Stack>
        </Box>
        <Box>
          <Title order={4} mb="sm">
            Step 2: Team
          </Title>
          <Stack gap="md">
            <TextInput
              id="mantine-onboarding-team-name"
              name="teamName"
              label="Team name"
              type="text"
              required
            />
            <Select
              id="mantine-onboarding-size"
              name="teamSize"
              label="Team size"
              placeholder="Select size"
              data={[
                { value: '1-5', label: '1-5' },
                { value: '6-20', label: '6-20' },
                { value: '21-50', label: '21-50' },
                { value: '50+', label: '50+' },
              ]}
              required
            />
          </Stack>
        </Box>
        <Box>
          <Title order={4} mb="sm">
            Step 3: Preferences
          </Title>
          <Stack gap="md">
            <Textarea
              id="mantine-onboarding-goal"
              name="goal"
              label="Primary goal"
              rows={3}
              required
            />
            <Checkbox name="updates" label="Send me product tips" />
          </Stack>
        </Box>
        <Group>
          <Button
            variant="outline"
            type="button"
            onClick={() => alert('Back action placeholder')}
          >
            Back
          </Button>
          <Button type="submit">Finish setup</Button>
        </Group>
      </Stack>
    </form>
  )
}

export default OnboardingWizardForm
