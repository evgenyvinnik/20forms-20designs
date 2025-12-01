import {
  Button,
  Stack,
  TextInput,
  Textarea,
  Radio,
  Group,
  FileInput,
} from '@mantine/core'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-ticket-subject"
          name="subject"
          label="Subject"
          type="text"
          required
        />
        <Radio.Group name="priority" label="Priority" required>
          <Group mt="xs">
            <Radio value="low" label="Low" />
            <Radio value="medium" label="Medium" />
            <Radio value="high" label="High" />
          </Group>
        </Radio.Group>
        <Textarea
          id="mantine-ticket-description"
          name="description"
          label="Issue description"
          rows={4}
          required
        />
        <FileInput
          id="mantine-ticket-attachments"
          name="attachments"
          label="Attachments"
          multiple
        />
        <Button type="submit">Submit ticket</Button>
      </Stack>
    </form>
  )
}

export default SupportTicketForm
