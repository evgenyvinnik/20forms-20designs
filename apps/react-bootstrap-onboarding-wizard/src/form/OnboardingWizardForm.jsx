import { Form, Button } from 'react-bootstrap'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <section className="mb-4">
        <h5>Step 1: Account</h5>
        <Form.Group className="mb-3" controlId="rb-onboarding-email">
          <Form.Label>Work email</Form.Label>
          <Form.Control name="email" type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rb-onboarding-password">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" minLength="8" required />
        </Form.Group>
      </section>

      <section className="mb-4">
        <h5>Step 2: Team</h5>
        <Form.Group className="mb-3" controlId="rb-onboarding-team-name">
          <Form.Label>Team name</Form.Label>
          <Form.Control name="teamName" type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rb-onboarding-team-size">
          <Form.Label>Team size</Form.Label>
          <Form.Select name="teamSize" required>
            <option value="">Select size</option>
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="21-50">21-50</option>
            <option value="50+">50+</option>
          </Form.Select>
        </Form.Group>
      </section>

      <section className="mb-4">
        <h5>Step 3: Preferences</h5>
        <Form.Group className="mb-3" controlId="rb-onboarding-goal">
          <Form.Label>Primary goal</Form.Label>
          <Form.Control as="textarea" name="goal" rows={3} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rb-onboarding-updates">
          <Form.Check
            type="checkbox"
            label="Send me product tips"
            name="updates"
          />
        </Form.Group>
      </section>

      <div className="d-flex gap-2 flex-wrap">
        <Button
          variant="secondary"
          type="button"
          onClick={() => alert('Back action placeholder')}
        >
          Back
        </Button>
        <Button variant="primary" type="submit">
          Finish setup
        </Button>
      </div>
    </Form>
  )
}

export default OnboardingWizardForm
