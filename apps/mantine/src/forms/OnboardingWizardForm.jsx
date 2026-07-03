import { useState } from 'react'
import {
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core'

function OnboardingWizardForm() {
  const [teamSize, setTeamSize] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <Text size="lg" fw={600}>
          Step 1: Account
        </Text>
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

        <Text size="lg" fw={600} mt="sm">
          Step 2: Team
        </Text>
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
          value={teamSize}
          onChange={setTeamSize}
          data={[
            { value: '1-5', label: '1-5' },
            { value: '6-20', label: '6-20' },
            { value: '21-50', label: '21-50' },
            { value: '50+', label: '50+' },
          ]}
          required
        />

        <Text size="lg" fw={600} mt="sm">
          Step 3: Preferences
        </Text>
        <Textarea
          id="mantine-onboarding-goal"
          name="goal"
          label="Primary goal"
          rows={3}
          required
        />
        <Checkbox name="updates" label="Send me product tips" />

        <Group justify="space-between" mt="md">
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
