import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Textarea from '@salesforce/design-system-react/components/textarea'
import Combobox from '@salesforce/design-system-react/components/combobox'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'
import ProgressIndicator from '@salesforce/design-system-react/components/progress-indicator'

const teamSizeOptions = [
  { id: '1-5', label: '1-5' },
  { id: '6-20', label: '6-20' },
  { id: '21-50', label: '21-50' },
  { id: '50+', label: '50+' },
]

const steps = [
  { id: 0, label: 'Account' },
  { id: 1, label: 'Team' },
  { id: 2, label: 'Preferences' },
]

function OnboardingWizardForm({ theme }) {
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamSize, setTeamSize] = useState([])
  const [goal, setGoal] = useState('')
  const [updates, setUpdates] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleNext = () => {
    if (step < 2) setStep(step + 1)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-m-bottom_medium">
        <ProgressIndicator
          id="slds-onboarding-progress"
          steps={steps}
          completedSteps={steps.slice(0, step)}
          selectedStep={steps[step]}
          orientation="horizontal"
        />
      </div>

      {step === 0 && (
        <>
          <h3 className="slds-text-heading_small slds-m-bottom_small">Account</h3>
          <div className="slds-form-element slds-m-bottom_small">
            <Input
              id="slds-onboarding-email"
              type="email"
              label="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="slds-form-element slds-m-bottom_medium">
            <Input
              id="slds-onboarding-password"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
          </div>
        </>
      )}

      {step === 1 && (
        <>
          <h3 className="slds-text-heading_small slds-m-bottom_small">Team</h3>
          <div className="slds-form-element slds-m-bottom_small">
            <Input
              id="slds-onboarding-teamname"
              label="Team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>
          <div className="slds-form-element slds-m-bottom_medium">
            <Combobox
              id="slds-onboarding-teamsize"
              labels={{ label: 'Team size' }}
              options={teamSizeOptions}
              selection={teamSize}
              onSelect={(event, data) => setTeamSize(data.selection)}
              variant="readonly"
              required
            />
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="slds-text-heading_small slds-m-bottom_small">Preferences</h3>
          <div className="slds-form-element slds-m-bottom_small">
            <Textarea
              id="slds-onboarding-goal"
              label="Primary goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
            />
          </div>
          <div className="slds-form-element slds-m-bottom_medium">
            <Checkbox
              id="slds-onboarding-updates"
              labels={{ label: 'Send me product tips' }}
              checked={updates}
              onChange={() => setUpdates(!updates)}
            />
          </div>
        </>
      )}

      <div className="slds-form-element">
        {step > 0 && (
          <Button
            type="button"
            variant="neutral"
            label="Back"
            onClick={handleBack}
            className="slds-m-right_x-small"
          />
        )}
        {step < 2 ? (
          <Button
            type="button"
            variant="brand"
            label="Next"
            onClick={handleNext}
          />
        ) : (
          <Button
            type="submit"
            variant="brand"
            label="Finish setup"
          />
        )}
      </div>
    </form>
  )
}

export default OnboardingWizardForm
