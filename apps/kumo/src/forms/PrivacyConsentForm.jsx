import { Button, Checkbox, Input, InputArea } from '@cloudflare/kumo'

function PrivacyConsentForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Full name" name="fullName" type="text" required />
      <Input label="Email address" name="email" type="email" required />
      <fieldset className="kumo-fieldset">
        <legend>Communication channels</legend>
        <Checkbox label="Email updates" name="emailOptIn" />
        <Checkbox label="SMS notifications" name="smsOptIn" />
        <Checkbox label="Phone calls" name="phoneOptIn" />
      </fieldset>
      <fieldset className="kumo-fieldset">
        <legend>Privacy options</legend>
        <Checkbox label="Allow analytics cookies" name="analytics" />
        <Checkbox label="Allow personalized content" name="personalization" />
      </fieldset>
      <InputArea label="Additional notes" name="notes" rows={3} />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Save preferences
        </Button>
      </div>
    </form>
  )
}

export default PrivacyConsentForm
