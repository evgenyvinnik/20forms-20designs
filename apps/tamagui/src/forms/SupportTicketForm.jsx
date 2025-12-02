import {
  Button,
  Input,
  Label,
  XStack,
  YStack,
  TextArea,
  RadioGroup,
} from 'tamagui'
import { useState } from 'react'

function SupportTicketForm() {
  const [priority, setPriority] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <YStack gap="$2">
        <YStack gap="$1">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" placeholder="Subject" required />
        </YStack>

        <YStack gap="$1">
          <Label>Priority</Label>
          <RadioGroup value={priority} onValueChange={setPriority}>
            <YStack gap="$2">
              <XStack gap="$2" alignItems="center">
                <RadioGroup.Item value="low" id="priority-low">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="priority-low">Low</Label>
              </XStack>
              <XStack gap="$2" alignItems="center">
                <RadioGroup.Item value="medium" id="priority-medium">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="priority-medium">Medium</Label>
              </XStack>
              <XStack gap="$2" alignItems="center">
                <RadioGroup.Item value="high" id="priority-high">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <Label htmlFor="priority-high">High</Label>
              </XStack>
            </YStack>
          </RadioGroup>
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="description">Issue description</Label>
          <TextArea
            id="description"
            name="description"
            placeholder="Issue description"
            rows={4}
            required
          />
        </YStack>

        <YStack gap="$1">
          <Label htmlFor="attachments">Attachments</Label>
          <input id="attachments" name="attachments" type="file" multiple />
        </YStack>

        <Button themeInverse onPress={() => {}}>
          Submit ticket
        </Button>
      </YStack>
    </form>
  )
}

export default SupportTicketForm
