import '@cloudscape-design/global-styles/index.css'
import { useState } from 'react'
import {
  Button,
  Checkbox,
  FormField,
  Header,
  Input,
  Select,
  SpaceBetween,
  Textarea,
} from '@cloudscape-design/components'

function OnboardingWizardForm() {
  const [selectedTeamSize, setSelectedTeamSize] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <SpaceBetween direction="vertical" size="l">
        <SpaceBetween direction="vertical" size="m">
          <Header variant="h3">Step 1: Account</Header>
          <FormField label="Work email">
            <Input
              name="email"
              type="email"
              placeholder="email@company.com"
              required
            />
          </FormField>
          <FormField label="Password">
            <Input
              name="password"
              type="password"
              placeholder="Create a password"
              minLength={8}
              required
            />
          </FormField>
        </SpaceBetween>

        <SpaceBetween direction="vertical" size="m">
          <Header variant="h3">Step 2: Team</Header>
          <FormField label="Team name">
            <Input
              name="teamName"
              type="text"
              placeholder="Your team name"
              required
            />
          </FormField>
          <FormField label="Team size">
            <Select
              name="teamSize"
              placeholder="Select size"
              options={[
                { label: '1-5', value: '1-5' },
                { label: '6-20', value: '6-20' },
                { label: '21-50', value: '21-50' },
                { label: '50+', value: '50+' },
              ]}
              selectedOption={selectedTeamSize}
              onChange={({ detail }) =>
                setSelectedTeamSize(detail.selectedOption)
              }
            />
          </FormField>
        </SpaceBetween>

        <SpaceBetween direction="vertical" size="m">
          <Header variant="h3">Step 3: Preferences</Header>
          <FormField label="Primary goal">
            <Textarea
              name="goal"
              placeholder="What do you want to achieve?"
              rows={3}
              required
            />
          </FormField>
          <Checkbox name="updates">Send me product tips</Checkbox>
        </SpaceBetween>

        <SpaceBetween direction="horizontal" size="xs">
          <Button onClick={() => alert('Back action placeholder')}>Back</Button>
          <Button variant="primary" formAction="submit">
            Finish setup
          </Button>
        </SpaceBetween>
      </SpaceBetween>
    </form>
  )
}

export default OnboardingWizardForm
