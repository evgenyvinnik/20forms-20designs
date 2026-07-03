import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Heading,
  Select,
  TextArea,
  TextInput,
} from 'grommet'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Box margin={{ bottom: 'medium' }}>
        <Heading level={3} margin={{ bottom: 'small' }}>
          Step 1: Account
        </Heading>
        <FormField
          label="Work email"
          name="email"
          htmlFor="grommet-onboarding-email"
          required
        >
          <TextInput id="grommet-onboarding-email" name="email" type="email" />
        </FormField>
        <FormField
          label="Password"
          name="password"
          htmlFor="grommet-onboarding-password"
          required
        >
          <TextInput
            id="grommet-onboarding-password"
            name="password"
            type="password"
          />
        </FormField>
      </Box>

      <Box margin={{ bottom: 'medium' }}>
        <Heading level={3} margin={{ bottom: 'small' }}>
          Step 2: Team
        </Heading>
        <FormField
          label="Team name"
          name="teamName"
          htmlFor="grommet-onboarding-team-name"
          required
        >
          <TextInput
            id="grommet-onboarding-team-name"
            name="teamName"
            type="text"
          />
        </FormField>
        <FormField
          label="Team size"
          name="teamSize"
          htmlFor="grommet-onboarding-size"
          required
        >
          <Select
            id="grommet-onboarding-size"
            name="teamSize"
            options={['1-5', '6-20', '21-50', '50+']}
          />
        </FormField>
      </Box>

      <Box margin={{ bottom: 'medium' }}>
        <Heading level={3} margin={{ bottom: 'small' }}>
          Step 3: Preferences
        </Heading>
        <FormField
          label="Primary goal"
          name="goal"
          htmlFor="grommet-onboarding-goal"
          required
        >
          <TextArea id="grommet-onboarding-goal" name="goal" rows={3} />
        </FormField>
        <FormField name="updates" htmlFor="grommet-onboarding-updates">
          <CheckBox
            id="grommet-onboarding-updates"
            name="updates"
            label="Send me product tips"
          />
        </FormField>
      </Box>

      <Box direction="row" gap="medium" margin={{ top: 'medium' }}>
        <Button
          type="button"
          label="Back"
          onClick={() => alert('Back action placeholder')}
        />
        <Button type="submit" primary label="Finish setup" />
      </Box>
    </Form>
  )
}

export default OnboardingWizardForm
