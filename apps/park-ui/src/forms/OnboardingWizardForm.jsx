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
    <form onSubmit={handleSubmit} className="park-form">
      {step === 1 ? (
        <>
          <Field.Root required className="park-field">
            <Field.Label className="park-label">Your full name</Field.Label>
            <Field.Input className="park-input" name="name" required />
          </Field.Root>
          <button type="submit" className="park-button">Next step</button>
        </>
      ) : (
        <>
          <Field.Root required className="park-field">
            <Field.Label className="park-label">Company name</Field.Label>
            <Field.Input className="park-input" name="company" required />
          </Field.Root>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="button" className="park-button" style={{ background: '#e2e8f0', color: '#1e293b' }} onClick={() => setStep(1)}>
              Back
            </button>
            <button type="submit" className="park-button" style={{ flex: 1 }}>
              Complete onboarding
            </button>
          </div>
        </>
      )}
    </form>
  )
}