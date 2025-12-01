import { Form, Button, ButtonToolbar, SelectPicker, Input, Checkbox, Panel } from 'rsuite'

const teamSizeOptions = [
  { label: '1-5', value: '1-5' },
  { label: '6-20', value: '6-20' },
  { label: '21-50', value: '21-50' },
  { label: '50+', value: '50+' },
]

function OnboardingWizardForm() {
  const handleSubmit = () => {
    alert('Onboarding complete!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Panel header="Step 1: Account" bordered style={{ marginBottom: 16 }}>
        <Form.Group controlId="email">
          <Form.ControlLabel>Work email</Form.ControlLabel>
          <Form.Control name="email" type="email" required />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control name="password" type="password" minLength={8} required />
        </Form.Group>
      </Panel>

      <Panel header="Step 2: Team" bordered style={{ marginBottom: 16 }}>
        <Form.Group controlId="teamName">
          <Form.ControlLabel>Team name</Form.ControlLabel>
          <Form.Control name="teamName" type="text" required />
        </Form.Group>

        <Form.Group controlId="teamSize">
          <Form.ControlLabel>Team size</Form.ControlLabel>
          <Form.Control
            name="teamSize"
            accepter={SelectPicker}
            data={teamSizeOptions}
            placeholder="Select size"
            block
            required
          />
        </Form.Group>
      </Panel>

      <Panel header="Step 3: Preferences" bordered style={{ marginBottom: 16 }}>
        <Form.Group controlId="goal">
          <Form.ControlLabel>Primary goal</Form.ControlLabel>
          <Form.Control name="goal" accepter={Input} as="textarea" rows={3} required />
        </Form.Group>

        <Form.Group controlId="updates">
          <Checkbox name="updates">Send me product tips</Checkbox>
        </Form.Group>
      </Panel>

      <Form.Group>
        <ButtonToolbar>
          <Button appearance="default" onClick={() => alert('Back action placeholder')}>
            Back
          </Button>
          <Button appearance="primary" type="submit">
            Finish setup
          </Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  )
}

export default OnboardingWizardForm
