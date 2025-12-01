import {
  Button,
  FileInput,
  FormGroup,
  InputGroup,
  Radio,
  TextArea,
} from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup label="Subject" labelFor="blueprint-ticket-subject">
        <InputGroup
          id="blueprint-ticket-subject"
          name="subject"
          type="text"
          required
          fill
        />
      </FormGroup>

      <FormGroup label="Priority" labelFor="blueprint-ticket-priority-low">
        <Radio
          id="blueprint-ticket-priority-low"
          name="priority"
          value="low"
          label="Low"
          required
        />
        <Radio
          id="blueprint-ticket-priority-medium"
          name="priority"
          value="medium"
          label="Medium"
        />
        <Radio
          id="blueprint-ticket-priority-high"
          name="priority"
          value="high"
          label="High"
        />
      </FormGroup>

      <FormGroup
        label="Issue description"
        labelFor="blueprint-ticket-description"
      >
        <TextArea
          id="blueprint-ticket-description"
          name="description"
          rows={4}
          required
          fill
        />
      </FormGroup>

      <FormGroup label="Attachments" labelFor="blueprint-ticket-attachments">
        <FileInput
          inputProps={{
            id: 'blueprint-ticket-attachments',
            name: 'attachments',
            multiple: true,
          }}
          text="Choose files..."
          fill
        />
      </FormGroup>

      <Button intent="primary" type="submit">
        Submit ticket
      </Button>
    </form>
  )
}

export default SupportTicketForm
