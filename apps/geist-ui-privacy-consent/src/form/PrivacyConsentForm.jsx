import { Input, Button, Checkbox, Textarea, Spacer, Text } from '@geist-ui/core'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="nocss-privacy-name"
        name="fullName"
        width="100%"
        placeholder="Full name"
        required
      >
        Full name
      </Input>
      <Spacer h={1} />
      <Input
        id="nocss-privacy-email"
        name="email"
        type="email"
        width="100%"
        placeholder="Email address"
        required
      >
        Email address
      </Input>
      <Spacer h={1} />
      <fieldset
        style={{
          border: '1px solid #eaeaea',
          padding: '16px',
          borderRadius: '6px',
        }}
      >
        <legend>
          <Text small b>
            Communication channels
          </Text>
        </legend>
        <Checkbox name="emailOptIn">Email updates</Checkbox>
        <Spacer h={0.5} />
        <Checkbox name="smsOptIn">SMS notifications</Checkbox>
        <Spacer h={0.5} />
        <Checkbox name="phoneOptIn">Phone calls</Checkbox>
      </fieldset>
      <Spacer h={1} />
      <fieldset
        style={{
          border: '1px solid #eaeaea',
          padding: '16px',
          borderRadius: '6px',
        }}
      >
        <legend>
          <Text small b>
            Privacy options
          </Text>
        </legend>
        <Checkbox name="analytics">Allow analytics cookies</Checkbox>
        <Spacer h={0.5} />
        <Checkbox name="personalization">Allow personalized content</Checkbox>
      </fieldset>
      <Spacer h={1} />
      <Text small>Additional notes</Text>
      <Spacer h={0.5} />
      <Textarea
        id="nocss-privacy-notes"
        name="notes"
        width="100%"
        placeholder="Additional notes"
        rows={3}
      />
      <Spacer h={1} />
      <Button htmlType="submit" type="success" width="100%">
        Save preferences
      </Button>
    </form>
  )
}

export default PrivacyConsentForm
