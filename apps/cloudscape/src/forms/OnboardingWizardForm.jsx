import '@cloudscape-design/global-styles/index.css'
import { useState } from 'react'
import {
  Button,
  Checkbox,
  Container,
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
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <Container header={<Header variant="h2">Step 1: Account</Header>}>
            <SpaceBetween direction="vertical" size="m">
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
                  required
                />
              </FormField>
            </SpaceBetween>
          </Container>

          <Container header={<Header variant="h2">Step 2: Team</Header>}>
            <SpaceBetween direction="vertical" size="m">
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
          </Container>

          <Container header={<Header variant="h2">Step 3: Preferences</Header>}>
            <SpaceBetween direction="vertical" size="m">
              <FormField label="Primary goal">
                <Textarea
                  name="goal"
                  placeholder="What do you want to achieve?"
                  rows={3}
                />
              </FormField>
              <Checkbox name="updates">Send me product tips</Checkbox>
            </SpaceBetween>
          </Container>

          <SpaceBetween direction="horizontal" size="xs">
            <Button onClick={() => alert('Back action placeholder')}>
              Back
            </Button>
            <Button variant="primary" formAction="submit">
              Finish setup
            </Button>
          </SpaceBetween>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default OnboardingWizardForm
