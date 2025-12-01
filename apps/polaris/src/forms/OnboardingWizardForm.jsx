import { useState, useCallback } from 'react'
import { FormLayout, TextField, Select, ChoiceList, Button, Text, InlineStack, ProgressBar } from '@shopify/polaris'

function OnboardingWizardForm() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  // Step 1: Personal info
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  // Step 2: Preferences
  const [role, setRole] = useState('')
  const [interests, setInterests] = useState([])

  // Step 3: Setup
  const [companyName, setCompanyName] = useState('')
  const [teamSize, setTeamSize] = useState('')

  const roleOptions = [
    { label: 'Select your role', value: '' },
    { label: 'Developer', value: 'developer' },
    { label: 'Designer', value: 'designer' },
    { label: 'Product Manager', value: 'pm' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Other', value: 'other' },
  ]

  const interestOptions = [
    { label: 'Product updates', value: 'updates' },
    { label: 'Industry news', value: 'news' },
    { label: 'Tips & tutorials', value: 'tips' },
    { label: 'Community events', value: 'events' },
  ]

  const teamSizeOptions = [
    { label: 'Select team size', value: '' },
    { label: '1-5', value: '1-5' },
    { label: '6-20', value: '6-20' },
    { label: '21-50', value: '21-50' },
    { label: '51-200', value: '51-200' },
    { label: '200+', value: '200+' },
  ]

  const handleNext = useCallback(() => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }, [step])

  const handlePrevious = useCallback(() => {
    if (step > 1) {
      setStep(step - 1)
    }
  }, [step])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }, [])

  const progress = (step / totalSteps) * 100

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <Text as="h2" variant="headingMd">
          Step {step} of {totalSteps}
        </Text>
        <ProgressBar progress={progress} size="small" />

        {step === 1 && (
          <>
            <Text as="p">Let's start with your personal information.</Text>
            <FormLayout.Group>
              <TextField
                label="First name"
                type="text"
                value={firstName}
                onChange={setFirstName}
                autoComplete="given-name"
                requiredIndicator
              />
              <TextField
                label="Last name"
                type="text"
                value={lastName}
                onChange={setLastName}
                autoComplete="family-name"
                requiredIndicator
              />
            </FormLayout.Group>
            <TextField
              label="Email address"
              type="email"
              value={email}
              onChange={setEmail}
              autoComplete="email"
              requiredIndicator
            />
          </>
        )}

        {step === 2 && (
          <>
            <Text as="p">Tell us about your preferences.</Text>
            <Select
              label="What's your role?"
              options={roleOptions}
              value={role}
              onChange={setRole}
              requiredIndicator
            />
            <ChoiceList
              title="What are you interested in?"
              choices={interestOptions}
              selected={interests}
              onChange={setInterests}
              allowMultiple
            />
          </>
        )}

        {step === 3 && (
          <>
            <Text as="p">Almost done! Tell us about your organization.</Text>
            <TextField
              label="Company name"
              type="text"
              value={companyName}
              onChange={setCompanyName}
              autoComplete="organization"
            />
            <Select
              label="Team size"
              options={teamSizeOptions}
              value={teamSize}
              onChange={setTeamSize}
            />
          </>
        )}

        <InlineStack gap="300">
          {step > 1 && (
            <Button onClick={handlePrevious}>Previous</Button>
          )}
          {step < totalSteps ? (
            <Button variant="primary" onClick={handleNext}>Next</Button>
          ) : (
            <Button submit variant="primary">Complete setup</Button>
          )}
        </InlineStack>
      </FormLayout>
    </form>
  )
}

export default OnboardingWizardForm
