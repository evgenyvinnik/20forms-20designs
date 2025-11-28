import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Checkbox,
  Container,
  FormField,
  Header,
  Input,
  SpaceBetween,
  Textarea,
} from '@cloudscape-design/components'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Full name">
            <Input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </FormField>
          <FormField label="Email address">
            <Input
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </FormField>

          <Container
            header={<Header variant="h3">Communication channels</Header>}
          >
            <SpaceBetween direction="vertical" size="s">
              <Checkbox name="emailOptIn">Email updates</Checkbox>
              <Checkbox name="smsOptIn">SMS notifications</Checkbox>
              <Checkbox name="phoneOptIn">Phone calls</Checkbox>
            </SpaceBetween>
          </Container>

          <Container header={<Header variant="h3">Privacy options</Header>}>
            <SpaceBetween direction="vertical" size="s">
              <Checkbox name="analytics">Allow analytics cookies</Checkbox>
              <Checkbox name="personalization">
                Allow personalized content
              </Checkbox>
            </SpaceBetween>
          </Container>

          <FormField label="Additional notes">
            <Textarea
              name="notes"
              placeholder="Any additional preferences"
              rows={3}
            />
          </FormField>

          <Button variant="primary" formAction="submit">
            Save preferences
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default PrivacyConsentForm
