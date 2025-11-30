import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiFieldPassword,
  EuiSelect,
  EuiTextArea,
  EuiCheckbox,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiSpacer,
} from '@elastic/eui'

const teamSizeOptions = [
  { value: '', text: 'Select size' },
  { value: '1-5', text: '1-5' },
  { value: '6-20', text: '6-20' },
  { value: '21-50', text: '21-50' },
  { value: '50+', text: '50+' },
]

function OnboardingWizardForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [goal, setGoal] = useState('')
  const [updates, setUpdates] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }, [])

  const handleBack = useCallback(() => {
    alert('Back action placeholder')
  }, [])

  return (
    <EuiForm component="form" onSubmit={handleSubmit}>
      <section>
        <EuiTitle size="s">
          <h3>Step 1: Account</h3>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiFormRow label="Work email">
          <EuiFieldText
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </EuiFormRow>
        <EuiFormRow label="Password">
          <EuiFieldPassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="dual"
            required
          />
        </EuiFormRow>
      </section>

      <EuiSpacer size="l" />

      <section>
        <EuiTitle size="s">
          <h3>Step 2: Team</h3>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiFormRow label="Team name">
          <EuiFieldText
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </EuiFormRow>
        <EuiFormRow label="Team size">
          <EuiSelect
            options={teamSizeOptions}
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            required
          />
        </EuiFormRow>
      </section>

      <EuiSpacer size="l" />

      <section>
        <EuiTitle size="s">
          <h3>Step 3: Preferences</h3>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiFormRow label="Primary goal">
          <EuiTextArea
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            rows={3}
            required
          />
        </EuiFormRow>
        <EuiFormRow>
          <EuiCheckbox
            id="updates"
            label="Send me product tips"
            checked={updates}
            onChange={(e) => setUpdates(e.target.checked)}
          />
        </EuiFormRow>
      </section>

      <EuiSpacer size="l" />

      <EuiFormRow>
        <EuiFlexGroup gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiButton onClick={handleBack}>Back</EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton type="submit" fill>
              Finish setup
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFormRow>
    </EuiForm>
  )
}

export default OnboardingWizardForm
