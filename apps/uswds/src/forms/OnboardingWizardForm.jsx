import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Textarea,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <section>
        <h3>Step 1: Account</h3>
        <FormGroup>
          <Label htmlFor="uswds-onboarding-email">Work email</Label>
          <TextInput
            id="uswds-onboarding-email"
            name="email"
            type="email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="uswds-onboarding-password">Password</Label>
          <TextInput
            id="uswds-onboarding-password"
            name="password"
            type="password"
            minLength={8}
            required
          />
        </FormGroup>
      </section>
      <section>
        <h3>Step 2: Team</h3>
        <FormGroup>
          <Label htmlFor="uswds-onboarding-team-name">Team name</Label>
          <TextInput
            id="uswds-onboarding-team-name"
            name="teamName"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="uswds-onboarding-size">Team size</Label>
          <Select id="uswds-onboarding-size" name="teamSize" required>
            <option value="">Select size</option>
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="21-50">21-50</option>
            <option value="50+">50+</option>
          </Select>
        </FormGroup>
      </section>
      <section>
        <h3>Step 3: Preferences</h3>
        <FormGroup>
          <Label htmlFor="uswds-onboarding-goal">Primary goal</Label>
          <Textarea id="uswds-onboarding-goal" name="goal" required />
        </FormGroup>
        <FormGroup>
          <Checkbox
            id="uswds-onboarding-updates"
            name="updates"
            label="Send me product tips"
          />
        </FormGroup>
      </section>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button
          type="button"
          outline
          onClick={() => alert('Back action placeholder')}
        >
          Back
        </Button>
        <Button type="submit">Finish setup</Button>
      </div>
    </Form>
  )
}

export default OnboardingWizardForm
