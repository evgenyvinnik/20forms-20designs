import { Form, Button } from 'react-bootstrap'

function SupportTicketForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Support ticket submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-support-subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control name="subject" type="text" required />
      </Form.Group>

      <Form.Group
        as="fieldset"
        className="mb-3"
        controlId="rb-support-priority"
      >
        <Form.Label as="legend">Priority</Form.Label>
        <Form.Check
          type="radio"
          id="rb-support-priority-low"
          name="priority"
          value="low"
          label="Low"
          required
        />
        <Form.Check
          type="radio"
          id="rb-support-priority-medium"
          name="priority"
          value="medium"
          label="Medium"
        />
        <Form.Check
          type="radio"
          id="rb-support-priority-high"
          name="priority"
          value="high"
          label="High"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-support-description">
        <Form.Label>Issue description</Form.Label>
        <Form.Control as="textarea" name="description" rows={4} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-support-attachments">
        <Form.Label>Attachments</Form.Label>
        <Form.Control name="attachments" type="file" multiple />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit ticket
      </Button>
    </Form>
  )
}

export default SupportTicketForm
