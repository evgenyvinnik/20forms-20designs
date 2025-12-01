import {
  Form,
  Button,
  Checkbox,
  Select,
  Segment,
  Header,
} from 'semantic-ui-react'

const teamSizeOptions = [
  { key: '', value: '', text: 'Select size' },
  { key: '1-5', value: '1-5', text: '1-5' },
  { key: '6-20', value: '6-20', text: '6-20' },
  { key: '21-50', value: '21-50', text: '21-50' },
  { key: '50+', value: '50+', text: '50+' },
]

function OnboardingWizardForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Setup complete!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Segment inverted={inverted}>
        <Header as="h3" inverted={inverted}>
          Step 1: Account
        </Header>
        <Form.Input
          id="semantic-ui-onboarding-wizard-email"
          name="email"
          label="Work email"
          type="email"
          required
        />
        <Form.Input
          id="semantic-ui-onboarding-wizard-password"
          name="password"
          label="Password"
          type="password"
          required
          minLength={8}
        />
      </Segment>

      <Segment inverted={inverted}>
        <Header as="h3" inverted={inverted}>
          Step 2: Team
        </Header>
        <Form.Input
          id="semantic-ui-onboarding-wizard-team-name"
          name="teamName"
          label="Team name"
          type="text"
          required
        />
        <Form.Field required>
          <label>Team size</label>
          <Select
            name="teamSize"
            options={teamSizeOptions}
            placeholder="Select size"
            required
          />
        </Form.Field>
      </Segment>

      <Segment inverted={inverted}>
        <Header as="h3" inverted={inverted}>
          Step 3: Preferences
        </Header>
        <Form.TextArea
          id="semantic-ui-onboarding-wizard-goal"
          name="goal"
          label="Primary goal"
          rows={3}
          required
        />
        <Form.Field>
          <Checkbox name="updates" label="Send me product tips" />
        </Form.Field>
      </Segment>

      <Button type="button" basic onClick={() => alert('Back placeholder')}>
        Back
      </Button>
      <Button type="submit" primary>
        Finish setup
      </Button>
    </Form>
  )
}

export default OnboardingWizardForm
