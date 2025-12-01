import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Textarea,
  Radio,
  Button,
  Fieldset,
} from '@trussworks/react-uswds'

function SupportTicketForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
    text: { color: '#f0f0f0' },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-ticket-subject"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Subject
        </Label>
        <TextInput
          id="uswds-ticket-subject"
          name="subject"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <Fieldset
        legend="Priority"
        legendStyle={theme === 'dark' ? 'large' : 'default'}
      >
        <Radio
          id="uswds-ticket-priority-low"
          name="priority"
          value="low"
          label="Low"
          defaultChecked
        />
        <Radio
          id="uswds-ticket-priority-medium"
          name="priority"
          value="medium"
          label="Medium"
        />
        <Radio
          id="uswds-ticket-priority-high"
          name="priority"
          value="high"
          label="High"
        />
      </Fieldset>
      <FormGroup>
        <Label
          htmlFor="uswds-ticket-description"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Issue description
        </Label>
        <Textarea
          id="uswds-ticket-description"
          name="description"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-ticket-attachments"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Attachments
        </Label>
        <input
          id="uswds-ticket-attachments"
          name="attachments"
          type="file"
          multiple
          className="usa-file-input"
        />
      </FormGroup>
      <Button type="submit">Submit ticket</Button>
    </Form>
  )
}

export default SupportTicketForm
