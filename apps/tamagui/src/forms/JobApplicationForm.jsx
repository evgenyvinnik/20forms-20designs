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

function JobApplicationForm() {
  const [keepInformed, setKeepInformed] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <YStack gap="$1">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            name="fullName"

            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            inputMode="email"

            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            inputMode="tel"

            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="position">Role applied for</Label>
          <Input
            id="position"
            name="position"

            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="resume">Resume link</Label>
          <Input
            id="resume"
            name="resume"
            inputMode="url"

            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="coverLetter">Cover letter</Label>
          <TextArea
            id="coverLetter"
            name="coverLetter"

            rows={4}
            required
          />
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="keepInformed"
            checked={keepInformed}
            onCheckedChange={setKeepInformed}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="keepInformed">
            Keep me informed about future roles
          </Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Submit application
        </Button>
      </YStack>
    </form>
  )
}

export default JobApplicationForm
