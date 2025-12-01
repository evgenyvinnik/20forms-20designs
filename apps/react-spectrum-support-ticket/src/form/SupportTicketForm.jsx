import { Form, TextField, TextArea, RadioGroup, Radio, Button, Flex, Text } from '@adobe/react-spectrum'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Ticket submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField
          label="Subject"
          name="subject"
          type="text"
          isRequired
        />
        <RadioGroup label="Priority" name="priority" isRequired>
          <Radio value="low">Low</Radio>
          <Radio value="medium">Medium</Radio>
          <Radio value="high">High</Radio>
        </RadioGroup>
        <TextArea
          label="Issue description"
          name="description"
          isRequired
        />
        <Flex direction="column" gap="size-100">
          <Text>Attachments</Text>
          <input type="file" name="attachments" multiple />
        </Flex>
        <Button type="submit" variant="accent">
          Submit ticket
        </Button>
      </Flex>
    </Form>
  )
}

export default SupportTicketForm
