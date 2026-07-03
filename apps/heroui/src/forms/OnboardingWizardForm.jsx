import { useState } from 'react'
import { Input, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
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
          <div className="heroui-field">
            <label className="heroui-label">Display Name</label>
            <Input
              isRequired
              type="text"
              value={formData.displayName}
              onValueChange={(val) =>
                setFormData({ ...formData, displayName: val })
              }
            />
          </div>
          <Button type="submit" color="primary">
            Next Step
          </Button>
        </>
      ) : (
        <>
          <div className="heroui-field">
            <label className="heroui-label">Company Name</label>
            <Input
              isRequired
              type="text"
              value={formData.company}
              onValueChange={(val) =>
                setFormData({ ...formData, company: val })
              }
            />
          </div>
          <div className="heroui-field">
            <label className="heroui-label">Job Title / Role</label>
            <Input
              isRequired
              type="text"
              value={formData.role}
              onValueChange={(val) => setFormData({ ...formData, role: val })}
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="bordered" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" color="primary" style={{ flex: 1 }}>
              Complete Setup
            </Button>
          </div>
        </>
      )}
    </form>
  )
}
