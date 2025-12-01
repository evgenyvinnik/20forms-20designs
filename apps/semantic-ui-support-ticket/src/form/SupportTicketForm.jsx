import { useState } from 'react'
import { Form, Button, Radio } from 'semantic-ui-react'

function SupportTicketForm({ inverted }) {
  const [priority, setPriority] = useState('medium')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Ticket submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-support-ticket-subject"
        name="subject"
        label="Subject"
        type="text"
        required
      />
      <Form.Group grouped>
        <label>Priority</label>
        <Form.Field>
          <Radio
            label="Low"
            name="priority"
            value="low"
            checked={priority === 'low'}
            onChange={() => setPriority('low')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Medium"
            name="priority"
            value="medium"
            checked={priority === 'medium'}
            onChange={() => setPriority('medium')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="High"
            name="priority"
            value="high"
            checked={priority === 'high'}
            onChange={() => setPriority('high')}
          />
        </Form.Field>
      </Form.Group>
      <Form.TextArea
        id="semantic-ui-support-ticket-description"
        name="description"
        label="Issue description"
        rows={4}
        required
      />
      <Form.Input
        id="semantic-ui-support-ticket-attachments"
        name="attachments"
        label="Attachments"
        type="file"
        multiple
      />
      <Button type="submit" primary>
        Submit ticket
      </Button>
    </Form>
  )
}

export default SupportTicketForm
