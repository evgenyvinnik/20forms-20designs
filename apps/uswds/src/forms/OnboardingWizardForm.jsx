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

function OnboardingWizardForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
    heading: { color: '#f0f0f0' },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <section>
        <h3 style={theme === 'dark' ? darkStyles.heading : undefined}>
          Step 1: Account
        </h3>
        <FormGroup>
          <Label
            htmlFor="uswds-onboarding-email"
            style={theme === 'dark' ? darkStyles.label : undefined}
          >
            Work email
          </Label>
          <TextInput
            id="uswds-onboarding-email"
            name="email"
            type="email"
            required
            style={theme === 'dark' ? darkStyles.input : undefined}
          />
        </FormGroup>
        <FormGroup>
          <Label
            htmlFor="uswds-onboarding-password"
            style={theme === 'dark' ? darkStyles.label : undefined}
          >
            Password
          </Label>
          <TextInput
            id="uswds-onboarding-password"
            name="password"
            type="password"
            minLength={8}
            required
            style={theme === 'dark' ? darkStyles.input : undefined}
          />
        </FormGroup>
      </section>
      <section>
        <h3 style={theme === 'dark' ? darkStyles.heading : undefined}>
          Step 2: Team
        </h3>
        <FormGroup>
          <Label
            htmlFor="uswds-onboarding-team-name"
            style={theme === 'dark' ? darkStyles.label : undefined}
          >
            Team name
          </Label>
          <TextInput
            id="uswds-onboarding-team-name"
            name="teamName"
            type="text"
            required
            style={theme === 'dark' ? darkStyles.input : undefined}
          />
        </FormGroup>
        <FormGroup>
          <Label
            htmlFor="uswds-onboarding-size"
            style={theme === 'dark' ? darkStyles.label : undefined}
          >
            Team size
          </Label>
          <Select
            id="uswds-onboarding-size"
            name="teamSize"
            required
            style={theme === 'dark' ? darkStyles.input : undefined}
          >
            <option value="">Select size</option>
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="21-50">21-50</option>
            <option value="50+">50+</option>
          </Select>
        </FormGroup>
      </section>
      <section>
        <h3 style={theme === 'dark' ? darkStyles.heading : undefined}>
          Step 3: Preferences
        </h3>
        <FormGroup>
          <Label
            htmlFor="uswds-onboarding-goal"
            style={theme === 'dark' ? darkStyles.label : undefined}
          >
            Primary goal
          </Label>
          <Textarea
            id="uswds-onboarding-goal"
            name="goal"
            required
            style={theme === 'dark' ? darkStyles.input : undefined}
          />
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
