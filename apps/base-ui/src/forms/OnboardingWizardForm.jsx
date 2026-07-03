import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (step === 1) setStep(2)
    else alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      {step === 1 ? (
        <>
          <Field.Root required className="base-field">
            <Field.Label className="base-label">Your full name</Field.Label>
            <Field.Control className="base-input" name="name" required />
          </Field.Root>
          <button type="submit" className="base-button">Next step</button>
        </>
      ) : (
        <>
          <Field.Root required className="base-field">
            <Field.Label className="base-label">Company name</Field.Label>
            <Field.Control className="base-input" name="company" required />
          </Field.Root>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button type="button" className="base-button" style={{ background: '#e2e8f0', color: '#1e293b' }} onClick={() => setStep(1)}>
              Back
            </button>
            <button type="submit" className="base-button" style={{ flex: 1 }}>
              Complete onboarding
            </button>
          </div>
        </>
      )}
    </form>
  )
}