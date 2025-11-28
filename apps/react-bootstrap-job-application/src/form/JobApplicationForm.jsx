import { Form, Button } from 'react-bootstrap'

function JobApplicationForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Application submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-job-full-name">
        <Form.Label>Full name</Form.Label>
        <Form.Control name="fullName" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-job-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-job-phone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          name="phone"
          type="tel"
          pattern={'[+0-9\\s-]{7,20}'}
          inputMode="tel"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-job-role">
        <Form.Label>Role applied for</Form.Label>
        <Form.Control name="role" type="text" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-job-resume">
        <Form.Label>Resume link</Form.Label>
        <Form.Control name="resume" type="url" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-job-cover-letter">
        <Form.Label>Cover letter</Form.Label>
        <Form.Control as="textarea" name="coverLetter" rows={4} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-job-updates">
        <Form.Check
          type="checkbox"
          label="Keep me informed about future roles"
          name="updates"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit application
      </Button>
    </Form>
  )
}

export default JobApplicationForm
