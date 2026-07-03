import {
  Box,
  Button,
  FileInput,
  Form,
  FormField,
  RadioButtonGroup,
  TextArea,
  TextInput,
} from 'grommet'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Subject"
        name="subject"
        htmlFor="grommet-ticket-subject"
        required
      >
        <TextInput id="grommet-ticket-subject" name="subject" type="text" />
      </FormField>
      <FormField
        label="Priority"
        name="priority"
        htmlFor="grommet-ticket-priority"
        required
      >
        <RadioButtonGroup
          id="grommet-ticket-priority"
          name="priority"
          options={['Low', 'Medium', 'High']}
        />
      </FormField>
      <FormField
        label="Issue description"
        name="description"
        htmlFor="grommet-ticket-description"
        required
      >
        <TextArea id="grommet-ticket-description" name="description" rows={4} />
      </FormField>
      <FormField
        label="Attachments"
        name="attachments"
        htmlFor="grommet-ticket-attachments"
      >
        <FileInput
          id="grommet-ticket-attachments"
          name="attachments"
          multiple
        />
      </FormField>
      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Submit ticket" />
      </Box>
    </Form>
  )
}

export default SupportTicketForm
