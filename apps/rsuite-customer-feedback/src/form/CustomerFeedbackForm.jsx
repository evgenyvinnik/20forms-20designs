import { Form, Button, SelectPicker, Input, Checkbox } from 'rsuite'

const ratingOptions = [
  { label: 'Excellent', value: 'excellent' },
  { label: 'Good', value: 'good' },
  { label: 'Average', value: 'average' },
  { label: 'Poor', value: 'poor' },
]

function CustomerFeedbackForm() {
  const handleSubmit = () => {
    alert('Feedback submitted!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.ControlLabel>Name</Form.ControlLabel>
        <Form.Control name="name" type="text" required />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.ControlLabel>Email address</Form.ControlLabel>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group controlId="rating">
        <Form.ControlLabel>Overall rating</Form.ControlLabel>
        <Form.Control
          name="rating"
          accepter={SelectPicker}
          data={ratingOptions}
          placeholder="Select rating"
          block
          required
        />
      </Form.Group>

      <Form.Group controlId="comments">
        <Form.ControlLabel>Comments</Form.ControlLabel>
        <Form.Control
          name="comments"
          accepter={Input}
          as="textarea"
          rows={4}
          required
        />
      </Form.Group>

      <Form.Group controlId="followUp">
        <Checkbox name="followUp">I would like a follow-up</Checkbox>
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Send feedback
        </Button>
      </Form.Group>
    </Form>
  )
}

export default CustomerFeedbackForm
