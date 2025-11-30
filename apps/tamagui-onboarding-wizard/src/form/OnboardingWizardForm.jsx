import {
  Button,
  Checkbox,
  Input,
  Label,
  XStack,
  YStack,
  Text,
  Select,
  TextArea,
  H3,
  Adapt,
  Sheet,
} from 'tamagui'
import { useState } from 'react'

function OnboardingWizardForm() {
  const [teamSize, setTeamSize] = useState('')
  const [updates, setUpdates] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Onboarding complete!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$4">
        <YStack gap="$3">
          <H3>Step 1: Account</H3>

          <YStack gap="$1">
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              name="email"
              inputMode="email"
              placeholder="Work email"
              required
            />
          </YStack>

          <YStack gap="$1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              secureTextEntry
              placeholder="Password"
              minLength={8}
              required
            />
          </YStack>
        </YStack>

        <YStack gap="$3">
          <H3>Step 2: Team</H3>

          <YStack gap="$1">
            <Label htmlFor="teamName">Team name</Label>
            <Input
              id="teamName"
              name="teamName"
              placeholder="Team name"
              required
            />
          </YStack>

          <YStack gap="$1">
            <Label htmlFor="teamSize">Team size</Label>
            <Select id="teamSize" value={teamSize} onValueChange={setTeamSize}>
              <Select.Trigger>
                <Select.Value placeholder="Select size" />
              </Select.Trigger>
              <Adapt when="sm" platform="touch">
                <Sheet
                  modal
                  dismissOnSnapToBottom
                  animationConfig={{
                    type: 'spring',
                    damping: 20,
                    mass: 1.2,
                    stiffness: 250,
                  }}
                >
                  <Sheet.Frame>
                    <Sheet.ScrollView>
                      <Adapt.Contents />
                    </Sheet.ScrollView>
                  </Sheet.Frame>
                  <Sheet.Overlay
                    animation="lazy"
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                  />
                </Sheet>
              </Adapt>
              <Select.Content zIndex={200000}>
                <Select.Viewport>
                  <Select.Item index={0} value="1-5">
                    <Select.ItemText>1-5</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={1} value="6-20">
                    <Select.ItemText>6-20</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={2} value="21-50">
                    <Select.ItemText>21-50</Select.ItemText>
                  </Select.Item>
                  <Select.Item index={3} value="50+">
                    <Select.ItemText>50+</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select>
          </YStack>
        </YStack>

        <YStack gap="$3">
          <H3>Step 3: Preferences</H3>

          <YStack gap="$1">
            <Label htmlFor="goal">Primary goal</Label>
            <TextArea
              id="goal"
              name="goal"
              placeholder="Primary goal"
              rows={3}
              required
            />
          </YStack>

          <XStack gap="$2" alignItems="center">
            <Checkbox
              id="updates"
              checked={updates}
              onCheckedChange={setUpdates}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="updates">Send me product tips</Label>
          </XStack>
        </YStack>

        <XStack gap="$2">
          <Button onPress={() => alert('Back action placeholder')}>Back</Button>
          <Button themeInverse onPress={() => {}}>
            Finish setup
          </Button>
        </XStack>
      </YStack>
    </form>
  )
}

export default OnboardingWizardForm
