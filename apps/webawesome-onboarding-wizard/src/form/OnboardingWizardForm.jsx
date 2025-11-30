import { useState } from 'react'
import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (step === totalSteps) {
      alert('Onboarding complete!')
    } else {
      handleNext()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        Step {step} of {totalSteps}
      </p>

      {step === 1 && (
        <>
          <wa-input label="Full name" name="fullName" type="text" required />
          <wa-input label="Email" name="email" type="email" required />
          <wa-input label="Password" name="password" type="password" required />
        </>
      )}

      {step === 2 && (
        <>
          <wa-input label="Company name" name="company" type="text" />
          <wa-select
            label="Industry"
            name="industry"
            placeholder="Select your industry"
          >
            <wa-option value="tech">Technology</wa-option>
            <wa-option value="finance">Finance</wa-option>
            <wa-option value="healthcare">Healthcare</wa-option>
            <wa-option value="education">Education</wa-option>
            <wa-option value="retail">Retail</wa-option>
            <wa-option value="other">Other</wa-option>
          </wa-select>
          <wa-select
            label="Team size"
            name="teamSize"
            placeholder="Select team size"
          >
            <wa-option value="1">Just me</wa-option>
            <wa-option value="2-10">2-10 people</wa-option>
            <wa-option value="11-50">11-50 people</wa-option>
            <wa-option value="51-200">51-200 people</wa-option>
            <wa-option value="200+">200+ people</wa-option>
          </wa-select>
        </>
      )}

      {step === 3 && (
        <>
          <wa-checkbox name="newsletter">
            Subscribe to our newsletter
          </wa-checkbox>
          <wa-checkbox name="updates">Receive product updates</wa-checkbox>
          <wa-checkbox name="terms" required>
            I agree to the Terms of Service and Privacy Policy
          </wa-checkbox>
        </>
      )}

      <div className="wa-cluster wa-gap-s">
        {step > 1 && (
          <wa-button type="button" variant="neutral" onClick={handleBack}>
            Back
          </wa-button>
        )}
        <wa-button type="submit" variant="brand">
          {step === totalSteps ? 'Complete' : 'Next'}
        </wa-button>
      </div>
    </form>
  )
}

export default OnboardingWizardForm
