import {
  FormControl,
  TextInput,
  Textarea,
  Radio,
  RadioGroup,
  Button,
  Text,
} from '@primer/react'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <FormControl required>
        <FormControl.Label>Subject</FormControl.Label>
        <TextInput
          id="primer-ticket-subject"
          name="subject"
          type="text"
          block
        />
      </FormControl>

      <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <Text as="legend" sx={{ fontWeight: 'bold', mb: 2 }}>
          Priority
        </Text>
        <RadioGroup name="priority">
          <RadioGroup.Label visuallyHidden>Priority</RadioGroup.Label>
          <FormControl>
            <Radio value="low" name="priority" />
            <FormControl.Label>Low</FormControl.Label>
          </FormControl>
          <FormControl>
            <Radio value="medium" name="priority" />
            <FormControl.Label>Medium</FormControl.Label>
          </FormControl>
          <FormControl>
            <Radio value="high" name="priority" />
            <FormControl.Label>High</FormControl.Label>
          </FormControl>
        </RadioGroup>
      </fieldset>

      <FormControl required>
        <FormControl.Label>Issue description</FormControl.Label>
        <Textarea
          id="primer-ticket-description"
          name="description"
          rows={4}
          block
        />
      </FormControl>

      <FormControl>
        <FormControl.Label>Attachments</FormControl.Label>
        <input
          id="primer-ticket-attachments"
          name="attachments"
          type="file"
          multiple
          style={{ display: 'block', marginTop: '4px' }}
        />
      </FormControl>

      <Button type="submit" variant="primary" block>
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
