import { Form, Button } from 'react-bootstrap'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-privacy-name">
        <Form.Label>Full name</Form.Label>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-privacy-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <fieldset className="mb-3">
        <legend>Communication channels</legend>
        <Form.Check type="checkbox" name="emailOptIn" label="Email updates" />
        <Form.Check type="checkbox" name="smsOptIn" label="SMS notifications" />
        <Form.Check type="checkbox" name="phoneOptIn" label="Phone calls" />
      </fieldset>

      <fieldset className="mb-3">
        <legend>Privacy options</legend>
        <Form.Check type="checkbox" name="analytics" label="Allow analytics cookies" />
        <Form.Check
          type="checkbox"
          name="personalization"
          label="Allow personalized content"
        />
      </fieldset>

      <Form.Group className="mb-3" controlId="rb-privacy-notes">
        <Form.Label>Additional notes</Form.Label>
        <Form.Control as="textarea" name="notes" rows={3} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save preferences
      </Button>
    </Form>
  )
}

export default PrivacyConsentForm
