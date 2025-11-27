import { Button, Checkbox, Text, TextArea, TextInput } from '@gravity-ui/uikit'

import { Field, fieldStackStyle, formStackStyle } from './common.jsx'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-privacy-name"
        label="Full name"
        name="fullName"
        controlProps={{ required: true }}
      />
      <TextInput
        id="gravity-privacy-email"
        label="Email address"
        name="email"
        type="email"
        controlProps={{ required: true }}
      />
      <div style={fieldStackStyle}>
        <Text variant="subheader-3">Communication channels</Text>
        <Checkbox name="emailOptIn" value="email" content="Email updates" />
        <Checkbox name="smsOptIn" value="sms" content="SMS notifications" />
        <Checkbox name="phoneOptIn" value="phone" content="Phone calls" />
      </div>
      <div style={fieldStackStyle}>
        <Text variant="subheader-3">Privacy options</Text>
        <Checkbox
          name="analytics"
          value="analytics"
          content="Allow analytics cookies"
        />
        <Checkbox
          name="personalization"
          value="personalization"
          content="Allow personalized content"
        />
      </div>
      <Field label="Additional notes" htmlFor="gravity-privacy-notes">
        <TextArea id="gravity-privacy-notes" name="notes" rows={3} />
      </Field>
      <Button view="action" type="submit">
        Save preferences
      </Button>
    </form>
  )
}

export default PrivacyConsentForm
