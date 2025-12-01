import {
  Button,
  Field,
  Input,
  Stack,
  Textarea,
  Checkbox,
  NativeSelect,
  Box,
  Heading,
} from '@chakra-ui/react'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <Box>
          <Heading size="md" mb={3}>
            Step 1: Account
          </Heading>
          <Stack gap={4}>
            <Field.Root required>
              <Field.Label>Work email</Field.Label>
              <Input id="chakra-onboarding-email" name="email" type="email" />
            </Field.Root>
            <Field.Root required>
              <Field.Label>Password</Field.Label>
              <Input
                id="chakra-onboarding-password"
                name="password"
                type="password"
                minLength={8}
              />
            </Field.Root>
          </Stack>
        </Box>
        <Box>
          <Heading size="md" mb={3}>
            Step 2: Team
          </Heading>
          <Stack gap={4}>
            <Field.Root required>
              <Field.Label>Team name</Field.Label>
              <Input
                id="chakra-onboarding-team-name"
                name="teamName"
                type="text"
              />
            </Field.Root>
            <Field.Root required>
              <Field.Label>Team size</Field.Label>
              <NativeSelect.Root>
                <NativeSelect.Field id="chakra-onboarding-size" name="teamSize">
                  <option value="">Select size</option>
                  <option value="1-5">1-5</option>
                  <option value="6-20">6-20</option>
                  <option value="21-50">21-50</option>
                  <option value="50+">50+</option>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
            </Field.Root>
          </Stack>
        </Box>
        <Box>
          <Heading size="md" mb={3}>
            Step 3: Preferences
          </Heading>
          <Stack gap={4}>
            <Field.Root required>
              <Field.Label>Primary goal</Field.Label>
              <Textarea id="chakra-onboarding-goal" name="goal" rows={3} />
            </Field.Root>
            <Checkbox.Root name="updates">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Send me product tips</Checkbox.Label>
            </Checkbox.Root>
          </Stack>
        </Box>
        <Stack direction="row" gap={3}>
          <Button
            type="button"
            variant="outline"
            onClick={() => alert('Back action placeholder')}
          >
            Back
          </Button>
          <Button type="submit" colorPalette="blue">
            Finish setup
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default OnboardingWizardForm
