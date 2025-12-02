import {
  Button,
  Checkbox,
  Input,
  Label,
  XStack,
  YStack,
  Text,
  Select,
  Adapt,
  Sheet,
  TextArea,
} from 'tamagui'
import { useState } from 'react'

function ContactInquiryForm() {
  const [topic, setTopic] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Inquiry submitted!')
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

        <YStack gap="$1">
          <Label htmlFor="topic">Topic</Label>
          <Select id="topic" value={topic} onValueChange={setTopic}>
            <Select.Trigger>
              <Select.Value placeholder="Select topic" />
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
                <Select.Item index={0} value="support">
                  <Select.ItemText>Support</Select.ItemText>
                </Select.Item>
                <Select.Item index={1} value="sales">
                  <Select.ItemText>Sales</Select.ItemText>
                </Select.Item>
                <Select.Item index={2} value="feedback">
                  <Select.ItemText>Feedback</Select.ItemText>
                </Select.Item>
                <Select.Item index={3} value="other">
                  <Select.ItemText>Other</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Message"
            rows={4}
            required
          />
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox id="consent" checked={consent} onCheckedChange={setConsent}>
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="consent">Allow follow-up communication</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Submit inquiry
        </Button>
      </YStack>
    </form>
  )
}

export default ContactInquiryForm
