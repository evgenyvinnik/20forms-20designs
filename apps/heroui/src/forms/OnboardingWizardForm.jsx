import { useState } from 'react'
import { Input, Button } from '@heroui/react'

export default function OnboardingWizardForm() {
  const [step, setStep] = useState(1)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      alert('Onboarding complete!')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="heroui-form">
      {step === 1 ? (
        <>
          <Input
            label="Your full name"
            variant="bordered"
            isRequired
            name="name"
          />
          <Button type="submit" color="primary" shadow>
            Next step
          </Button>
        </>
      ) : (
        <>
          <Input
            label="Company name"
            variant="bordered"
            isRequired
            name="company"
          />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button type="button" variant="flat" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" color="primary" shadow style={{ flex: 1 }}>
              Complete onboarding
            </Button>
          </div>
        </>
      )}
    </form>
  )
}
