import { Form, Button, RadioGroup, Radio, Input, Uploader } from 'rsuite'

function SupportTicketForm() {
  const handleSubmit = () => {
    alert('Support ticket submitted!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="subject">
        <Form.ControlLabel>Subject</Form.ControlLabel>
        <Form.Control name="subject" type="text" required />
      </Form.Group>

      <Form.Group controlId="priority">
        <Form.ControlLabel>Priority</Form.ControlLabel>
        <Form.Control name="priority" accepter={RadioGroup} inline required>
          <Radio value="low">Low</Radio>
          <Radio value="medium">Medium</Radio>
          <Radio value="high">High</Radio>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.ControlLabel>Issue description</Form.ControlLabel>
        <Form.Control name="description" accepter={Input} as="textarea" rows={4} required />
      </Form.Group>

      <Form.Group controlId="attachments">
        <Form.ControlLabel>Attachments</Form.ControlLabel>
        <Uploader action="" autoUpload={false} multiple>
          <Button>Select files...</Button>
        </Uploader>
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Submit ticket
        </Button>
      </Form.Group>
    </Form>
  )
}

export default SupportTicketForm
