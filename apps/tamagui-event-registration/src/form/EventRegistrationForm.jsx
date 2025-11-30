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
} from 'tamagui'
import { useState } from 'react'

function EventRegistrationForm() {
  const [ticketType, setTicketType] = useState('')
  const [newsletter, setNewsletter] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Event registration submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$3">
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
          <Label htmlFor="ticketType">Ticket type</Label>
          <Select
            id="ticketType"
            value={ticketType}
            onValueChange={setTicketType}
          >
            <Select.Trigger>
              <Select.Value placeholder="Select ticket" />
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
                <Select.Item index={0} value="general">
                  <Select.ItemText>General admission</Select.ItemText>
                </Select.Item>
                <Select.Item index={1} value="vip">
                  <Select.ItemText>VIP</Select.ItemText>
                </Select.Item>
                <Select.Item index={2} value="student">
                  <Select.ItemText>Student</Select.ItemText>
                </Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="guestCount">Number of guests</Label>
          <Input
            id="guestCount"
            name="guestCount"
            inputMode="numeric"
            placeholder="Number of guests"
            required
          />
        </YStack>

        <XStack gap="$2" alignItems="center">
          <Checkbox
            id="newsletter"
            checked={newsletter}
            onCheckedChange={setNewsletter}
          >
            <Checkbox.Indicator>
              <Text>✓</Text>
            </Checkbox.Indicator>
          </Checkbox>
          <Label htmlFor="newsletter">Notify me about future events</Label>
        </XStack>

        <Button themeInverse onPress={() => {}}>
          Register
        </Button>
      </YStack>
    </form>
  )
}

export default EventRegistrationForm
