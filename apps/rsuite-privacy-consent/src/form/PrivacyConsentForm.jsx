import { Form, Button, Checkbox, CheckboxGroup, Input } from 'rsuite'

function PrivacyConsentForm() {
  const handleSubmit = () => {
    alert('Privacy preferences saved!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="fullName">
        <Form.ControlLabel>Full name</Form.ControlLabel>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.ControlLabel>Email address</Form.ControlLabel>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group controlId="communicationChannels">
        <Form.ControlLabel>Communication channels</Form.ControlLabel>
        <CheckboxGroup name="communicationChannels">
          <Checkbox value="emailOptIn">Email updates</Checkbox>
          <Checkbox value="smsOptIn">SMS notifications</Checkbox>
          <Checkbox value="phoneOptIn">Phone calls</Checkbox>
        </CheckboxGroup>
      </Form.Group>

      <Form.Group controlId="privacyOptions">
        <Form.ControlLabel>Privacy options</Form.ControlLabel>
        <CheckboxGroup name="privacyOptions">
          <Checkbox value="analytics">Allow analytics cookies</Checkbox>
          <Checkbox value="personalization">
            Allow personalized content
          </Checkbox>
        </CheckboxGroup>
      </Form.Group>

      <Form.Group controlId="notes">
        <Form.ControlLabel>Additional notes</Form.ControlLabel>
        <Form.Control name="notes" accepter={Input} as="textarea" rows={3} />
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Save preferences
        </Button>
      </Form.Group>
    </Form>
  )
}

export default PrivacyConsentForm
