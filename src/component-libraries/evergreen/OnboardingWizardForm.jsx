import { Button, Checkbox, Heading, Pane, SelectField, TextInputField, TextareaField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 24 }
const sectionStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }
const buttonRowProps = { display: 'flex', gap: 12, flexWrap: 'wrap' }

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <Pane {...sectionStackProps}>
        <Heading size={500}>Step 1: Account</Heading>
        <TextInputField id="evergreen-onboarding-email" label="Work email" name="email" type="email" required />
        <TextInputField
          id="evergreen-onboarding-password"
          label="Password"
          name="password"
          type="password"
          minLength={8}
          required
        />
      </Pane>

      <Pane {...sectionStackProps}>
        <Heading size={500}>Step 2: Team</Heading>
        <TextInputField id="evergreen-onboarding-team-name" label="Team name" name="teamName" type="text" required />
        <SelectField
          id="evergreen-onboarding-team-size"
          label="Team size"
          name="teamSize"
          defaultValue=""
          required
        >
          <option value="">Select size</option>
          <option value="1-5">1-5</option>
          <option value="6-20">6-20</option>
          <option value="21-50">21-50</option>
          <option value="50+">50+</option>
        </SelectField>
      </Pane>

      <Pane {...sectionStackProps}>
        <Heading size={500}>Step 3: Preferences</Heading>
        <TextareaField
          id="evergreen-onboarding-goal"
          label="Primary goal"
          name="goal"
          rows={3}
          required
        />
        <Checkbox label="Send me product tips" name="updates" />
      </Pane>

      <Pane {...buttonRowProps}>
        <Button type="button" appearance="default" onClick={() => alert('Back action placeholder')}>
          Back
        </Button>
        <Button appearance="primary" type="submit">
          Finish setup
        </Button>
      </Pane>
    </Pane>
  )
}

export default OnboardingWizardForm
