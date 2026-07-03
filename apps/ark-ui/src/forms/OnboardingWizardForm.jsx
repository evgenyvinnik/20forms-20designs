import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (step === 1) setStep(2)
    else alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      {step === 1 ? (
        <>
          <Field.Root required className="ark-field">
            <Field.Label className="ark-label">Your full name</Field.Label>
            <Field.Input className="ark-input" name="name" required />
          </Field.Root>
          <button type="submit" className="ark-button">Next step</button>
        </>
      ) : (
        <>
          <Field.Root required className="ark-field">
            <Field.Label className="ark-label">Company name</Field.Label>
            <Field.Input className="ark-input" name="company" required />
          </Field.Root>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="button" className="ark-button" style={{ background: '#e2e8f0', color: '#1e293b' }} onClick={() => setStep(1)}>
              Back
            </button>
            <button type="submit" className="ark-button" style={{ flex: 1 }}>
              Complete onboarding
            </button>
          </div>
        </>
      )}
    </form>
  )
}