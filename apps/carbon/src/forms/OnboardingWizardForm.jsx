import { Form, TextInput, Select, SelectItem, TextArea, Button, Checkbox, Stack } from '@carbon/react'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <section>
          <h3>Step 1: Account</h3>
          <Stack gap={4}>
            <TextInput
              id="carbon-onboarding-email"
              name="email"
              type="email"
              labelText="Work email"
              required
            />
            <TextInput
              id="carbon-onboarding-password"
              name="password"
              type="password"
              labelText="Password"
              required
            />
          </Stack>
        </section>
        <section>
          <h3>Step 2: Team</h3>
          <Stack gap={4}>
            <TextInput
              id="carbon-onboarding-team-name"
              name="teamName"
              labelText="Team name"
              required
            />
            <Select
              id="carbon-onboarding-size"
              name="teamSize"
              labelText="Team size"
              defaultValue=""
              required
            >
              <SelectItem value="" text="Select size" />
              <SelectItem value="1-5" text="1-5" />
              <SelectItem value="6-20" text="6-20" />
              <SelectItem value="21-50" text="21-50" />
              <SelectItem value="50+" text="50+" />
            </Select>
          </Stack>
        </section>
        <section>
          <h3>Step 3: Preferences</h3>
          <Stack gap={4}>
            <TextArea
              id="carbon-onboarding-goal"
              name="goal"
              labelText="Primary goal"
              rows={3}
              required
            />
            <Checkbox
              id="carbon-onboarding-updates"
              name="updates"
              labelText="Send me product tips"
            />
          </Stack>
        </section>
        <Stack gap={4} orientation="horizontal">
          <Button
            kind="secondary"
            onClick={() => alert('Back action placeholder')}
          >
            Back
          </Button>
          <Button type="submit">Finish setup</Button>
        </Stack>
      </Stack>
    </Form>
  )
}

export default OnboardingWizardForm
