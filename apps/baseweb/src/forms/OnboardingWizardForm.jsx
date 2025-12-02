import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { Select } from 'baseui/select'
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { HeadingSmall } from 'baseui/typography'
import { useState } from 'react'

function OnboardingWizardForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [teamName, setTeamName] = useState('')
  const [teamSize, setTeamSize] = useState([])
  const [goal, setGoal] = useState('')
  const [updates, setUpdates] = useState(false)

  const teamSizeOptions = [
    { label: '1-5', id: '1-5' },
    { label: '6-20', id: '6-20' },
    { label: '21-50', id: '21-50' },
    { label: '50+', id: '50+' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale200">
        <Block as="section">
          <HeadingSmall marginBottom="scale400">Step 1: Account</HeadingSmall>
          <Block display="flex" flexDirection="column" gridGap="scale400">
            <FormControl label="Work email">
              <Input
                id="baseweb-onboarding-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl label="Password">
              <Input
                id="baseweb-onboarding-password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
          </Block>
        </Block>

        <Block as="section">
          <HeadingSmall marginBottom="scale400">Step 2: Team</HeadingSmall>
          <Block display="flex" flexDirection="column" gridGap="scale400">
            <FormControl label="Team name">
              <Input
                id="baseweb-onboarding-team-name"
                name="teamName"
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
            </FormControl>
            <FormControl label="Team size">
              <Select
                id="baseweb-onboarding-size"
                options={teamSizeOptions}
                value={teamSize}
                placeholder="Select size"
                onChange={(params) => setTeamSize(params.value)}
                required
              />
            </FormControl>
          </Block>
        </Block>

        <Block as="section">
          <HeadingSmall marginBottom="scale400">
            Step 3: Preferences
          </HeadingSmall>
          <Block display="flex" flexDirection="column" gridGap="scale400">
            <FormControl label="Primary goal">
              <Textarea
                id="baseweb-onboarding-goal"
                name="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
              />
            </FormControl>
            <Checkbox
              checked={updates}
              onChange={(e) => setUpdates(e.target.checked)}
            >
              Send me product tips
            </Checkbox>
          </Block>
        </Block>

        <Block display="flex" gridGap="scale400">
          <Button
            type="button"
            kind="secondary"
            onClick={() => alert('Back action placeholder')}
          >
            Back
          </Button>
          <Button type="submit">Finish setup</Button>
        </Block>
      </Block>
    </form>
  )
}

export default OnboardingWizardForm
