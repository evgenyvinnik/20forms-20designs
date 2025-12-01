import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
  Checkbox,
  ActionGroup,
  FormSelect,
  FormSelectOption,
  Title,
  FormSection,
} from '@patternfly/react-core'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormSection>
        <Title headingLevel="h3">Step 1: Account</Title>
        <FormGroup label="Work email" isRequired fieldId="pf-onboarding-email">
          <TextInput
            isRequired
            type="email"
            id="pf-onboarding-email"
            name="email"
          />
        </FormGroup>
        <FormGroup label="Password" isRequired fieldId="pf-onboarding-password">
          <TextInput
            isRequired
            type="password"
            id="pf-onboarding-password"
            name="password"
          />
        </FormGroup>
      </FormSection>

      <FormSection>
        <Title headingLevel="h3">Step 2: Team</Title>
        <FormGroup
          label="Team name"
          isRequired
          fieldId="pf-onboarding-team-name"
        >
          <TextInput
            isRequired
            type="text"
            id="pf-onboarding-team-name"
            name="teamName"
          />
        </FormGroup>
        <FormGroup label="Team size" isRequired fieldId="pf-onboarding-size">
          <FormSelect id="pf-onboarding-size" name="teamSize" isRequired>
            <FormSelectOption value="" label="Select size" isPlaceholder />
            <FormSelectOption value="1-5" label="1-5" />
            <FormSelectOption value="6-20" label="6-20" />
            <FormSelectOption value="21-50" label="21-50" />
            <FormSelectOption value="50+" label="50+" />
          </FormSelect>
        </FormGroup>
      </FormSection>

      <FormSection>
        <Title headingLevel="h3">Step 3: Preferences</Title>
        <FormGroup label="Primary goal" isRequired fieldId="pf-onboarding-goal">
          <TextArea isRequired id="pf-onboarding-goal" name="goal" rows={3} />
        </FormGroup>
        <FormGroup fieldId="pf-onboarding-updates">
          <Checkbox
            label="Send me product tips"
            id="pf-onboarding-updates"
            name="updates"
          />
        </FormGroup>
      </FormSection>

      <ActionGroup>
        <Button
          variant="secondary"
          onClick={() => alert('Back action placeholder')}
        >
          Back
        </Button>
        <Button variant="primary" type="submit">
          Finish setup
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default OnboardingWizardForm
