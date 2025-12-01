import { Form, Button, Input, Checkbox } from 'rsuite'

function JobApplicationForm() {
  const handleSubmit = () => {
    alert('Application submitted!')
  }

  return (
    <Form fluid onSubmit={handleSubmit}>
      <Form.Group controlId="fullName">
        <Form.ControlLabel>Full name</Form.ControlLabel>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.ControlLabel>Email address</Form.ControlLabel>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.ControlLabel>Phone number</Form.ControlLabel>
        <Form.Control name="phone" type="tel" required />
      </Form.Group>

      <Form.Group controlId="role">
        <Form.ControlLabel>Role applied for</Form.ControlLabel>
        <Form.Control name="role" type="text" required />
      </Form.Group>

      <Form.Group controlId="resume">
        <Form.ControlLabel>Resume link</Form.ControlLabel>
        <Form.Control name="resume" type="url" required />
      </Form.Group>

      <Form.Group controlId="coverLetter">
        <Form.ControlLabel>Cover letter</Form.ControlLabel>
        <Form.Control name="coverLetter" accepter={Input} as="textarea" rows={4} required />
      </Form.Group>

      <Form.Group controlId="updates">
        <Checkbox name="updates">Keep me informed about future roles</Checkbox>
      </Form.Group>

      <Form.Group>
        <Button appearance="primary" type="submit">
          Submit application
        </Button>
      </Form.Group>
    </Form>
  )
}

export default JobApplicationForm
