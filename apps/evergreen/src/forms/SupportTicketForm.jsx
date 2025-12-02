import {
  Button,
  FilePicker,
  Pane,
  RadioGroup,
  TextInputField,
  TextareaField,
} from 'evergreen-ui'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Pane
      is="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={8}
    >
      <TextInputField
        id="evergreen-ticket-subject"
        label="Subject"
        name="subject"
        type="text"
        required
      />
      <RadioGroup
        label="Priority"
        name="priority"
        defaultValue="low"
        isRequired
        options={[
          { label: 'Low', value: 'low' },
          { label: 'Medium', value: 'medium' },
          { label: 'High', value: 'high' },
        ]}
      />
      <TextareaField
        id="evergreen-ticket-description"
        label="Issue description"
        name="description"
        rows={4}
        required
      />
      <Pane display="flex" flexDirection="column" gap={8}>
        <label htmlFor="evergreen-ticket-attachments">Attachments</label>
        <FilePicker
          id="evergreen-ticket-attachments"
          name="attachments"
          multiple
        />
      </Pane>
      <Button appearance="primary" type="submit">
        Submit ticket
      </Button>
    </Pane>
  )
}

export default SupportTicketForm
