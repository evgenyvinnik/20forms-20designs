import {
  Box,
  FormControl,
  TextInput,
  Select,
  Textarea,
  Checkbox,
  Button,
  Heading,
} from '@primer/react'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Setup complete!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <section>
        <Heading as="h3" sx={{ fontSize: 2, mb: 3 }}>
          Account
        </Heading>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <FormControl required>
            <FormControl.Label>Work email</FormControl.Label>
            <TextInput
              id="primer-onboarding-email"
              name="email"
              type="email"
              block
            />
          </FormControl>

          <FormControl required>
            <FormControl.Label>Password</FormControl.Label>
            <TextInput
              id="primer-onboarding-password"
              name="password"
              type="password"
              minLength={8}
              block
            />
          </FormControl>
        </Box>
      </section>

      <section>
        <Heading as="h3" sx={{ fontSize: 2, mb: 3 }}>
          Team
        </Heading>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <FormControl required>
            <FormControl.Label>Team name</FormControl.Label>
            <TextInput
              id="primer-onboarding-teamname"
              name="teamName"
              type="text"
              block
            />
          </FormControl>

          <FormControl required>
            <FormControl.Label>Team size</FormControl.Label>
            <Select id="primer-onboarding-teamsize" name="teamSize" block>
              <Select.Option value="">Select size</Select.Option>
              <Select.Option value="1-5">1-5</Select.Option>
              <Select.Option value="6-20">6-20</Select.Option>
              <Select.Option value="21-50">21-50</Select.Option>
              <Select.Option value="50+">50+</Select.Option>
            </Select>
          </FormControl>
        </Box>
      </section>

      <section>
        <Heading as="h3" sx={{ fontSize: 2, mb: 3 }}>
          Preferences
        </Heading>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <FormControl required>
            <FormControl.Label>Primary goal</FormControl.Label>
            <Textarea id="primer-onboarding-goal" name="goal" rows={3} block />
          </FormControl>

          <FormControl>
            <Checkbox id="primer-onboarding-updates" name="updates" />
            <FormControl.Label>Send me product tips</FormControl.Label>
          </FormControl>
        </Box>
      </section>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          type="button"
          variant="default"
          onClick={() => alert('Going back placeholder')}
        >
          Back
        </Button>
        <Button type="submit" variant="primary" sx={{ flex: 1 }}>
          Finish setup
        </Button>
      </Box>
    </Box>
  )
}

export default OnboardingWizardForm
