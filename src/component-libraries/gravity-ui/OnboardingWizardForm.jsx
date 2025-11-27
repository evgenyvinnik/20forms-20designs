import { Button, Checkbox, Text, TextArea, TextInput } from '@gravity-ui/uikit'

import { Field, SingleSelectField, formStackStyle } from './common.jsx'

const sectionStyle = { display: 'flex', flexDirection: 'column', gap: 12 }
const buttonRowStyle = { display: 'flex', gap: 12, flexWrap: 'wrap' }

const teamSizeOptions = [
  { value: '1-5', content: '1-5' },
  { value: '6-20', content: '6-20' },
  { value: '21-50', content: '21-50' },
  { value: '50+', content: '50+' },
]

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <div style={sectionStyle}>
        <Text variant="subheader-3">Step 1: Account</Text>
        <TextInput
          id="gravity-onboarding-email"
          label="Work email"
          name="email"
          type="email"
          controlProps={{ required: true }}
        />
        <TextInput
          id="gravity-onboarding-password"
          label="Password"
          name="password"
          type="password"
          controlProps={{ required: true, minLength: 8 }}
        />
      </div>

      <div style={sectionStyle}>
        <Text variant="subheader-3">Step 2: Team</Text>
        <TextInput
          id="gravity-onboarding-team-name"
          label="Team name"
          name="teamName"
          controlProps={{ required: true }}
        />
        <SingleSelectField
          id="gravity-onboarding-team-size"
          label="Team size"
          name="teamSize"
          options={[{ value: '', content: 'Select size' }, ...teamSizeOptions]}
          placeholder="Select size"
        />
      </div>

      <div style={sectionStyle}>
        <Text variant="subheader-3">Step 3: Preferences</Text>
        <Field label="Primary goal" htmlFor="gravity-onboarding-goal">
          <TextArea
            id="gravity-onboarding-goal"
            name="goal"
            rows={3}
            controlProps={{ required: true }}
          />
        </Field>
        <Checkbox name="updates" value="tips" content="Send me product tips" />
      </div>

      <div style={buttonRowStyle}>
        <Button type="button" view="flat" onClick={() => alert('Back action placeholder')}>
          Back
        </Button>
        <Button view="action" type="submit">
          Finish setup
        </Button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
