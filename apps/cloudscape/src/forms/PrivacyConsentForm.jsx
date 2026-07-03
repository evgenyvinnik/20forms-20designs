import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Checkbox,
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
    <form onSubmit={handleSubmit}>
      <SpaceBetween direction="vertical" size="l">
        <FormField label="Full name">
          <Input
            name="fullName"
            type="text"

            required
          />
        </FormField>
        <FormField label="Email address">
          <Input
            name="email"
            type="email"

            required
          />
        </FormField>

        <SpaceBetween direction="vertical" size="s">
          <Header variant="h3">Communication channels</Header>
          <Checkbox name="emailOptIn">Email updates</Checkbox>
          <Checkbox name="smsOptIn">SMS notifications</Checkbox>
          <Checkbox name="phoneOptIn">Phone calls</Checkbox>
        </SpaceBetween>

        <SpaceBetween direction="vertical" size="s">
          <Header variant="h3">Privacy options</Header>
          <Checkbox name="analytics">Allow analytics cookies</Checkbox>
          <Checkbox name="personalization">Allow personalized content</Checkbox>
        </SpaceBetween>

        <FormField label="Additional notes">
          <Textarea
            name="notes"

            rows={3}
          />
        </FormField>

        <Button variant="primary" formAction="submit">
          Save preferences
        </Button>
      </SpaceBetween>
    </form>
  )
}

export default PrivacyConsentForm
