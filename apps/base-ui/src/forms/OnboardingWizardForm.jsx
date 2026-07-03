import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 3) setStep(step + 1)
    else alert('Onboarding completed!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      {step === 1 && (
        <>
          <Field.Root required className="base-field">
            <Field.Label className="base-label">Work email</Field.Label>
            <Field.Control
              className="base-input"
              name="email"
              type="email"
              required
            />
          </Field.Root>
          <Field.Root required className="base-field">
            <Field.Label className="base-label">Password</Field.Label>
            <Field.Control
              className="base-input"
              name="password"
              type="password"
              required
            />
          </Field.Root>
          <button type="submit" className="base-button">
            Next step
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <Field.Root required className="base-field">
            <Field.Label className="base-label">Team name</Field.Label>
            <Field.Control className="base-input" name="teamName" required />
          </Field.Root>
          <Field.Root className="base-field">
            <Field.Label className="base-label">Team size</Field.Label>
            <select className="base-select" name="teamSize" defaultValue="1-10">
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201+">201+</option>
            </select>
          </Field.Root>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              type="button"
              className="base-button"
              style={{ background: '#e2e8f0', color: '#1e293b' }}
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button type="submit" className="base-button" style={{ flex: 1 }}>
              Next step
            </button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <Field.Root className="base-field">
            <Field.Label className="base-label">Primary goal</Field.Label>
            <Field.Control
              render={<textarea />}
              className="base-textarea"
              name="goal"
              rows={3}
            />
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
              className="base-button"
              style={{ background: '#e2e8f0', color: '#1e293b' }}
              onClick={() => setStep(2)}
            >
              Back
            </button>
            <button type="submit" className="base-button" style={{ flex: 1 }}>
              Finish setup
            </button>
          </div>
        </>
      )}
    </form>
  )
}
