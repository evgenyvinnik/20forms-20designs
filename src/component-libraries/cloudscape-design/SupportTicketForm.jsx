import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Container,
  FormField,
  Input,
  RadioGroup,
  SpaceBetween,
  Textarea,
} from '@cloudscape-design/components'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Subject">
            <Input
              name="subject"
              type="text"
              placeholder="Brief description"
              required
            />
          </FormField>
          <FormField label="Priority">
            <RadioGroup
              name="priority"
              items={[
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' },
              ]}
            />
          </FormField>
          <FormField label="Issue description">
            <Textarea
              name="description"
              placeholder="Describe your issue"
              rows={4}
            />
          </FormField>
          <FormField
            label="Attachments"
            description="Optional file attachments"
          >
            <input name="attachments" type="file" multiple />
          </FormField>
          <Button variant="primary" formAction="submit">
            Submit ticket
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default SupportTicketForm
