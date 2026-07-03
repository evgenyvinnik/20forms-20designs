import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    displayName: '',
    company: '',
    role: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 2) {
      setStep(step + 1)
    } else {
      setSubmitted(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Welcome Onboarding
      </h2>
      {submitted && (
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#dcfce7',
            color: '#166534',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          Onboarding completed!
        </div>
      )}
      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
        Step {step} of 2
      </span>
      {step === 1 ? (
        <>
          <Field.Root required className="ark-field">
            <Field.Label className="ark-label">Display Name</Field.Label>
            <Field.Input
              className="ark-input"
              type="text"
              value={formData.displayName}
              onChange={(e) =>
                setFormData({ ...formData, displayName: e.target.value })
              }
            />
          </Field.Root>
          <button type="submit" className="ark-button">
            Next Step
          </button>
        </>
      ) : (
        <>
          <Field.Root required className="ark-field">
            <Field.Label className="ark-label">Company Name</Field.Label>
            <Field.Input
              className="ark-input"
              type="text"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </Field.Root>
          <Field.Root required className="ark-field">
            <Field.Label className="ark-label">Job Title / Role</Field.Label>
            <Field.Input
              className="ark-input"
              type="text"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            />
          </Field.Root>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="button"
              className="ark-button"
              style={{ background: '#e2e8f0', color: '#1e293b' }}
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button type="submit" className="ark-button" style={{ flex: 1 }}>
              Complete Setup
            </button>
          </div>
        </>
      )}
    </form>
  )
}
