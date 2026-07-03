import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (step < 3) setStep(step + 1)
    else alert('Onboarding completed!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      {step === 1 && (
        <>
          <TextInput name="email" type="email" label="Work email" required />
          <TextInput
            name="password"
            type="password"
            label="Password"
            required
          />
          <Button type="submit" variant="primary">
            Next step
          </Button>
        </>
      )}
      {step === 2 && (
        <>
          <TextInput name="teamName" type="text" label="Team name" required />
          <Selector
            name="teamSize"
            label="Team size"
            defaultValue="1-10"
            options={[
              { value: '1-10', label: '1-10' },
              { value: '11-50', label: '11-50' },
              { value: '51-200', label: '51-200' },
              { value: '201+', label: '201+' },
            ]}
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Button type="submit" variant="primary" style={{ flex: 1 }}>
              Next step
            </Button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <TextInput name="goal" label="Primary goal" multiline rows={3} />
          <CheckboxInput
            name="tips"
            label="Send me product tips"
            defaultChecked
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setStep(2)}
            >
              Back
            </Button>
            <Button type="submit" variant="primary" style={{ flex: 1 }}>
              Finish setup
            </Button>
          </div>
        </>
      )}
    </form>
  )
}

export default OnboardingWizardForm
