import {
  Button,
  Checkbox,
  Input,
  InputArea,
  Select,
  Text,
} from '@cloudflare/kumo'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <section className="kumo-section">
        <Text variant="heading" size="lg" as="h3">
          Step 1: Account
        </Text>
        <Input label="Work email" name="email" type="email" required />
        <Input
          label="Password"
          name="password"
          type="password"
          minLength={8}
          required
        />
      </section>
      <section className="kumo-section">
        <Text variant="heading" size="lg" as="h3">
          Step 2: Team
        </Text>
        <Input label="Team name" name="teamName" type="text" required />
        <Select
          label="Team size"
          name="teamSize"
          placeholder="Select size"
          items={[
            { value: '1-5', label: '1-5' },
            { value: '6-20', label: '6-20' },
            { value: '21-50', label: '21-50' },
            { value: '50+', label: '50+' },
          ]}
          required
          className="kumo-select"
        />
      </section>
      <section className="kumo-section">
        <Text variant="heading" size="lg" as="h3">
          Step 3: Preferences
        </Text>
        <InputArea label="Primary goal" name="goal" rows={3} required />
        <Checkbox label="Send me product tips" name="updates" />
      </section>
      <div className="kumo-actions">
        <Button
          type="button"
          variant="secondary"
          onClick={() => alert('Back action placeholder')}
        >
          Back
        </Button>
        <Button type="submit" variant="primary">
          Finish setup
        </Button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
