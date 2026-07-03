import { useState } from 'react'
import { TextInput, Button } from '@astryxdesign/core'

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (step === 1) setStep(2)
    else alert('Onboarding completed!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      {step === 1 ? (
        <>
          <TextInput name="name" type="text" label="Your full name" required />
          <Button type="submit" variant="primary">
            Next step
          </Button>
        </>
      ) : (
        <>
          <TextInput name="company" type="text" label="Company name" required />
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Button type="submit" variant="primary" style={{ flex: 1 }}>
              Complete onboarding
            </Button>
          </div>
        </>
      )}
    </form>
  )
}

export default OnboardingWizardForm
