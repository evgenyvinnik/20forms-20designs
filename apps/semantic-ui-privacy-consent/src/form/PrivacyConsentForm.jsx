import { Form, Button, Checkbox, Segment, Header } from 'semantic-ui-react'

function PrivacyConsentForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Preferences saved!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-privacy-consent-fullname"
        name="fullName"
        label="Full name"
        type="text"
        required
      />
      <Form.Input
        id="semantic-ui-privacy-consent-email"
        name="email"
        label="Email address"
        type="email"
        required
      />

      <Segment inverted={inverted}>
        <Header as="h4" inverted={inverted}>Communication channels</Header>
        <Form.Field>
          <Checkbox
            name="emailOptIn"
            label="Email updates"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            name="smsOptIn"
            label="SMS notifications"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            name="phoneOptIn"
            label="Phone calls"
          />
        </Form.Field>
      </Segment>

      <Segment inverted={inverted}>
        <Header as="h4" inverted={inverted}>Privacy options</Header>
        <Form.Field>
          <Checkbox
            name="analytics"
            label="Allow analytics cookies"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            name="personalization"
            label="Allow personalized content"
          />
        </Form.Field>
      </Segment>

      <Form.TextArea
        id="semantic-ui-privacy-consent-notes"
        name="notes"
        label="Additional notes"
        rows={3}
      />

      <Button type="submit" primary>
        Save preferences
      </Button>
    </Form>
  )
}

export default PrivacyConsentForm
