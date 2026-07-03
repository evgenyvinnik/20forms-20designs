import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Welcome Onboarding
      </h2>
      {submitted && (
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#dbeafe',
            color: '#1e40af',
            borderRadius: '0.375rem',
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
          <div className="gluestack-field">
            <label className="gluestack-label">Display Name</label>
            <input
              className="gluestack-input"
              type="text"
              required
              value={formData.displayName}
              onChange={(e) =>
                setFormData({ ...formData, displayName: e.target.value })
              }
            />
          </div>
          <button type="submit" className="gluestack-button">
            Next Step
          </button>
        </>
      ) : (
        <>
          <div className="gluestack-field">
            <label className="gluestack-label">Company Name</label>
            <input
              className="gluestack-input"
              type="text"
              required
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>
          <div className="gluestack-field">
            <label className="gluestack-label">Job Title / Role</label>
            <input
              className="gluestack-input"
              type="text"
              required
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="button"
              className="gluestack-button"
              style={{ background: '#e2e8f0', color: '#1e293b' }}
              onClick={() => setStep(1)}
            >
              Back
            </button>
            <button
              type="submit"
              className="gluestack-button"
              style={{ flex: 1 }}
            >
              Complete Setup
            </button>
          </div>
        </>
      )}
    </form>
  )
}
