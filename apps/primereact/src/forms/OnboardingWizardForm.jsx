import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Dropdown } from 'primereact/dropdown'
import { InputTextarea } from 'primereact/inputtextarea'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

function OnboardingWizardForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [goal, setGoal] = useState('')
  const [updates, setUpdates] = useState(false)

  const teamSizeOptions = [
    { label: 'Select size', value: '' },
    { label: '1-5', value: '1-5' },
    { label: '6-20', value: '6-20' },
    { label: '21-50', value: '21-50' },
    { label: '50+', value: '50+' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding completed!')
  }

  return (
    <form onSubmit={handleSubmit} className="p-fluid">
      <section style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Step 1: Account</h3>
        <div className="field" style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="primereact-onboarding-email"
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            Work email
          </label>
          <InputText
            id="primereact-onboarding-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field" style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="primereact-onboarding-password"
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            Password
          </label>
          <Password
            id="primereact-onboarding-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleMask
            feedback={false}
            required
          />
        </div>
      </section>
      <section style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Step 2: Team</h3>
        <div className="field" style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="primereact-onboarding-team-name"
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            Team name
          </label>
          <InputText
            id="primereact-onboarding-team-name"
            name="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div className="field" style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="primereact-onboarding-size"
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            Team size
          </label>
          <Dropdown
            id="primereact-onboarding-size"
            name="teamSize"
            value={teamSize}
            options={teamSizeOptions}
            onChange={(e) => setTeamSize(e.value)}
            required
          />
        </div>
      </section>
      <section style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Step 3: Preferences</h3>
        <div className="field" style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="primereact-onboarding-goal"
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            Primary goal
          </label>
          <InputTextarea
            id="primereact-onboarding-goal"
            name="goal"
            rows={3}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </div>
        <div
          className="field"
          style={{
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Checkbox
            inputId="primereact-onboarding-updates"
            name="updates"
            checked={updates}
            onChange={(e) => setUpdates(e.checked)}
          />
          <label htmlFor="primereact-onboarding-updates">
            Send me product tips
          </label>
        </div>
      </section>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button
          type="button"
          label="Back"
          severity="secondary"
          onClick={() => alert('Back action placeholder')}
        />
        <Button type="submit" label="Finish setup" />
      </div>
    </form>
  )
}

export default OnboardingWizardForm
