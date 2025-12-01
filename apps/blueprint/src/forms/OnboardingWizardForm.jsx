import {
  Button,
  Checkbox,
  FormGroup,
  HTMLSelect,
  InputGroup,
  TextArea,
} from '@blueprintjs/core'
import {
  actionRowStyles,
  formStackStyles,
  sectionCardStyles,
} from './formStyles.js'

function OnboardingWizardForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <div className="bp5-card" style={sectionCardStyles}>
        <h3 className="bp5-heading">Step 1: Account</h3>
        <FormGroup label="Work email" labelFor="blueprint-onboarding-email">
          <InputGroup
            id="blueprint-onboarding-email"
            name="email"
            type="email"
            required
            fill
          />
        </FormGroup>
        <FormGroup label="Password" labelFor="blueprint-onboarding-password">
          <InputGroup
            id="blueprint-onboarding-password"
            name="password"
            type="password"
            minLength={8}
            required
            fill
          />
        </FormGroup>
      </div>

      <div className="bp5-card" style={sectionCardStyles}>
        <h3 className="bp5-heading">Step 2: Team</h3>
        <FormGroup label="Team name" labelFor="blueprint-onboarding-team-name">
          <InputGroup
            id="blueprint-onboarding-team-name"
            name="teamName"
            type="text"
            required
            fill
          />
        </FormGroup>
        <FormGroup label="Team size" labelFor="blueprint-onboarding-team-size">
          <HTMLSelect
            id="blueprint-onboarding-team-size"
            name="teamSize"
            required
            fill
            options={[
              { label: 'Select size', value: '' },
              { label: '1-5', value: '1-5' },
              { label: '6-20', value: '6-20' },
              { label: '21-50', value: '21-50' },
              { label: '50+', value: '50+' },
            ]}
          />
        </FormGroup>
      </div>

      <div className="bp5-card" style={sectionCardStyles}>
        <h3 className="bp5-heading">Step 3: Preferences</h3>
        <FormGroup label="Primary goal" labelFor="blueprint-onboarding-goal">
          <TextArea
            id="blueprint-onboarding-goal"
            name="goal"
            rows={3}
            required
            fill
          />
        </FormGroup>
        <Checkbox label="Send me product tips" name="updates" />
      </div>

      <div style={actionRowStyles}>
        <Button type="button" onClick={() => alert('Back action placeholder')}>
          Back
        </Button>
        <Button intent="primary" type="submit">
          Finish setup
        </Button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
