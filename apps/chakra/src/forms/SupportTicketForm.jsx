import {
  Button,
  Field,
  Input,
  Stack,
  Textarea,
  Fieldset,
  RadioGroup,
} from '@chakra-ui/react'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Subject</Field.Label>
          <Input id="chakra-ticket-subject" name="subject" type="text" />
        </Field.Root>
        <Fieldset.Root>
          <Fieldset.Legend>Priority</Fieldset.Legend>
          <RadioGroup.Root name="priority" defaultValue="low">
            <Stack gap={2}>
              <RadioGroup.Item value="low">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Low</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="medium">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Medium</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="high">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>High</RadioGroup.ItemText>
              </RadioGroup.Item>
            </Stack>
          </RadioGroup.Root>
        </Fieldset.Root>
        <Field.Root required>
          <Field.Label>Issue description</Field.Label>
          <Textarea
            id="chakra-ticket-description"
            name="description"
            rows={4}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Attachments</Field.Label>
          <Input
            id="chakra-ticket-attachments"
            name="attachments"
            type="file"
            multiple
          />
        </Field.Root>
        <Button type="submit" colorPalette="blue">
          Submit ticket
        </Button>
      </Stack>
    </form>
  )
}

export default SupportTicketForm
