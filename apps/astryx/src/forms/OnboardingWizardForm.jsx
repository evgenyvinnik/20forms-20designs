import { useState } from 'react'
import {
  TextInput,
  Selector,
  TextArea,
  CheckboxInput,
  Button,
  Heading,
} from '@astryxdesign/core'

function OnboardingWizardForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [goal, setGoal] = useState('')
  const [updates, setUpdates] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  const teamSizeOptions = [
    { value: '', label: 'Select size' },
    { value: '1-5', label: '1-5' },
    { value: '6-20', label: '6-20' },
    { value: '21-50', label: '21-50' },
    { value: '50+', label: '50+' },
  ]

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
    >
      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <Heading level={3}>Step 1: Account</Heading>
        <TextInput
          id="astryx-onboarding-email"
          name="email"
          type="email"
          label="Work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput
          id="astryx-onboarding-password"
          name="password"
          type="password"
          label="Password"
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </section>

      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <Heading level={3}>Step 2: Team</Heading>
        <TextInput
          id="astryx-onboarding-team-name"
          name="teamName"
          type="text"
          label="Team name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          required
        />
        <Selector
          id="astryx-onboarding-size"
          name="teamSize"
          label="Team size"
          value={teamSize}
          onChange={(val) => setTeamSize(val)}
          options={teamSizeOptions}
          placeholder="Select size"
        />
      </section>

      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <Heading level={3}>Step 3: Preferences</Heading>
        <TextArea
          id="astryx-onboarding-goal"
          name="goal"
          label="Primary goal"
          rows={3}
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />
        <CheckboxInput
          name="updates"
          label="Send me product tips"
          checked={updates}
          onChange={(e) => setUpdates(e.target.checked)}
        />
      </section>

      <div style={{ display: 'flex', gap: '12px' }}>
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
