import { Form, Button } from 'react-bootstrap'

function CustomerFeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Feedback submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-feedback-name">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-feedback-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-feedback-rating">
        <Form.Label>Overall rating</Form.Label>
        <Form.Select name="rating" required>
          <option value="">Select rating</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-feedback-comments">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" name="comments" rows={4} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-feedback-followup">
        <Form.Check
          type="checkbox"
          label="I would like a follow-up"
          name="followUp"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send feedback
      </Button>
    </Form>
  )
}

export default CustomerFeedbackForm
