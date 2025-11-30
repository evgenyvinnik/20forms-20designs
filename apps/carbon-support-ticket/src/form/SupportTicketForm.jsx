import { Form, TextInput, RadioButtonGroup, RadioButton, TextArea, FileUploader, Button, Stack } from '@carbon/react'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-ticket-subject"
          name="subject"
          labelText="Subject"
          required
        />
        <RadioButtonGroup
          legendText="Priority"
          name="priority"
          defaultSelected="low"
        >
          <RadioButton
            id="carbon-ticket-priority-low"
            labelText="Low"
            value="low"
          />
          <RadioButton
            id="carbon-ticket-priority-medium"
            labelText="Medium"
            value="medium"
          />
          <RadioButton
            id="carbon-ticket-priority-high"
            labelText="High"
            value="high"
          />
        </RadioButtonGroup>
        <TextArea
          id="carbon-ticket-description"
          name="description"
          labelText="Issue description"
          rows={4}
          required
        />
        <FileUploader
          id="carbon-ticket-attachments"
          name="attachments"
          labelTitle="Attachments"
          labelDescription="Upload any relevant files"
          buttonLabel="Add files"
          filenameStatus="edit"
          accept={['.jpg', '.png', '.pdf']}
          multiple
        />
        <Button type="submit">Submit ticket</Button>
      </Stack>
    </Form>
  )
}

export default SupportTicketForm
