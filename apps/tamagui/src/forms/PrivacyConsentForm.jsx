import {
  Button,
  Checkbox,
  Input,
  Label,
  XStack,
  YStack,
  Text,
  TextArea,
} from 'tamagui'
import { useState } from 'react'

function PrivacyConsentForm() {
  const [emailOptIn, setEmailOptIn] = useState(false)
  const [smsOptIn, setSmsOptIn] = useState(false)
  const [phoneOptIn, setPhoneOptIn] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [personalization, setPersonalization] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Privacy preferences saved!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <YStack gap="$1">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Full name"
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            inputMode="email"
            placeholder="Email address"
            required
          />
        </YStack>

        <YStack gap="$2">
          <Text fontWeight="bold">Communication channels</Text>
          <XStack gap="$2" alignItems="center">
            <Checkbox
              id="emailOptIn"
              checked={emailOptIn}
              onCheckedChange={setEmailOptIn}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="emailOptIn">Email updates</Label>
          </XStack>
          <XStack gap="$2" alignItems="center">
            <Checkbox
              id="smsOptIn"
              checked={smsOptIn}
              onCheckedChange={setSmsOptIn}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="smsOptIn">SMS notifications</Label>
          </XStack>
          <XStack gap="$2" alignItems="center">
            <Checkbox
              id="phoneOptIn"
              checked={phoneOptIn}
              onCheckedChange={setPhoneOptIn}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="phoneOptIn">Phone calls</Label>
          </XStack>
        </YStack>

        <YStack gap="$2">
          <Text fontWeight="bold">Privacy options</Text>
          <XStack gap="$2" alignItems="center">
            <Checkbox
              id="analytics"
              checked={analytics}
              onCheckedChange={setAnalytics}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="analytics">Allow analytics cookies</Label>
          </XStack>
          <XStack gap="$2" alignItems="center">
            <Checkbox
              id="personalization"
              checked={personalization}
              onCheckedChange={setPersonalization}
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Label htmlFor="personalization">Allow personalized content</Label>
          </XStack>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="notes">Additional notes</Label>
          <TextArea
            id="notes"
            name="notes"
            placeholder="Additional notes"
            rows={3}
          />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Save preferences
        </Button>
      </YStack>
    </form>
  )
}

export default PrivacyConsentForm
