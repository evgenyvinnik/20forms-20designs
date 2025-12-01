import { useState, useCallback } from 'react'
import { FormLayout, TextField, Select, Checkbox, Button, Text, InlineStack } from '@shopify/polaris'

function OnboardingWizardForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [goal, setGoal] = useState('')
  const [updates, setUpdates] = useState(false)

  const teamSizeOptions = [
    { label: 'Select size', value: '' },
    { label: '1-5', value: '1-5' },
    { label: '6-20', value: '6-20' },
    { label: '21-50', value: '21-50' },
    { label: '50+', value: '50+' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <Text as="h3" variant="headingMd">
          Step 1: Account
        </Text>
        <TextField
          label="Work email"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          requiredIndicator
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          autoComplete="new-password"
          minLength={8}
          requiredIndicator
        />

        <Text as="h3" variant="headingMd">
          Step 2: Team
        </Text>
        <TextField
          label="Team name"
          type="text"
          value={teamName}
          onChange={setTeamName}
          autoComplete="off"
          requiredIndicator
        />
        <Select
          label="Team size"
          options={teamSizeOptions}
          value={teamSize}
          onChange={setTeamSize}
          requiredIndicator
        />

        <Text as="h3" variant="headingMd">
          Step 3: Preferences
        </Text>
        <TextField
          label="Primary goal"
          value={goal}
          onChange={setGoal}
          multiline={3}
          autoComplete="off"
          requiredIndicator
        />
        <Checkbox
          label="Send me product tips"
          checked={updates}
          onChange={setUpdates}
        />

        <InlineStack gap="300">
          <Button onClick={() => alert('Back action placeholder')}>Back</Button>
          <Button submit variant="primary">Finish setup</Button>
        </InlineStack>
      </FormLayout>
    </form>
  )
}

export default OnboardingWizardForm
