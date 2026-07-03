import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 3) setStep(step + 1)
    else alert('Onboarding completed!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      {step === 1 && (
        <>
          <Field.Root required className="ark-field">
            <Field.Label className="ark-label">Work email</Field.Label>
            <Field.Input
              className="ark-input"
              name="email"
              type="email"
              required
            />
          </Field.Root>
          <Field.Root required className="ark-field">
            <Field.Label className="ark-label">Password</Field.Label>
            <Field.Input
              className="ark-input"
              name="password"
              type="password"
              required
            />
          </Field.Root>
          <button type="submit" className="ark-button">
            Next step
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <Field.Root required className="ark-field">
            <Field.Label className="ark-label">Team name</Field.Label>
            <Field.Input className="ark-input" name="teamName" required />
          </Field.Root>
          <Field.Root className="ark-field">
            <Field.Label className="ark-label">Team size</Field.Label>
            <select className="ark-select" name="teamSize" defaultValue="1-10">
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201+">201+</option>
            </select>
          </Field.Root>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              type="button"
              className="ark-button"
              style={{ background: '#e2e8f0', color: '#1e293b' }}
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button type="submit" className="ark-button" style={{ flex: 1 }}>
              Next step
            </button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <Field.Root className="ark-field">
            <Field.Label className="ark-label">Primary goal</Field.Label>
            <Field.Textarea className="ark-textarea" name="goal" rows={3} />
          </Field.Root>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
            }}
          >
            <input type="checkbox" name="tips" defaultChecked />
            Send me product tips
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              type="button"
              className="ark-button"
              style={{ background: '#e2e8f0', color: '#1e293b' }}
              onClick={() => setStep(2)}
            >
              Back
            </button>
            <button type="submit" className="ark-button" style={{ flex: 1 }}>
              Finish setup
            </button>
          </div>
        </>
      )}
    </form>
  )
}
